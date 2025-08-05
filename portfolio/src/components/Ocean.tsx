import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import fragmentShader from "../shaders/oceanFragment.glsl";
import vertexShader from "../shaders/oceanVertex.glsl";

type OceanProps = {
  position: [number, number, number];
  size: [number, number, number];
  rotation: [number, number, number];
};

export const Ocean = ({ position, size, rotation }: OceanProps) => {
  const ref = useRef<THREE.Mesh>(null!);

  const uniforms = useMemo(
    () => ({
      u_test: { value: 1.0 },
      uTime: { value: 0.5 },
      u_y: { value: 0.0 },
      uColor: { value: new THREE.Color("#70E7FF") },
      uMap: { value: null },
      uOffset: { value: new THREE.Vector2(0, 0) }
    }),
    []
  );
useEffect(() => {
  if (!ref.current) return;

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    'https://cinemont.com/tutorials/zelda/water.png',
    (texture: THREE.Texture) => {
      const mat = ref.current!.material as THREE.ShaderMaterial;
      mat.uniforms.uMap.value = texture;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
  );
}, []);

  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) =>
      setKeys((k) => ({ ...k, [e.key.toLowerCase()]: true }));
    const upHandler = (e: KeyboardEvent) =>
      setKeys((k) => ({ ...k, [e.key.toLowerCase()]: false }));
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const speed = 0.4;
    if (keys["w"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.y += speed * delta;
    if (keys["s"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.y -= speed * delta;
    if (keys["a"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.x -= speed * delta;
    if (keys["d"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.x += speed * delta;

    (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh position={position} ref={ref} rotation={rotation}>
      <boxGeometry args={size} />
      <planeGeometry args={[500, 500, 4, 4]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};
