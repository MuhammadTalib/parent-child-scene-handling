import * as THREE from "three"

var scene = new THREE.Scene();

var camera =new THREE.OrthographicCamera(-100,100,-100,100,-100,1000)
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#fff");
renderer.setSize( 1000,1000 );
document.body.appendChild( renderer.domElement );

var parent = new THREE.Object3D();
scene.add( parent );


var geo = new THREE.BoxGeometry( 100,100,100 );
var mat = new THREE.MeshBasicMaterial( { color:0xffbf00,vertexColors: THREE.FaceColors} );
var cube = new THREE.Mesh( geo, mat );

console.log("geo",geo)
console.log("mat",mat)
console.log("cube",cube)
parent.add( cube );

var geo2 = new THREE.BoxGeometry( 10,10,10 );
var mat2 = new THREE.MeshBasicMaterial( { color:0xffbfff,vertexColors: THREE.FaceColors} );
var cube2 = new THREE.Mesh( geo2, mat2 );

parent.add( cube2 );

var geo3 = new THREE.BoxGeometry( 10,10,10 );
var mat3 = new THREE.MeshBasicMaterial( { color:0xf00,vertexColors: THREE.FaceColors} );
var cube3 = new THREE.Mesh( geo3, mat3 );

cube.add( cube3 );

cube.geometry.colorsNeedUpdate = true;

cube.position.x+=100
var render = function () {
   cube.rotation.x+=0.01
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

render();