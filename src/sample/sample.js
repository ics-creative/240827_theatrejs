import "../style.css"
import * as THREE from "three";
import studio from "@theatre/studio";
import { getProject, types } from "@theatre/core";

// 書き出したJSONファイル
import projectState from "../assets/SampleProject.theatre-project-state.json";

// Theatre.jsのスタジオを初期化（作業用UIを表示）
studio.initialize();

// プロジェクトを初期化
// const project = getProject("SampleProject"); // 初回でJSONファイルがない場合はこちら
const project = getProject("SampleProject", { state: projectState }); // 書き出したJSONファイルを参照しアニメーションを初期化

// アニメーションを保存するシートを作成
const sheet = project.sheet("KV Animation");

// Theatre.jsのロード後に自動で再生
project.ready.then(() => sheet.sequence.play({ iterationCount: Infinity })); // ループ再生

/**
 * Three.jsのセットアップ
 */
// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color("#1d1d26");

// アニメーションさせるキューブ型メッシュを用意
const geometry = new THREE.BoxGeometry(7, 7, 7);
const material = new THREE.MeshStandardMaterial({
  color: "#ff9900",
  emissive: "#049ef4",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // three.jsのシーンに追加

/**
 * シート "Cube animation" のアニメーション定義
 */
const cubeObj = sheet.object("Cube", {
  // GUIから入力できるよう、変更させたいプロパティを定義
  // 回転を定義
  rotation: types.compound({
    // types.compound() でグループ化
    x: types.number(mesh.rotation.x, { range: [-2, 2] }),
    y: types.number(mesh.rotation.y, { range: [-2, 2] }),
    z: types.number(mesh.rotation.z, { range: [-2, 2] }),
  }),
  // 位置を定義
  position: types.compound({
    px: types.number(mesh.position.x, { range: [-100, 100] }),
    py: types.number(mesh.position.y, { range: [-100, 100] }),
    pz: types.number(mesh.position.z, { range: [-100, 100] }),
  }),
  // スケール
  scale: types.compound({
    sx: types.number(mesh.scale.x, { range: [0, 4] }),
    sy: types.number(mesh.scale.y, { range: [0, 4] }),
    sz: types.number(mesh.scale.z, { range: [0, 4] }),
  }),
  // 色を定義
  color: types.rgba({ r: 255, g: 0, b: 0, a: 1 }),
});

// GUIからの入力をオブジェクトに反映
cubeObj.onValuesChange((values) => {
  // 回転を反映
  const { x, y, z } = values.rotation;
  mesh.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI);
  // 位置を反映
  const { px, py, pz } = values.position;
  mesh.position.set(px, py, pz);
  // スケールを反映
  const { sx, sy, sz } = values.scale;
  mesh.scale.set(sx, sy, sz);

  // マテリアルの色を反映
  material.color = values.color;
});

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

/** カメラを作成：THREE.PerspectiveCamera(視野角, アスペクト比, near, far) */
const camera = new THREE.PerspectiveCamera(
  45,
  document.body.clientWidth / window.innerHeight, // document.body.clientWidth：スクロールバーを含まない横幅
  1,
  1000,
);
camera.position.z = 50;

/** レンダラーを作成 */
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
// 初期実行
onResize();
// リサイズイベント発生時に実行
window.addEventListener("resize", onResize);
