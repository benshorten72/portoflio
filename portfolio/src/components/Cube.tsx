import { useRef } from "react";
import * as THREE from "three";

type CubeProps = {
  position: [number, number, number];
  size: [number, number, number];
  rotation: [number, number, number];
};

export const Cube = ({ position, size, rotation }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <mesh position={position} ref={ref} rotation={rotation}>
      <boxGeometry args={size} />
    </mesh>
  );
};
