// BackgroundScene.tsx
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { BasicParticles } from './BasicParticals'
import { useEffect } from 'react';
import * as THREE from 'three';

function CameraController ({position}: {position:[number,number,number]}){
  const { camera } = useThree();

  useFrame(() =>{
    // move camera to position then look at origin
    camera.position.lerp(new THREE.Vector3(...position),0.05)
    camera.lookAt(0,0,0)
  }), [position];
  return null;
}

export default function BackgroundScene(props: {count:number, cameraPosition:[number,number,number]}) {
  const { count, cameraPosition} = props;

  return (
    <Canvas 
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // behind everything
      }}
     camera={{ position: cameraPosition }}
    >
      {/* Your 3D background */}
      <CameraController position={cameraPosition}></CameraController>
      <ambientLight intensity={0.5} />
      <BasicParticles count={count}></BasicParticles>
    </Canvas>
  )
}
