import * as THREE from 'three'

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry, material);

scene.add(cylinder);
camera.position.z = 20;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  cylinder.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();


// const scene = new THREE.Scene()

// const geometry = new THREE.BoxGeometry(1, 1, 1)

// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// const mesh = new THREE.Mesh(geometry, material)

// scene.add(mesh)

// // Sizes
// const sizes = {
//     width: 800,
//     height: 600
// }

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
// scene.add(camera)

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // ...

// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)

// renderer.render(scene, camera)
