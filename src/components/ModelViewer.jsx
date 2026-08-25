import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Html,
  useGLTF,
} from "@react-three/drei";

function AnatomyModel() {
  const { scene } = useGLTF("/models/human-anatomy.glb");

  return (
    <primitive
      object={scene}
      scale={2.2}
      position={[0, -1.5, 0]}
    />
  );
}

function LoadingScreen() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />

        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          Loading anatomy
        </p>
      </div>
    </Html>
  );
}

const ModelViewer = () => {
  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050505] sm:h-[520px] lg:h-[600px]">

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-3xl" />

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
        dpr={[1, 1.5]}
      >
        {/* Main lighting */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={2.5}
        />

        {/* Fill light */}
        <directionalLight
          position={[-5, 2, 3]}
          intensity={1.2}
        />

        {/* Back light */}
        <pointLight
          position={[0, 3, -4]}
          intensity={1.5}
        />

        <Suspense fallback={<LoadingScreen />}>
          <AnatomyModel />

          <Environment preset="studio" />

          <OrbitControls
            enablePan={false}
            enableZoom
            minDistance={3}
            maxDistance={7}
            autoRotate
            autoRotateSpeed={0.6}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>

      {/* Interaction hint */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
        <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-white/40">
          Drag to rotate • Scroll to zoom
        </p>
      </div>

    </div>
  );
};

useGLTF.preload("/models/human-anatomy.glb");

export default ModelViewer;