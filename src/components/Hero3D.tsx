"use client";
import React, { useMemo, useRef, Suspense, lazy } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Text3D, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Kubernetes-style pods orbiting inside the cube
function Pods() {
  const groupRef = useRef<THREE.Group>(null);
  const pods = useMemo(() => new Array(8).fill(0).map((_, i) => ({
    id: i,
    angle: (i / 8) * Math.PI * 2,
    radius: 0.8,
    height: Math.sin(i) * 0.2,
    speed: 0.3 + (i % 3) * 0.1,
  })), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {pods.map((pod) => {
        const x = Math.cos(pod.angle) * pod.radius;
        const z = Math.sin(pod.angle) * pod.radius;
        const y = pod.height;
        
        return (
          <Float key={pod.id} speed={pod.speed} rotationIntensity={0.1} floatIntensity={0.3}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshStandardMaterial 
                color="#3B82F6"
                roughness={0.3} 
                metalness={0.7}
                emissive="#1E40AF"
                emissiveIntensity={0.2}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

// Terraform modules as small cubes
function TerraformModules() {
  const modules = useMemo(() => [
    { pos: [-1.2, -0.8, 0.6] as [number, number, number], rotation: [0.2, 0.4, 0] as [number, number, number] },
    { pos: [1.1, -0.6, -0.4] as [number, number, number], rotation: [-0.1, 0.8, 0.2] as [number, number, number] },
    { pos: [0.3, 0.9, 0.8] as [number, number, number], rotation: [0.3, -0.2, 0.1] as [number, number, number] },
  ], []);

  return (
    <>
      {modules.map((mod, i) => (
        <Float key={i} speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={mod.pos} rotation={mod.rotation}>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial 
              color="#FF9900"
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Main glass cube container
function GlassCube() {
  return (
    <mesh>
      <boxGeometry args={[2.4, 2.4, 2.4]} />
      <MeshTransmissionMaterial
        thickness={0.8}
        roughness={0}
        transmission={0.98}
        ior={1.25}
        chromaticAberration={0.06}
        backside={true}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
}

// AWS label floating above
function AWSLabel() {
  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.6}>
      <mesh position={[0, 2.8, 0]}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.3}
          height={0.02}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={8}
        >
          AWS
          <meshStandardMaterial 
            color="#E5E7EB"
            roughness={0.2}
            metalness={0.8}
          />
        </Text3D>
      </mesh>
    </Float>
  );
}

// Main scene
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <GlassCube />
      <Pods />
      <TerraformModules />
    </group>
  );
}

// Fallback component for reduced motion or loading
function Hero3DFallback() {
  return (
    <div className="h-[420px] w-full rounded-2xl bg-gradient-to-br from-card via-secondary/50 to-metric-bg/30 border border-card-border flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 mx-auto rounded-xl bg-accent/20 flex items-center justify-center">
          <div className="text-4xl font-heading font-bold text-accent">AWS</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-success animate-pulse animation-delay-100" />
          <div className="w-3 h-3 rounded-full bg-aws animate-pulse animation-delay-200" />
        </div>
        <p className="text-muted-foreground text-sm">DevOps Infrastructure</p>
      </div>
    </div>
  );
}

export default function Hero3D() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (reducedMotion) {
    return <Hero3DFallback />;
  }

  return (
    <div className="h-[420px] w-full rounded-2xl overflow-hidden border border-card-border">
      <Suspense fallback={<Hero3DFallback />}>
        <Canvas 
          dpr={[1, 1.5]} 
          camera={{ position: [3.5, 2.5, 3.5], fov: 35 }}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={["#0B1220"]} />
          <Environment preset="city" environmentIntensity={0.4} />
          
          <ambientLight intensity={0.3} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.2}
            color="#3B82F6"
            castShadow
          />
          <pointLight
            position={[-3, -2, 2]}
            intensity={0.8}
            color="#FF9900"
          />
          
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}