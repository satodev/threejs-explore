// function setupGetStarted(){
let three = {
    firstSetup : function(){
        three.scene = new THREE.Scene();
        three.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        three.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        three.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        three.cube = new THREE.Mesh( three.geometry, three.material );
        three.scene.add( three.cube );
        
        three.camera.position.z = 3;
        
        three.renderer = new THREE.WebGLRenderer();
        three.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( three.renderer.domElement );
    },
    drawLine: function(){
        three.renderer = new THREE.WebGLRenderer();
        three.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( three.renderer.domElement );
        
        three.camera = new THREE.PerspectiveCamera( 45, window.innerWidth  / window.innerHeight , 1, 500 );
        three.camera.position.set( 0, 0, 100 );
        three.camera.lookAt( 0, 0, 0 );
        
        three.scene = new THREE.Scene();

        three.material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        three.geometry = new THREE.Geometry();
        three.geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
        three.geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
        three.geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );

        three.line = new THREE.Line( three.geometry, three.material );
    },
    animateFirstSetup : function() {  
        three.cube.rotation.x += 0.01;
        three.cube.rotation.y += 0.02;
        requestAnimationFrame( three.animateFirstSetup );
        three.renderer.render( three.scene, three.camera );
    },
    animateDrawLine : function(){
        three.scene.add( three.line );
        three.renderer.render( three.scene, three.camera );
    },
    init: function(fncName){
        if(fncName ==='firstSetup'){
            three.firstSetup();
            three.animateFirstSetup();
        }
        if(fncName === 'drawLine'){
            three.drawLine();
            three.animateDrawLine();
        }
    }
}

const st1 = 'firstSetup';
const st2 = 'drawLine';
three.init(st2);