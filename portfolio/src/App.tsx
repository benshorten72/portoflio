import './App.css'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';

import { Ocean } from "./components/Ocean";
import { Cube } from "./components/Cube";
import { BasicParticles } from "./components/BasicParticals";

function App() {
  return (
    <Canvas>
      <BasicParticles></BasicParticles>
    </Canvas>
  );
}



export default App
