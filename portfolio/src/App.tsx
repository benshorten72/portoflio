import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect, useRef, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas camera={{ position: [30.0, 20.5, 30.0] }}>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.01} />
      <Ocean position={[0, 0, 0]} size={[2, 2, 2]} rotation={[-Math.PI / 2, 0, 0]}></Ocean>
      <axesHelper />
      <Cube position={[0, 0, 0]} size={[2, 2, 2]} rotation={[-Math.PI / 2, 0, 0]}></Cube>
    </Canvas>
  )


}

var fragmentShader = `
varying vec2 vUv;

uniform sampler2D uMap;
uniform float uTime;
uniform vec3 uColor;
uniform vec2 uOffset;
void main() {
    vec2 uv = vUv * 10.0 + vec2(uTime * -0.05) +uOffset;

    uv.y += 0.01 * (sin(uv.x * 3.5 + uTime * 0.35) + sin(uv.x * 4.8 + uTime * 1.05) + sin(uv.x * 7.3 + uTime * 0.45)) / 3.0;
    uv.x += 0.12 * (sin(uv.y * 4.0 + uTime * 0.5) + sin(uv.y * 6.8 + uTime * 0.75) + sin(uv.y * 11.3 + uTime * 0.2)) / 3.0;
    uv.y += 0.12 * (sin(uv.x * 4.2 + uTime * 0.64) + sin(uv.x * 6.3 + uTime * 1.65) + sin(uv.x * 8.2 + uTime * 0.45)) / 3.0;

    vec4 tex1 = texture2D(uMap, uv * 1.0);
    vec4 tex2 = texture2D(uMap, uv * 1.0 + vec2(0.2));

    vec3 blue = uColor;

    gl_FragColor = vec4(blue + vec3(tex1.a * 0.9 - tex2.a * 0.02), 1.0);
}
`;

const vertexShader = `
#define SCALE 10.0

varying vec2 vUv;
varying float vZ;

uniform float uTime;

float calculateSurface(float x, float z) {
    float y = 0.0;
    y += (sin(x * 1.0 / SCALE + uTime * 1.0) + sin(x * 2.3 / SCALE + uTime * 1.5) + sin(x * 3.3 / SCALE + uTime * 0.4)) / 3.0;
    y += (sin(z * 0.2 / SCALE + uTime * 1.8) + sin(z * 1.8 / SCALE + uTime * 1.8) + sin(z * 2.8 / SCALE + uTime * 0.8)) / 3.0;
    return y;
}
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vUv = uv;

    float strength = 10.0;
    modelPosition.y += strength * calculateSurface(modelPosition.x, modelPosition.z);
    modelPosition.y -= strength * calculateSurface(0.0, 0.0);
  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;  
  }
`

type OceanPropities = {
  position: [number, number, number],
  size: [number, number, number],
  rotation: [number, number, number]
}
const Ocean = ({ position, size, rotation }: OceanPropities) => {
  // Keeps a reference of the current object between renders, we tell it null! because were setting it 
  // to null but will be changing it before the component mounts
  const ref = useRef<THREE.Mesh>(null!)
  const uniforms = useMemo(
    () => ({
      u_test: {
        value: 1.0,
      },
      uTime: {
        value: 0.5,
      },
      u_y: {
        value: 0.0
      },
      uColor: {
        value: new THREE.Color('#70E7FF')
      },
      uMap: {
        value: null
      },
      uOffset:{
        value: new THREE.Vector2(0,0)
      }
    }),
    []
  );
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    'https://cinemont.com/tutorials/zelda/water.png',
    (texture: THREE.Texture) => {
      (ref.current.material as THREE.ShaderMaterial).uniforms.uMap.value = texture;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
  );
 const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  // Listen for WASD key events
  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: true }));
    const upHandler = (e: KeyboardEvent) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: false }));
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const speed = .4; // units per second
    if (keys["w"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.y += speed * delta; // forward
    if (keys["s"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.y -= speed * delta; // backward
    if (keys["a"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.x -= speed * delta; // left
    if (keys["d"]) (ref.current.material as THREE.ShaderMaterial).uniforms.uOffset.value.x += speed * delta; // right

    const { clock } = state;
    (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
  })

  return (
    <mesh position={position} ref={ref} rotation={rotation}>
      <boxGeometry args={size} />
      <planeGeometry args={[1000, 1000, 10, 10]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

const Cube = ({ position, size, rotation }: OceanPropities) => {
  const ref = useRef<THREE.Mesh>(null!)

  return (
    <mesh position={position} ref={ref} rotation={rotation}>
      <boxGeometry args={size} />
    </mesh>
  )
}

export default App
