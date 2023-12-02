import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const screenSize = {
    width : 800,
    height : 600
}

const meshConfiguration = {
    Type : '',
    SeatMaterial : '',
    NeckCushionMaterial : ''
}

const updateMeshes = (prevMeshes,newMeshes) => {

    let tempMeshes = prevMeshes;

    tempMeshes = prevMeshes.map((mesh) => {

        if (mesh.name==="citizen_base")
        {
            mesh.material = new THREE.MeshStandardMaterial({
                color : '#332710',
                metalness : 0.1,
                roughness : 0,
            });
        }
        else if (mesh.name==="floor")
        {
            mesh.material = new THREE.MeshStandardMaterial({
                alphaMap : new THREE.TextureLoader().load('./res/alpha.jpg'),
                map : new THREE.TextureLoader().load('./res/alpha.jpg'),
                transparent : true
            });
        }
        else
        {
            mesh.material = new THREE.MeshStandardMaterial({
                
                map : new THREE.TextureLoader().load(meshConfiguration.SeatMaterial,(texture)=>{
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set( 50, 50 );
                })
            });


            // mesh.material.color = new THREE.Color(meshConfiguration.Color);
        }

        return mesh;

    });

    if (meshConfiguration.Type==='lowback')
    {
        tempMeshes = tempMeshes.filter((mesh) => {
            return mesh.name==="citizen_Lowback" || mesh.name==="citizen_base" || mesh.name==="floor";
        });
    }
    else if (meshConfiguration.Type==='highback')
    {
        tempMeshes = tempMeshes.filter((mesh) => {
            return mesh.name==="citizen_highback" || mesh.name==="citizen_base" || mesh.name==="citizen_cover" || mesh.name==="floor";
        });
    }


    newMeshes(tempMeshes);

}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, screenSize.width / screenSize.height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( screenSize.width, screenSize.height );
document.querySelector('.webgl').appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );

const loader = new GLTFLoader();

loader.load( './chair_citizen.glb', function ( gltf ) {

    let obj = gltf.scene;

    // document.getElementById('favcolor').value = meshConfiguration.Color;

    let chairMeshes  = obj.children[0].children.filter((mesh) => {
        return mesh.name.startsWith("citizen_") || mesh.name.startsWith("floor")
    })

    const updateMaterial = (e) => {

        meshConfiguration.SeatMaterial = "./res/materials/" + e.target.getAttribute("material");
        updateMeshes(chairMeshes,(updatedMeshes) => {
            obj.children[0].children=updatedMeshes;
        });

    }

    const updatelist = (value) => {
    
        let holder =  document.getElementById("listColors");
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        let img4 = document.createElement('img');

        switch (value) {
            case 'plano':
                img1.src = './res/materials/planobluecoconutmtl1.png';
                img1.setAttribute('material',"planobluecoconutmtl1.png");
                img2.src = './res/materials/planoclasseicgreenforestmtl.png';
                img2.setAttribute('material',"planoclasseicgreenforestmtl.png");
                img3.src = './res/materials/planocognacmtl.png';
                img3.setAttribute('material',"planocognacmtl.png");
                img4.src = './res/materials/planoorangemtl.png';
                img4.setAttribute('material',"planoorangemtl.png");
                break;
            case 'laser':
                img1.src = './res/materials/laserbluemoormtl.png';
                img1.setAttribute('material',"laserbluemoormtl.png");
                img2.src = './res/materials/laserlightgreymtl.png';
                img2.setAttribute('material',"laserlightgreymtl.png");
                img3.src = './res/materials/lasermintforestmtl.png';
                img3.setAttribute('material',"lasermintforestmtl.png");
                img4.src = './res/materials/laseryellowpoppyredmtl.png';
                img4.setAttribute('material',"laseryellowpoppyredmtl.png");
                break;
            case 'cosy':
                img1.src = './res/materials/cosy2canoramtl.png';
                img1.setAttribute('material',"cosy2canoramtl.png");
                img2.src = './res/materials/cosy2palerosemtl.png';
                img2.setAttribute('material',"cosy2palerosemtl.png");
                img3.src = './res/materials/cosy2papyrusmtl.png';
                img3.setAttribute('material',"cosy2papyrusmtl.png");
                img4.src = './res/materials/cosy2rustyorange.png';
                img4.setAttribute('material',"cosy2rustyorange.png");
                break;
            case 'credo':
                img1.src = './res/materials/credosafferonmtl.png';
                img1.setAttribute('material',"credosafferonmtl.png");
                img2.src = './res/materials/credoroyalblueelephantmtl.png';
                img2.setAttribute('material',"credoroyalblueelephantmtl.png");
                img3.src = './res/materials/credoredchilliemtl.png';
                img3.setAttribute('material',"credoredchilliemtl.png");
                img4.src = './res/materials/credoemeraldcmtl.png';
                img4.setAttribute('material',"credoemeraldcmtl.png");
                break;
          }


          holder.innerHTML = '';
          holder.appendChild(img1);
          holder.appendChild(img2);
          holder.appendChild(img3);
          holder.appendChild(img4);

          img1.onclick = updateMaterial;
          img2.onclick = updateMaterial;
          img3.onclick = updateMaterial;
          img4.onclick = updateMaterial;

    }

    updatelist("plano");
    meshConfiguration.SeatMaterial = './res/materials/planobluecoconutmtl1.png';
    meshConfiguration.Type = 'lowback';
    updateMeshes(chairMeshes,(updatedMeshes) => {
        obj.children[0].children=updatedMeshes;
    });

    scene.add(obj);
    // obj.rotation.set(0.5,0.5,0);
    // obj.position.set(0,-0.5,0.5);

    document.getElementById('type').onchange = (e) => {

        meshConfiguration.Type = e.target.value;
        updateMeshes(chairMeshes,(updatedMeshes) => {
            obj.children[0].children=updatedMeshes;
        });

    }

    document.getElementById('material').onchange = (e) => {

        updatelist(e.target.value);

    }


}, undefined, function ( error ) {

	console.error( error );

} );

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

const light = new THREE.AmbientLight( 0x404040 , 5);
scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff , 5);
scene.add( directionalLight );

scene.background=new THREE.Color( '#FFFFFF' );

camera.position.x = -1.2;
camera.position.y = 1.2;
camera.position.z = 1.2;

controls.update();

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render( scene, camera );
}

animate();

