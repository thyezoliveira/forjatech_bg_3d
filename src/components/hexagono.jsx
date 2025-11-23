import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Text } from '@react-three/drei';
import * as THREE from 'three';
import WavingPlane from './plane';
import { EffectComposer, Bloom, Vignette, ChromaticAberration, Selection, Select } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Filtro from './filtro';

// Componente que controla a animação da câmera
function CameraController({ estado }) {
    // const cameraRef = useRef();
    const targetPosition = useRef(new THREE.Vector3());
    const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
    const isAnimating = useRef(false);
    const animationSpeed = 0.03; // Velocidade (0.01 = lento, 0.1 = rápido)

    useEffect(() => {
        // Define posições baseado no estado
        if (estado === 0) {
            targetPosition.current.set(0, 0, 0);
        } else if (estado === 1) {
            targetPosition.current.set(0, 0, 7.5);
        } else if (estado === 2) {
            targetPosition.current.set(5, 0, 7.5);
        } else if (estado === 3) {
            targetPosition.current.set(5, 0, 10);
        } else if (estado === 4) {
            targetPosition.current.set(-5, 0, 5);
        } else if (estado === 5) {
            targetPosition.current.set(-5, 0, -5);
        }
        
        isAnimating.current = true;
    }, [estado, targetPosition]);

    useFrame(({ camera }) => {
        if (isAnimating.current) {
            // Interpola suavemente a posição da câmera
            camera.position.lerp(targetPosition.current, animationSpeed);
            
            // Faz a câmera olhar para o ponto definido
            const currentLookAt = new THREE.Vector3();
            camera.getWorldDirection(currentLookAt);
            currentLookAt.multiplyScalar(10).add(camera.position);
            currentLookAt.lerp(targetLookAt.current, animationSpeed * 3);
            camera.lookAt(currentLookAt);

            // Para a animação quando estiver próximo do alvo
            const distance = camera.position.distanceTo(targetPosition.current);
            if (distance < 0.01) {
                camera.position.copy(targetPosition.current);
                camera.lookAt(targetLookAt.current);
                isAnimating.current = false;
            }
        }
    });

    return null;
}

// Componente do Hexágono
export function Hexagon({
    position = [0, 0, 0],
    size = 2,
    color = "#ffff00",
    rotation = [0, 0, 0],
    animate = true,
    stencilMode = "none", // "mask" | "content" | "none" | "refract"
    speed = 1
}) {
    const meshRef = useRef();

    const hexagonGeometry = React.useMemo(() => {
        const sides = 6;
        const outerRadius = size;
        const innerRadius = size * 0.8;
        const depth = size * 0.2;

        const shape = new THREE.Shape();
        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2;
            const x = Math.cos(angle) * outerRadius;
            const y = Math.sin(angle) * outerRadius;
            if (i === 0) shape.moveTo(x, y);
            else shape.lineTo(x, y);
        }
        shape.closePath();

        const hole = new THREE.Path();
        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2;
            const x = Math.cos(angle) * innerRadius;
            const y = Math.sin(angle) * innerRadius;
            if (i === 0) hole.moveTo(x, y);
            else hole.lineTo(x, y);
        }
        hole.closePath();
        shape.holes.push(hole);

        return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
    }, [size]);

    useFrame((_, delta) => {
        if (meshRef.current && animate) {
            meshRef.current.rotation.x += delta * 0.2 * speed;
            meshRef.current.rotation.y += delta * 0.3 * speed;
        }
    });

    // Configurações de stencil para cada modo
    const stencilProps = (() => {
        switch (stencilMode) {
            case "mask": // desenha máscara
                return {
                    depthWrite: false,
                    stencilWrite: true,
                    stencilRef: 1,
                    stencilFunc: THREE.AlwaysStencilFunc,
                    stencilZPass: THREE.ReplaceStencilOp,
                };
            case "content": // desenha conteúdo dentro da máscara
                return {
                    stencilWrite: true,
                    stencilRef: 1,
                    stencilFunc: THREE.EqualStencilFunc,
                    stencilFail: THREE.KeepStencilOp,
                    stencilZFail: THREE.KeepStencilOp,
                    stencilZPass: THREE.KeepStencilOp,
                };
            default:
                return {};
        }
    })();

    return (<>
        <Select enabled={(stencilMode == "none") ? true : false}>
        <mesh
            ref={meshRef}
            geometry={hexagonGeometry}
            position={position}
            rotation={rotation}
        >
            <meshStandardMaterial
                color={color}
                metalness={0}
                roughness={1}
                transparent={false}
                {...stencilProps}
            />
        </mesh>
        </Select>
    </>
    );
}


// Componente do Canvas
function HexagonCanvas({estado}) {
    // const colors = ["#ff0", "#F00", "#0F0", "#00F", "#fff"]

    const hexagons = React.useMemo(() => {
        const items = [];
        const count = 200; // quantidade de hexágonos

        for (let i = 0; i < count; i++) {
            items.push({
                id: i,
                position: [
                    (Math.random() - 0.5) * 50, 
                    (Math.random() - 0.5) * 50, 
                    (Math.random() - 0.5) * 50
                ],
                size: Math.random() * 2 + 0.05, // tamanho entre 0.3 e 0.8
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ]
            });
        }
        return items;
    }, []);

    return (
        <div style={{ width: '100vw', height: '100vh', background: "transparent", position: "absolute", top: 0, zIndex: "-1" }}>
            <Filtro />
            <Canvas
                gl={{ stencil: true, antialias:false }}
                camera={{
                    fov: 50
                }}
            >
                <CameraController estado={estado} />
                <ambientLight intensity={3}/>
                <pointLight position={[0, 5, 5]} intensity={2} />
                <Hexagon color="#ff0" stencilMode='mask'/>


                {hexagons.map((hex) => (
                    <Hexagon
                    key={hex.id}
                    position={hex.position}
                    size={hex.size * 1.2}
                    color="#000"
                    rotation={hex.rotation}
                    />
                ))}

                {/* <Environment preset='forest' /> */}
                {/* <WavingPlane /> */}
                

                {hexagons.map((hex) => (
                    <Hexagon
                    key={hex.id}
                    position={hex.position}
                    size={hex.size * .8}
                    color="#00F"
                    rotation={hex.rotation}
                    stencilMode='content'
                    />
                ))}
                

                


            </Canvas>
        </div>
    );
}

export default HexagonCanvas;