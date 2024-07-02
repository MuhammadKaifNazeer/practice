// import React, { useState, useEffect } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// const Globe = () => {
//   const [scene, setScene] = useState(null);
//   const [camera, setCamera] = useState(null);
//   const [renderer, setRenderer] = useState(null);
//   const [controls, setControls] = useState(null);

//   useEffect(() => {
//     const canvas = document.createElement("canvas");
//     document.body.appendChild(canvas);

//     const scene = new THREE.Scene();
//     setScene(scene);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000,
//     );
//     setCamera(camera);
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ canvas });
//     setRenderer(renderer);
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     setControls(controls);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       controls.update();

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       document.body.removeChild(canvas);
//     };
//   }, []);

//   return <div>{/* Your component content here */}</div>;
// };

// export default Globe;
