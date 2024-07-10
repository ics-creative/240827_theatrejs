import "./style.css";
import * as THREE from "three";
import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";

import projectState from "./state.json";

let increment,
  mouseX,
  mouseY = 0;

// Theatre.jsのスタジオを初期化
studio.initialize();

// プロジェクトを取得
// const project = getProject("THREE.js x Theatre.js"); //ローカルストレージに保存されたアニメーションを参照
const project = getProject("THREE.js x Theatre.js", { state: projectState }); // エキスポートしたjsonからアニメーションを参照

// シートを作成
const sheet = project.sheet("Animated scene");

// ロード後に一回再生
project.ready.then(() =>sheet.sequence.play({ iterationCount: Infinity })); // ループ再生

const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   sheet.sequence.play().then(() => {
//     // アニメーション後の何かの処理
//     console.log("fin");
//   });
// });

// button.addEventListener("click", async () => {
//   await sheet.sequence.play();
//   console.log("fin");
// });

/**
 * Three.jsのセットアップ
 */
// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1d1d26);
// カメラを作成：THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
const camera = new THREE.PerspectiveCamera(
  45,
  document.body.clientWidth / window.innerHeight, // document.body.clientWidth：スクロールバーを抜いた幅
  1,
  200,
);

// メッシュ
const geometry = new THREE.TorusKnotGeometry(10, 1, 300, 16, 2, 5);
const material = new THREE.MeshStandardMaterial({ color: "#f00" });
material.emissive = new THREE.Color("#049ef4");
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
 */
const torusKnotObj = sheet.object("Torus Knot", {
  // ラジアン！　(360度: 2 * Math.PI)

  // GUIからの入力ができるよう変更させる回転を定義しておく
  rotation: types.compound({
    x: types.number(mesh.rotation.x, { range: [-2, 2] }), // −360〜 360度
    y: types.number(mesh.rotation.y, { range: [-2, 2] }),
    z: types.number(mesh.rotation.z, { range: [-2, 2] }),
  }),
  position: types.compound({
    sx: types.number(mesh.position.x, { range: [-10, 10] }),
    sy: types.number(mesh.position.y, { range: [-10, 10] }),
    sz: types.number(mesh.position.z, { range: [-10, 10] }),
  }),

  cameraPos: types.compound({
    cz: types.number(camera.position.z, { range: [-1, 180] }),
  }),

  ballPos: types.compound({
    ballY: types.number(meshBall.position.y, { range: [-10, 10] }),
  }),
});

// GUIからの入力をオブジェクトに反映
torusKnotObj.onValuesChange((values) => {
  const { x, y, z } = values.rotation;
  const { sx, sy, sz } = values.position;
  const { cz } = values.cameraPos;
  mesh.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI); // 度数ではなくラジアンなので変換
  mesh.position.set(sx, sy, sz);
  camera.position.z = cz;

  const { ballY } = values.ballPos;
  meshBall.position.y = mouseY + ballY;
  // meshBall.position.y = Math.sin(increment * 0.1) +ballY
});

/**
 * Lights
 */
// Ambient Light
const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

// Point light
const directionalLight = new THREE.DirectionalLight("#ff0000", 30 /* , 0, 1 */);
directionalLight.position.y = 20;
directionalLight.position.z = 20;

directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.far = 50;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.top = 20;
directionalLight.shadow.camera.right = 20;
directionalLight.shadow.camera.bottom = -20;
directionalLight.shadow.camera.left = -20;

scene.add(directionalLight);

// RectAreaLight
const rectAreaLight = new THREE.RectAreaLight("#ff0", 1, 50, 50);

rectAreaLight.position.z = 10;
rectAreaLight.position.y = -40;
rectAreaLight.position.x = -20;
rectAreaLight.lookAt(new THREE.Vector3(0, 0, 0));

scene.add(rectAreaLight);

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
