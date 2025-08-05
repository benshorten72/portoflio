#define SCALE 0.1

varying vec2 vUv;
varying float vZ;

uniform float uTime;

float calculateSurface(float x, float z) {
    float y = 0.0;
    y += (sin(x * 1.0 / SCALE + uTime * 1.0) + sin(x * 2.3 / SCALE + uTime * 1.5) + sin(x * 3.3 / SCALE + uTime * 0.4)) / 20.0;
    y += (sin(z * 0.2 / SCALE + uTime * 1.8) + sin(z * 1.8 / SCALE + uTime * 1.8) + sin(z * 2.8 / SCALE + uTime * 0.8)) / 20.0;
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