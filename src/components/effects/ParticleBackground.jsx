import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
    const meshRef = useRef();
    const count = 500;

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

            // Purple to cyan gradient colors
            const t = Math.random();
            colors[i * 3] = 0.4 + t * 0.2; // R
            colors[i * 3 + 1] = 0.2 + t * 0.5; // G
            colors[i * 3 + 2] = 0.8 + t * 0.2; // B
        }

        return { positions, colors };
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.02;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
};

const FloatingOrbs = () => {
    const orb1Ref = useRef();
    const orb2Ref = useRef();
    const orb3Ref = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (orb1Ref.current) {
            orb1Ref.current.position.x = Math.sin(t * 0.3) * 5;
            orb1Ref.current.position.y = Math.cos(t * 0.2) * 3;
        }
        if (orb2Ref.current) {
            orb2Ref.current.position.x = Math.cos(t * 0.4) * 4;
            orb2Ref.current.position.y = Math.sin(t * 0.3) * 4;
        }
        if (orb3Ref.current) {
            orb3Ref.current.position.x = Math.sin(t * 0.2) * 6;
            orb3Ref.current.position.y = Math.cos(t * 0.4) * 2;
        }
    });

    return (
        <>
            <mesh ref={orb1Ref} position={[3, 2, -5]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial
                    color="#6366f1"
                    transparent
                    opacity={0.3}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
            <mesh ref={orb2Ref} position={[-4, -1, -8]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    transparent
                    opacity={0.2}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
            <mesh ref={orb3Ref} position={[5, -3, -6]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#f472b6"
                    transparent
                    opacity={0.25}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </>
    );
};

const ParticleBackground = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        >
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
                <Particles />
                <FloatingOrbs />
            </Canvas>
        </div>
    );
};

export default ParticleBackground;