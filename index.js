import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'dat.gui';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 10;

const boxGeometry = new THREE.BoxGeometry(3, 3, 3);

const Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const boxMesh = new THREE.Mesh(boxGeometry, Material);

scene.add(boxMesh);

const gui = new GUI();

const geometryFolder = gui.addFolder('Geometry');
geometryFolder.open();

const rotationFolder = geometryFolder.addFolder("Rotation");
rotationFolder.add(boxMesh.rotation, 'x', 0, Math.PI).name('rotate X axis');
rotationFolder.add(boxMesh.rotation, 'y', 0, Math.PI).name('rotate Y axis');
rotationFolder.add(boxMesh.rotation, 'z', 0, Math.PI).name('rotate Z axis');
rotationFolder.open();

const scaleFolder = geometryFolder.addFolder('Scale');
scaleFolder.add(boxMesh.scale, 'x', 2).name('scale X axis');
scaleFolder.add(boxMesh.scale, 'y', 2).name('scale Y axis');
scaleFolder.add(boxMesh.scale, 'z', 2).name('scale Z axis');
scaleFolder.open();


const boxMaterialParams = {
  boxMeshColor: boxMesh.material.color.getHex(),
};

const materialFolder = geometryFolder.addFolder('Material');
materialFolder.addColor(boxMaterialParams, "boxMeshColor")
  .onChange((color) => {
    boxMesh.material.color.set(color);
  });
materialFolder.add(boxMesh.material, 'wireframe').name("Wireframe");
materialFolder.open();

const stats = Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);
document.body.appendChild(renderer.domElement);

function animate() {
  stats.update();
  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate();