import * as THREE from "three";
import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import fontData from "@compai/font-fugaz-one/data/typefaces/normal-400.json"; // @see https://components.ai/docs/typefaces/packages
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// 書き出したJSONファイル（sampleディレクトリと同じアニメーションをコピーしたいので、一旦読み込ませる）
// import projectState from "../assets/SampleProject.theatre-project-state.json";
import projectState from "../assets/MultipleAnimationProject.theatre-project-state.json";

// Theatre.jsのスタジオを初期化（開発環境でのみUIを表示）
if (import.meta.env.DEV) {
  studio.initialize();
}

// プロジェクトを取得
// const project = getProject("MultipleAnimationProject");
const project = getProject("MultipleAnimationProject", { state: projectState }); // エキスポートしたjsonからアニメーションを参照

// アニメーションを保存するシートを作成
const kvSheet = project.sheet("KV Animation"); // ロード後自動で再生するアニメーション用のシート
const scrollAnimSheet = project.sheet("Scroll Animation"); // スクロールボタン押下時に再生するアニメーション用のシート
const scrollButtonSheet = project.sheet("Scroll Button Animation"); // スクロールボタンのアニメーション用のシート
const textLoopSheet = project.sheet("Text Loop Animation"); // テキストのループアニメーション用のシート

(async () => {
  // Theatre.jsのロードを待つ
  await project.ready;

  // ロード後、1度だけ再生
  kvSheet.sequence.play();

  // KVアニメーション後、ループアニメーションを開始
  textLoopSheet.sequence.play({
    iterationCount: Infinity, // 無限ループ
    direction: "alternateReverse", // 通常再生-逆再生を往復
    rate: 0.8, // 0.8倍速
  });
})();

// スクロールボタン押下で再生
const scrollButton = document.querySelector("#scroll-button");
scrollButton.addEventListener("click", () => {
  scrollAnimSheet.sequence.play();
});

// スクロールでも再生（IntersectionObserverを使用）
const section = document.querySelector("#section-about"); // 交差の監視対象
const observer = new IntersectionObserver(
  (entries) => {
    // Theatre.jsが読み込まれていなければリターン
    if (!project.isReady) {
      return;
    }
    if (entries[0].isIntersecting) {
      // スクロールして交差したときにアニメーションを再生
      scrollAnimSheet.sequence.play();
      scrollButtonSheet.sequence.play();
    } else {
      // 上に戻るときは逆再生
      scrollAnimSheet.sequence.play({ direction: "reverse" });
      scrollButtonSheet.sequence.play({ direction: "reverse" });
    }
  },
  {
    root: null, // ビューポートをルート要素とする
    rootMargin: "-80% 0px -20%", // ビューポートの上から80%を判定基準にする
    threshold: 0, // 閾値は0
  },
);
observer.observe(section);

/**
 * Three.jsのセットアップ
 */
// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color("#1d1d26");
// フォグを設定
scene.fog = new THREE.Fog("#000000", 50, 1000); // (色, 開始距離, 終点距離);

// カメラを作成：THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
const camera = new THREE.PerspectiveCamera(
  45,
  document.body.clientWidth / window.innerHeight, // document.body.clientWidth：スクロールバーを幅含まない横幅
  1,
  1000,
);
camera.position.z = 50;

const material = new THREE.MeshStandardMaterial({
  color: "#ff9900",
  emissive: "#049ef4",
});

/**
 * 文字のメッシュ
 */
// フォントを読み込みジオメトリを作成
const font = new FontLoader().parse(fontData);
const textGeometry = new TextGeometry("Hello!", {
  font: font,
  size: 15,
  depth: 3,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 1,
  bevelSize: 0.9, // 数値が大きいほど膨張した感じになる
  bevelOffset: 0,
  bevelSegments: 5,
});
textGeometry.center(); // テキストを中心揃え

// そのままのTextGeometryだと表面がフラットで綺麗に見えないので、スムースシェーディングになるよう調整
const textGeometry2 = textGeometry.clone().deleteAttribute("normal");
const textGeometry3 = BufferGeometryUtils.mergeVertices(textGeometry2);
textGeometry3.computeVertexNormals();

// テキストメッシュを作成
const text = new THREE.Mesh(textGeometry3, material);
scene.add(text); // シーンに追加

const cubeMaterial = new THREE.MeshStandardMaterial({
  color: "#ff9900",
  emissive: "#049ef4",
});
const boxGeometry = new THREE.BoxGeometry(7, 7, 7);
const cube = new THREE.Mesh(boxGeometry, cubeMaterial);
scene.add(cube); // three.jsのシーンに追加

/**
 * シート "Cube animation" のアニメーション定義
 */
