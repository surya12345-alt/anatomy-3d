import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-10 pt-28 lg:grid-cols-2 lg:px-10">

        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400/70">
            Interactive Anatomy
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Explore the
            <span className="block text-white/40">
              human body.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            Discover human anatomy through an immersive three-dimensional
            experience. Rotate, zoom, and explore the body from every angle.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#explore"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105"
            >
              Explore 3D
            </a>

            <a
              href="#features"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/70 transition duration-300 hover:border-white/40 hover:text-white"
            >
              Learn More
            </a>
          </div>

          {/* Small stats */}
          <div className="mt-14 flex gap-10">
            <div>
              <p className="text-2xl font-semibold">3D</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                Interactive
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">360°</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                Exploration
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold">WebGL</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/30">
                Powered
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/[0.05] blur-3xl" />

          <ModelViewer />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll to explore
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;