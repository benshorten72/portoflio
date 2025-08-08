import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import fragmentShader from "../shaders/particalFragment.glsl"
import vertexShader from "../shaders/particalVertex.glsl"



export const BasicParticles = (props: { count: any; }) => {
  const { count} = props;

  // This reference gives us direct access to our points
  const points = useRef<THREE.Points>(null!);
  const radius = 4;

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const distance = Math.sqrt(Math.random()) * radius;
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 

        let x = distance * Math.sin(theta) * Math.cos(phi)
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }

    return positions;
  }, [count]);

 const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0
    },
    uRadius: {
      value: radius
    }
  }), [])

useFrame((state) => {
  const { clock } = state;
  (points.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.elapsedTime/2;

});

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute 
                  attach="attributes-position"
                args={[particlesPosition, 3]}    />
      </bufferGeometry>
	      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />

    </points>
  );
};
