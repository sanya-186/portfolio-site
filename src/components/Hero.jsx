import { profile } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import { Room } from "./canvas/Room";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text Header */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="hero-head-text text-white">
            Hi, I'm <span className="text-[#915eff]">{profile.name.split(" ")[0]}</span>
          </h1>
          <p className="hero-sub-text mt-2 text-white-100 max-w-3xl">
            {profile.tagline}
          </p>
        </div>
      </div>

      {/* 3D Canvas placed lower into the vacant space */}
      <div className="absolute inset-0 top-[260px] md:top-[220px] flex items-center justify-center cursor-pointer">
        <Canvas
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ antialias: true, preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={0}
              maxAzimuthAngle={0}
            />
            <hemisphereLight intensity={0.15} groundColor="black" />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
            <spotLight
              position={[-20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={2}
              castShadow
            />
            <Room scale={1} position={[0, -2.9, 0]} rotation={[0.05, 0, 0]} />
          </Suspense>          <Preload all />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