const cubeObj = kvSheet.object("Cube", {
  // GUIから入力できるよう、変更させたいプロパティを定義
  // 回転を定義
  rotation: types.compound({
    // types.compound() でグループ化
    x: types.number(cube.rotation.x, { range: [-2, 2] }),
    y: types.number(cube.rotation.y, { range: [-2, 2] }),
    z: types.number(cube.rotation.z, { range: [-2, 2] }),
  }),
  // 位置を定義
  position: types.compound({
    px: types.number(cube.position.x, { range: [-100, 100] }),
    py: types.number(cube.position.y, { range: [-100, 100] }),
    pz: types.number(cube.position.z, { range: [-100, 100] }),
  }),
  // スケール
  scale: types.compound({
    sx: types.number(cube.scale.x, { range: [0, 4] }),
    sy: types.number(cube.scale.y, { range: [0, 4] }),
    sz: types.number(cube.scale.z, { range: [0, 4] }),
  }),
  // 色を定義
  color: types.rgba({ r: 255, g: 0, b: 0, a: 1 }),
});

// GUIからの入力をオブジェクトに反映
cubeObj.onValuesChange((values) => {
  // 回転を反映
  const { x, y, z } = values.rotation;
  cube.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  // 位置を反映
  const { px, py, pz } = values.position;
  cube.position.set(px, py, pz);
  // スケールを反映
  const { sx, sy, sz } = values.scale;
  cube.scale.set(sx, sy, sz);

  // マテリアルの色を反映
  cubeMaterial.color = values.color;
});

/**
 * シート "KV Animation" の定義
 */
const textObjProps = {
  // GUIから入力ができるよう変更させる回転を定義
  rotation: types.compound({
    x: types.number(0, { range: [-2, 2] }), // −360 〜 360度 の想定
    y: types.number(0, { range: [-2, 2] }),
    z: types.number(0, { range: [-2, 2] }),
  }),
  position: types.compound({
    px: types.number(0, { range: [-100, 100] }),
    py: types.number(0, { range: [-100, 100] }),
    pz: types.number(0, { range: [-100, 100] }),
  }),
};

const textObj = kvSheet.object("Text", textObjProps);

const callbackFunc = (values) => {
  const { x, y, z } = values.rotation;
  const { px, py, pz } = values.position;
  text.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  text.position.set(px, py, pz);
};

// GUIからの入力をオブジェクトに反映
textObj.onValuesChange(callbackFunc);

// GUIから入力するためのプロパティを定義
const scrollButtonO = kvSheet.object("ScrollButton", {
  opacity: types.number(1, { range: [0, 1] }),
  visibility: types.stringLiteral("visible", {
    visible: "visible",
    hidden: "hidden",
  }),
  // スケール
  scale: types.compound({
    x: types.number(1, { range: [0, 2] }),
    y: types.number(1, { range: [0, 2] }),
  }),
});

// GUIからの入力を反映
scrollButtonO.onValuesChange((values) => {
  scrollButton.style.opacity = values.opacity;
  scrollButton.style.visibility = values.visibility;
  scrollButton.style.scale = `${values.scale.x} ${values.scale.y}`;
});

/**
 *　シート "Scroll Animation" の定義
 */
const textObj2 = scrollAnimSheet.object("Text", textObjProps);
textObj2.onValuesChange(callbackFunc);

/**
 * シート "Scroll Button Animation" の定義
 */
// GUIから入力するためのプロパティを定義
const scrollButtonObj = scrollButtonSheet.object("ScrollButton", {
  opacity: types.number(1, { range: [0, 1] }),
  visibility: types.stringLiteral("visible", {
    visible: "visible",
    hidden: "hidden",
  }),
});

// GUIからの入力を反映
scrollButtonObj.onValuesChange((values) => {
  scrollButton.style.opacity = values.opacity;
  scrollButton.style.visibility = values.visibility;
});

/**
 * シート "Text Loop Animation" の定義
 */
const textLoopObj = textLoopSheet.object("TextLoop", {
  posY: types.number(0, { range: [-10, 10] }),
});
textLoopObj.onValuesChange((value) => {
  text.position.y = value.posY;
});

/**
 * 地面
 */
// const cylinderGeometry = new THREE.CylinderGeometry(20, 21, 4, 56);
// const cylinder = new THREE.Mesh(cylinderGeometry, material);
// cylinder.position.y = -20;
// cylinder.position.z = -20;
// scene.add(cylinder);

/**
 * ライティング
 */
// 環境光源
const ambientLight = new THREE.AmbientLight("#ffffff", 1);
scene.add(ambientLight);

// RectAreaLight
const rectAreaLight = new THREE.RectAreaLight("#ff0", 10, 50, 50);
rectAreaLight.position.set(-20, 40, 10);
rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0)); // 座標原点の方を照らす
scene.add(rectAreaLight);

/**
 * レンダラー
 */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.render(scene, camera);

const app = document.querySelector("#app");
app.appendChild(renderer.domElement);

/**
 * 毎フレーム時に実行されるループイベント
 */
const tick = () => {
  // レンダリング
  renderer.render(scene, camera);

  // カメラはemptyObjectの方向を見るように
  // camera.lookAt(cube.position);

  window.requestAnimationFrame(tick);
};
tick();

/**
 * リサイズ時の処理
 */
const onResize = () => {
  // ウィンドウのサイズを取得
  const width = document.body.clientWidth; // スクロールバーを含まない横幅
  const height = window.innerHeight;

  // レンダラーのサイズを調整する
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // カメラのアスペクト比を正す
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
// 初期化
onResize();
// リサイズイベント発生時に実行
window.addEventListener("resize", onResize);
