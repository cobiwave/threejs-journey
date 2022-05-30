// Create an Scene
const scene = new THREE.Scene();

// Create a Mesh: Combination of geometry (the shape) and a Material (how it looks)
const geometry = new THREE.BoxGeometry(1, 1, 1); // 1 = unit (mt, km, ...)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh); // Add mesh in Scene

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Create a Camera: PerspectiveCamera(fov, aspect-ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 2;
camera.position.y = 2;
scene.add(camera); // Add camera in Scene

// Create the Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
	canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
