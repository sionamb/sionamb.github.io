//Import the THREE.js library
import * as THREE from "./three.js-master/three.js-master/build/three.module.js";
import { OrbitControls } from "./three.js-master/three.js-master/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "./three.js-master/three.js-master/examples/jsm/loaders/GLTFLoader.js";
const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const loader = new GLTFLoader();

let mixer;
loader.load(
    "avatarTest.glb",
    function (glb) {
        console.log("glb", glb);
        const root = glb.scene;
        scene.add(root);
        mixer = new THREE.AnimationMixer(root);
        const clips = glb.animations;
        // const clip = THREE.AnimationClip.findByName(clips, "ArmatureAction");
        // const action = mixer.clipAction(clip);
        // action.play();
        clips.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
        });
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
        console.log("an error occurred", error);
    }
);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
);
const orbit = new OrbitControls(camera, canvas);
camera.position.set(0, 1, 3);
orbit.update();
scene.add(camera);

const grid = new THREE.GridHelper(5, 5);
scene.add(grid);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
renderer.render(scene, camera);

const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    if (mixer) mixer.update(clock.getDelta());
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});
