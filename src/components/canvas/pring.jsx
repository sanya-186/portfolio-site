import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const randomFromInterval = (min, max) => Math.random() * (max - min) + min;

const ParticleRing = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh", width: "100vw" }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  // Generate positions as a single Float32Array for instanced rendering
  const innerPositions = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = randomFromInterval(4, 6);
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = randomFromInterval(-0.5, 0.5);
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  const outerPositions = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = randomFromInterval(6, 8);
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = randomFromInterval(-1, 1);
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.05;
    if (innerRef.current) innerRef.current.rotation.z = t;
    if (outerRef.current) outerRef.current.rotation.z = t;
  });

  return (
    <group>
      <Points ref={innerRef} positions={innerPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#915eff"
          size={0.08}
          sizeAttenuation
          depthWrite={false}
          emissive="#915eff"
          emissiveIntensity={0.5}
        />
      </Points>
      <Points ref={outerRef} positions={outerPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </Points>
    </group>
  );
};

export default ParticleRing;