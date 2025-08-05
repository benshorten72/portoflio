import './App.css'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from "@react-three/drei";
import { EffectComposer, Outline } from "@react-three/postprocessing";

import { Ocean } from "./components/Ocean";
import { Cube } from "./components/Cube";
import { BasicParticles } from "./components/BasicParticals";

function App() {
  return (
<Canvas camera={{ position: [3, 2, 5], fov: 120 }} shadows>
  <OrbitControls />

  <ambientLight intensity={0.3} />

  <directionalLight
    position={[5, 10, 10]} 
    intensity={5.5}
    castShadow
    shadow-mapSize-width={5448}
    shadow-mapSize-height={5448}
    shadow-camera-near={1}
    shadow-camera-far={50}
    shadow-camera-left={-20}
    shadow-camera-right={20}
    shadow-camera-top={20}
    shadow-camera-bottom={-20}
  />
<hemisphereLight intensity={0.5} groundColor={0x444444} />


  <Cube position={[0, 0, 0]} size={[1, 1, 1]} rotation={[0, 0, 0]} />
   <Ocean position={[0, 0, 0]} size={[1, 1, 1]} rotation={[-Math.PI / 2, 0, 0]}></Ocean>


  <Sky
        sunPosition={[0, 1, 0]}   // Move the sun up
        turbidity={0.1}           // Keep it super clean
        rayleigh={0.2}            // Soft blue
        mieCoefficient={0.0005}   // Very low haze
        mieDirectionalG={0.1}     // No directional scattering
      />
</Canvas>

  );
}



export default App
