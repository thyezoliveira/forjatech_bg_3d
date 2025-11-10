import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Componente do Hexágono
export function Hexagon({
    position = [0, 0, 0],
    size = 2.5,
    color = "#ffff00",
    rotation = [0, 0, 0],
    animate = true,
    stencilMode = "none" // "mask" | "content" | "none"
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
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
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

    return (
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
                {...stencilProps} // aplica dinamicamente
            />
        </mesh>
    );
}


// Componente do Canvas
function HexagonCanvas() {

    const hexagons = React.useMemo(() => {
        const items = [];
        const count = 50; // quantidade de hexágonos

        for (let i = 0; i < count; i++) {
            items.push({
                id: i,
                position: [
                    (Math.random() - 0.5) * 10, // x entre -10 e 10
                    (Math.random() - 0.5) * 10, // y entre -10 e 10
                    (Math.random() - 0.5) * 5 - 15 // z entre -10 e -5 (atrás)
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
        <div style={{ width: '100vw', height: '100vh', background: "transparent", position: "absolute", top: 0 }}>
            <Canvas
                gl={{ stencil: true }}
                camera={{
                    position: [0, 0, 10],
                    fov: 50
                }}>
                <ambientLight intensity={1}/>
                <Hexagon stencilMode='mask' />
                {hexagons.map((hex) => (
                    <Hexagon
                    key={hex.id}
                    position={hex.position}
                    size={hex.size * 0.5}
                    color="#000"
                    rotation={hex.rotation}
                    animate={true}
                    stencilMode='content'
                    />
                ))}

            </Canvas>
        </div>
    );
}

export default HexagonCanvas;