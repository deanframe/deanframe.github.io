var scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(255, 255, 255)");
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// outside cube
var geometry = new THREE.BoxGeometry(4, 4, 4);
var edges = new THREE.EdgesGeometry( geometry );
var material = new THREE.LineBasicMaterial( { color: "rgb(0, 0, 0)", linewidth:2 } );
var cube = new THREE.LineSegments( edges, material );
scene.add( cube );


// inside cube
var geometry1 = new THREE.BoxGeometry(2, 2, 2);
var edges1 = new THREE.EdgesGeometry( geometry1 );
var material1 = new THREE.LineBasicMaterial( { color: "rgb(0, 0, 255)", linewidth:2 } );
var cube1 = new THREE.LineSegments( edges1, material1 );
scene.add( cube1 );

cube.position.y = -1;
cube1.position.y = -1;


camera.position.z = 10;


var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube1.rotation.x += 0.0125;
  cube1.rotation.y += 0.0125;

  renderer.render( scene, camera );
};


animate();