import Navigation from "./navigation"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const navigation = new Navigation()
navigation.create_button_listeners()

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 3

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.style.position = "fixed"
renderer.domElement.style.zIndex = "-1"
document.body.appendChild(renderer.domElement)

document.addEventListener('mousemove', function(e){
    let scale = -0.002;
    orbit.rotateY( e.movementX * scale );
    orbit.rotateX( e.movementY * scale );
    orbit.rotation.z = 0; //this is important to keep the camera level.
})

window.addEventListener( 'resize', onWindowResize );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight );
}

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableRotate = false;
controls.enableZoom = false;
const orbit = new THREE.Object3D();

orbit.rotation.order = "YXZ";
scene.add(orbit);

orbit.add(camera);
const geometry = new THREE.BoxGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material)

mesh.position.x = 2
mesh2.position.x = -2

scene.add(mesh, mesh2)

function animate() {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    mesh2.rotation.x += 0.01
    mesh2.rotation.y += 0.01

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()
