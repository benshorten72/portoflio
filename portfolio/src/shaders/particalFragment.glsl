void main() {
  gl_FragColor = vec4(0.94, 0.53, 0.16, 1.0);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  // Make it decrease in strength *faster* the further from the center by using a power of 3
  strength = pow(strength, 2.0);
}
