import "./style.css";
import * as THREE from "three";
import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import fontData from "@compai/font-fugaz-one/data/typefaces/normal-400.json"; // @see https://components.ai/docs/typefaces/packages
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

// 書き出したJSONファイルを参照する場合コメントアウトを外し、projectのstateに指定する
// import projectState from "./assets/state.json";

let increment,
  mouseX,
  mouseY = 0;

// Theatre.jsのスタジオを初期化
studio.initialize();

// プロジェクトを取得
const project = getProject("THREE.js x Theatre.js"); //ローカルストレージに保存されたアニメーションを参照
// const project = getProject("THREE.js x Theatre.js", { state: projectState }); // エキスポートしたjsonからアニメーションを参照

// アニメーションを保存するシートを作成
const sheet = project.sheet("Opening animation"); // オープニングアニメーション用のシート
const sheet2 = project.sheet("Cube animation"); // クリック時に再生するアニメーション用のシート

// ロード後に一回再生
// project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity })); // ループ再生

const about = document.querySelector("#nav-about");
const works = document.querySelector("#nav-works");
const contact = document.querySelector("#nav-contact");
about.addEventListener("click", () => {
  sheet2.sequence.play();
});

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
  document.body.clientWidth / window.innerHeight, // document.body.clientWidth：スクロールバーを抜いた幅
  1,
  1000,
);

// アニメーションさせるメッシュ
const geometry = new THREE.TorusKnotGeometry(16, 1, 300, 16, 2, 5);
const material = new THREE.MeshStandardMaterial({
  color: "#ff9900",
  emissive: "#049ef4",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const geoBall = new THREE.BoxGeometry(1, 1, 1);
const matBall = new THREE.MeshNormalMaterial();
const meshBall = new THREE.Mesh(geoBall, matBall);
meshBall.castShadow = true;
meshBall.receiveShadow = true;
scene.add(meshBall);
meshBall.rotation.y = Math.PI * 0.1;

/**
 *　Theatre.jsでアニメーションをさせるための定義
 *
 * シート "Opening animation"
 */
const torusKnotObj = sheet.object("Torus Knot", {
  // GUIから入力ができるよう変更させる回転を定義
  rotation: types.compound({
    x: types.number(mesh.rotation.x, { range: [-2, 2] }), // −360 〜 360度 の想定
    y: types.number(mesh.rotation.y, { range: [-2, 2] }),
    z: types.number(mesh.rotation.z, { range: [-2, 2] }),
  }),
  position: types.compound({
    sx: types.number(mesh.position.x, { range: [-10, 10] }),
    sy: types.number(mesh.position.y, { range: [-10, 10] }),
    sz: types.number(mesh.position.z, { range: [-10, 10] }),
  }),

  cameraPos: types.number(camera.position.z, { range: [-1, 180] }),

  ballPos: types.number(meshBall.position.y, { range: [-10, 10] }),
});

// GUIからの入力をオブジェクトに反映
torusKnotObj.onValuesChange((values) => {
  const { x, y, z } = values.rotation;
  const { sx, sy, sz } = values.position;
  mesh.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI); // 度数ではなくラジアンなので変換
  mesh.position.set(sx, sy, sz);

  camera.position.z = values.cameraPos;
  meshBall.position.y = mouseY + values.ballPos;
});

/**
 * シート "Cube animation" のアニメーション定義
 */
// キューブをシーンに追加
const cubeSize = 7;
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cube = new THREE.Mesh(cubeGeometry, material);
scene.add(cube);

const cubeObj = sheet2.object("Cube", {
  // GUIから入力ができるよう変更させる回転を定義しておく
  rotation: types.compound({
    x: types.number(cube.rotation.x, { range: [-2, 2] }),
    y: types.number(cube.rotation.y, { range: [-2, 2] }),
    z: types.number(cube.rotation.z, { range: [-2, 2] }),
  }),
  position: types.compound({
    sx: types.number(cube.position.x, { range: [-100, 100] }),
    sy: types.number(cube.position.y, { range: [-100, 100] }),
    sz: types.number(cube.position.z, { range: [-100, 100] }),
  }),
});

cubeObj.onValuesChange((values) => {
  const { x, y, z } = values.rotation;
  const { sx, sy, sz } = values.position;
  cube.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  cube.position.set(sx, sy, sz);
});

/**
 * 文字
 */
const font = new FontLoader().parse(fontData);
const textGeometry = new TextGeometry("Hello world!", {
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

// そのままのTextGeometryだと表面がフラットなので、スムースシェーディングになるよう調整
const textGeometry2 = textGeometry.clone().deleteAttribute("normal");
const textGeometry3 = BufferGeometryUtils.mergeVertices(textGeometry2);
textGeometry3.computeVertexNormals();
const text = new THREE.Mesh(textGeometry3, material);
text.position.z = -50;
scene.add(text);

/**
 * 地面
 */
const cylinderGeometry = new THREE.CylinderGeometry(30, 32, 7, 48);
const cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.y = -30;
scene.add(cylinder);

/**
 *
 */
const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.x = -20;
scene.add(sphere);

const torusGeometry = new THREE.TorusGeometry(3.5, 2.2, 16, 32);
const torus = new THREE.Mesh(torusGeometry, material);
torus.position.x = 20;
scene.add(torus);

// https://jsfiddle.net/prisoner849/pjb3cdm8/
const angleStep = Math.PI * 0.5;
const radius = 1;
const shape = new THREE.Shape()
  .absarc(2, 2, radius, angleStep * 0, angleStep * 1)
  .absarc(-2, 2, radius, angleStep * 1, angleStep * 2)
  .absarc(-2, -2, radius, angleStep * 2, angleStep * 3)
  .absarc(2, -2, radius, angleStep * 3, angleStep * 4);
const triangleShape = new THREE.Shape()
  .moveTo(0, -3.45)
  .lineTo(-4, 3.45)
  .lineTo(4, 3.45)
  .lineTo(0, -3.45);

const extrudeSettings = {
  depth: 3,
  bevelEnabled: true,
  bevelThickness: 0.2,
  bevelSize: 0.5,
  bevelSegments: 5,
  curveSegments: 12,
};
const roundRectGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const roundRectGeometry2 = roundRectGeometry.clone().deleteAttribute("normal");
const roundRectGeometry3 =
  BufferGeometryUtils.mergeVertices(roundRectGeometry2);
roundRectGeometry3.computeVertexNormals();
const roundRect = new THREE.Mesh(roundRectGeometry3, material);
roundRect.rotation.z = Math.PI * 0.5;
roundRect.position.y = 10;
scene.add(roundRect);

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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(document.body.clientWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.render(scene, camera);

const app = document.querySelector("#app");
app.appendChild(renderer.domElement);

// 毎フレーム時に実行されるループイベント
const tick = () => {
  // レンダリング
  renderer.render(scene, camera);

  increment++;
  meshBall.position.x = mouseX;
  meshBall.position.y = mouseY;

  window.requestAnimationFrame(tick);
};
tick();

// リサイズ時の処理
const onResize = () => {
  // ウィンドウのサイズを取得
  const width = document.body.clientWidth;
  const height = window.innerHeight;

  // レンダラーのサイズを調整する
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);

  // カメラのアスペクト比を正す
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

// 初期化
onResize();
// リサイズイベント発生時に実行
window.addEventListener("resize", onResize);

window.addEventListener("mousemove", (e) => {
  mouseY = (window.innerHeight / 2 - e.offsetY) / 3;
  mouseX = -(document.body.clientWidth / 2 - e.offsetX) / 3;
});
