import { useRef } from "react";
import * as THREE from "three";

export const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef<THREE.Points>(null!);

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
  );
};

