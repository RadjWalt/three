// Import Three.js library
import * as THREE from 'three';
// import OrbitControls and Stats
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {TeapotGeometry} from 'three/examples/jsm/geometries/TeapotGeometry';
import Stats from 'three/examples/jsm/libs/stats.module.js';
// Create a new scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);
camera.position.z = 10; // Move the camera back slightly

// Create a torus geometry
const torusGeometry = new THREE.TorusGeometry(3, 0.6, 9, 9);

const cylinderGeometry = new THREE.CylinderGeometry(1.5, 1.5, 5, 9,9);

const boxGeometry = new THREE.BoxGeometry(3,3,3);

const teapotGeometry = new TeapotGeometry(1,9);


const Material = new THREE.MeshNormalMaterial();

const stats = new Stats();

// Create a basic material with a red color and wireframe
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   wireframe: true,
// });


// Create a mesh from the geometry and material
const torusMesh = new THREE.Mesh(torusGeometry, Material);
const cylinderMesh = new THREE.Mesh(cylinderGeometry, Material);
const boxMesh = new THREE.Mesh(boxGeometry,Material);
const teapotMesh = new THREE.Mesh(teapotGeometry,Material);
// camera.position.z = 0; // Move the camera further back
torusMesh.position.x = -9;
cylinderMesh.position.x = -1;
boxMesh.position.x = 4;
teapotMesh.position.x = 9;

// Add the mesh to the scene
scene.add(cylinderMesh, torusMesh, boxMesh, teapotMesh);


// const stats = Stats();
// document.body.appendChild(stats.dom);

// Create a new WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

// Add the renderer's DOM element to the page
document.body.appendChild(renderer.domElement);

document.body.appendChild(stats.dom);
// Animation function
function animate() {
  // Rotate the mesh
  // torusMesh.rotation.x += 0.01;
  // torusMesh.rotation.y += 0.01;
  // cylinderMesh.rotation.x += 0.01;
  // cylinderMesh.rotation.y += 0.01;
  // boxMesh.rotation.x += 0.01;
  // boxMesh.rotation.y += 0.01;

  // stats.update();
  controls.update();
  // Render the scene
  renderer.render(scene, camera);

  // Call the animation function again
  requestAnimationFrame(animate);
}

// Start the animation
animate();