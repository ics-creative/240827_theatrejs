import "/src/style.css";
import * as THREE from "three";
import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import fontData from "@compai/font-fugaz-one/data/typefaces/normal-400.json"; // @see https://components.ai/docs/typefaces/packages
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// 書き出したJSONファイルを参照する場合コメントアウトを外し、projectのstateに指定する
// import projectState from "../assets/state.json";

// Theatre.jsのスタジオを初期化（開発環境でのみUIを表示）
if (import.meta.env.DEV) {
  studio.initialize();
}

// プロジェクトを取得
const project = getProject("MultipleAnimationProject");
// const project = getProject("MultipleAnimationProject", { state: projectState }); // エキスポートしたjsonからアニメーションを参照

// アニメーションを保存するシートを作成
const kvSheet = project.sheet("KV Animation"); // ロード後自動で再生するアニメーション用のシート
const scrollButtonSheet = project.sheet("Scroll Animation"); // スクロールボタン押下時に再生するアニメーション用のシート

// プロジェクトの読み込み後に1回自動で再生
project.ready.then(() => kvSheet.sequence.play());

// スクロールボタン押下で再生
const scrollButton = document.querySelector("#scroll-button");
scrollButton.addEventListener("click", () => {
  scrollButtonSheet.sequence.play();
});

// スクロールでも再生
const section = document.querySelector("#section-about"); // 交差の監視対象
const observer = new IntersectionObserver(
  (entries) => {
    // プロジェクトが読み込まれていなければリターン
    if (!project.isReady) {
      return;
    }
    if (entries[0].isIntersecting) {
      // 交差したときにscrollButtonSheetを再生
      scrollButtonSheet.sequence.play();

      // 交差したときにscrollButtonSheetを再生
    } else {
      // 戻るときは逆再生
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
camera.position.z = 100;

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
  size: 30,
  depth: 3,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 2,
  bevelSize: 1.8, // 数値が大きいほど膨張した感じになる
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

/**
 * シート "KV Animation" のアニメーション定義
 */
const textObjProps = {
  // GUIから入力ができるよう変更させる回転を定義
  rotation: types.compound({
    x: types.number(text.rotation.x, { range: [-2, 2] }), // −360 〜 360度 の想定
    y: types.number(text.rotation.y, { range: [-2, 2] }),
    z: types.number(text.rotation.z, { range: [-2, 2] }),
  }),
  position: types.compound({
    px: types.number(text.position.x, { range: [-100, 100] }),
    py: types.number(text.position.y, { range: [-100, 100] }),
    pz: types.number(text.position.z, { range: [-100, 100] }),
  }),
};

const textObj = kvSheet.object("TextObject", textObjProps);

// GUIからの入力をオブジェクトに反映
textObj.onValuesChange((values) => {
  const { x, y, z } = values.rotation;
  const { px, py, pz } = values.position;
  text.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  text.position.set(px, py, pz);
});

/**
 *　シート "Scroll Animation" のアニメーション定義
 */
const geometry = new THREE.BoxGeometry(2, 2, 2);
const emptyObject = new THREE.Mesh(geometry, material);
scene.add(emptyObject); // three.jsのシーンに追加

const cameraObj = scrollButtonSheet.object("CameraObject", {
  position: types.compound({
    x: types.number(emptyObject.position.x, { range: [-100, 100] }),
    y: types.number(emptyObject.position.y, { range: [-10, 10] }),
    z: types.number(emptyObject.position.z, { range: [-10, 10] }),
  }),
  cameraPos: types.number(camera.position.z, { range: [-1, 180] }),
});
cameraObj.onValuesChange((values) => {
  const { x, y, z } = values.position;
  emptyObject.position.set(x, y, z);
  camera.position.z = values.cameraPos;
});

const textObj2 = scrollButtonSheet.object("TextObject", textObjProps);
textObj2.onValuesChange((values) => {
  const { x, y, z } = values.rotation;
  const { px, py, pz } = values.position;
  text.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  text.position.set(px, py, pz);
});

/**
 * 地面
 */
const cylinderGeometry = new THREE.CylinderGeometry(30, 32, 7, 48);
const cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.y = -30;
scene.add(cylinder);

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
  camera.lookAt(emptyObject.position);

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
