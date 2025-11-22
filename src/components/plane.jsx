import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function WavingPlane() {
  const meshRef = useRef();
  const materialRef = useRef();
  
  // Criar geometria com mais segmentos para ondas suaves
  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(30, 40, 10, 10);
  }, []);
  
  // Shader customizado para ondas
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWaveStrength: { value: 0.9 }
  }), []);
  
  const vertexShader = `
    uniform float uTime;
    uniform float uWaveStrength;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      vec3 pos = position;
      
      // Criar ondas com diferentes frequências
      float wave1 = sin(pos.x * 2.0 + uTime) * 0.5;
      float wave2 = sin(pos.y * 1.5 - uTime * 0.7) * 0.3;
      float wave3 = sin((pos.x + pos.y) * 1.0 + uTime * 1.5) * 0.2;
      
      pos.z = (wave1 + wave2 + wave3) * uWaveStrength;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;
  
  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      // Material preto brilhante com reflexos
      vec3 baseColor = vec3(0.08, 0.8, 0.05);
      
      // Simular reflexo especular
      vec3 lightDir = normalize(vec3(5.0, 5.0, 5.0));
      vec3 normal = normalize(vNormal);
      float diff = max(dot(normal, lightDir), 0.0);
      
      vec3 viewDir = normalize(cameraPosition - vPosition);
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
      
      vec3 finalColor = baseColor + vec3(spec * 0.8);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 4, 0, 0]} position={[0,0,-50]}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}