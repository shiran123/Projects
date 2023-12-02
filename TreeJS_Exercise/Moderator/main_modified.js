import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const screenSize = {
    width : 800,
    height : 600
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, screenSize.width / screenSize.height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( screenSize.width, screenSize.height );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


const loader = new GLTFLoader();

loader.load( './chair_citizen.glb', function ( gltf ) {

    console.log( gltf );
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const light = new THREE.AmbientLight( 0x404040, 3 ); // soft white light
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
scene.add( directionalLight );

camera.position.z = 2;

// renderer.render( scene, camera );
// renderer.setClearColor( 0xffffff, 0);
controls.update();

function animate() {
	
    window.requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	renderer.render( scene, camera );
    controls.update();

}

animate();