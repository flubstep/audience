/* global THREE */
// https://threejs.org/examples/?q=mmd#webgl_loader_mmd

import React from 'react';

import { MMDLoader } from 'three/examples/js/loaders/MMDLoader';

const loader = new THREE.MMDLoader();

function Scene(props) {
  return (
    <h1>Hey, listen?</h1>
  );
}

export default Scene;