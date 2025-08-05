import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import fragmentShader from "../shaders/particalFragment.glsl"
import vertexShader from "../shaders/particalVertex.glsl"



export const BasicParticles = (props: { count: any; shape: any; }) => {
  const { count, shape } = props;

  // This reference gives us direct access to our points
  const points = useRef<THREE.Points>(null!);

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }

    if (shape === "sphere") {
      const distance = 1;
     
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 

        let x = distance * Math.sin(theta) * Math.cos(phi)
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }
    return positions;
  }, [count, shape]);

const uniforms = useMemo(
    () => ({
      u_test: { value: 1.0 },
    }),
    []
  );
useFrame((state) => {
  const { clock } = state;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const strength = 5
    const scale = 0.001
    points.current.geometry.attributes.position.array[i3] +=
      Math.sin(clock.elapsedTime + Math.random() * strength) * scale;
    points.current.geometry.attributes.position.array[i3 + 1] +=
      Math.cos(clock.elapsedTime + Math.random() * strength) * scale;
    points.current.geometry.attributes.position.array[i3 + 2] +=
      Math.sin(clock.elapsedTime + Math.random() * strength) * scale;
  }

  points.current.geometry.attributes.position.needsUpdate = true;
});
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
                  attach="attributes-position"
                args={[particlesPosition, 3]}    />
      </bufferGeometry>
	      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />

    </points>
  );
};
