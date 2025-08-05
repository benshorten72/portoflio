import { useRef } from "react";
import * as THREE from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";

type CubeProps = {
  position: [number, number, number];
  size: [number, number, number];
  rotation: [number, number, number];
};

const modelPath = "/scene.glb";
const threeTone = new THREE.TextureLoader().load('gradientMaps/threeTone.jpg')
threeTone.minFilter = THREE.NearestFilter
threeTone.magFilter = THREE.NearestFilter

const fourTone = new THREE.TextureLoader().load('gradientMaps/fourTone.jpg')
fourTone.minFilter = THREE.NearestFilter
fourTone.magFilter = THREE.NearestFilter

const fiveTone = new THREE.TextureLoader().load('gradientMaps/fiveTone.jpg')
fiveTone.minFilter = THREE.NearestFilter
fiveTone.magFilter = THREE.NearestFilter

export const Cube = ({ position }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const gltf = useLoader(GLTFLoader, modelPath);

  // Replace all mesh materials in the GLB with toon material
gltf.scene.traverse((child: THREE.Object3D) => {
  if (child instanceof THREE.Mesh) {

    const original = child.material as THREE.MeshStandardMaterial;
    child.castShadow = true;
    child.receiveShadow = true;
    child.geometry.computeVertexNormals();
   child.geometry = BufferGeometryUtils.mergeVertices(child.geometry);

    // Make a toon material with the same settings as the original
    const toonMaterial = new THREE.MeshToonMaterial({
      color: original.color.clone(),       // preserve original color
      map: original.map || null,
      side: THREE.FrontSide,           // preserve texture if any
      gradientMap:fiveTone
    });

    child.material = toonMaterial;
  }
});


  return <primitive ref={ref} object={gltf.scene} position={position} />;
};
