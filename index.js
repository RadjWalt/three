// Import Three.js library
import * as THREE from 'three';

// Create a new scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);
camera.position.z = 0; // Move the camera back slightly

// Create a torus geometry
const torusGeometry = new THREE.TorusGeometry(3, 0.6, 30, 60);

const cylinderGeometry = new THREE.CylinderGeometry(1, 1.5, 8);

// Create a basic material with a red color and wireframe
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});


// Create a mesh from the geometry and material
const torusMesh = new THREE.Mesh(torusGeometry, material);
const cylinderMesh = new THREE.Mesh(cylinderGeometry, material);
camera.position.z =     0; // Move the camera further back
// cylinderMesh.position.x = 10;

// Add the mesh to the scene
scene.add(cylinderMesh, torusMesh);

// Create a new WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer's DOM element to the page
document.body.appendChild(renderer.domElement);

// Animation function
function animate() {
  // Rotate the mesh
  torusMesh.rotation.x += 0.01;
  torusMesh.rotation.y += 0.01;
  cylinderMesh.rotation.x += 0.01;
  cylinderMesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);

  // Call the animation function again
  requestAnimationFrame(animate);
}

// Start the animation
animate();