import '../styles/globals.css'
import * as THREE from 'three';

const three = new THREE.Scene();
const rendeder = new THREE.WebGLRenderer();
rendeder.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendeder.domElement);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
