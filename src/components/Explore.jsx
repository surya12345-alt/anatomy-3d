import { motion } from "framer-motion";
import ModelViewer from "./ModelViewer";

const Explore = () => {
  return (
    <section
      id="explore"
      className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-28 lg:px-10"
    >
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
            Explore the Model
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            See anatomy
            <span className="text-white/40"> differently.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/40">
            Interact directly with the three-dimensional model. Drag to
            rotate, scroll to zoom, and explore the human body from
            different perspectives.
          </p>
        </motion.div>

        {/* Main experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:grid-cols-[1fr_280px]"
        >
          {/* Model */}
          <div className="min-h-[500px]">
            <ModelViewer />
          </div>

          {/* Information panel */}
          <div className="border-t border-white/10 p-7 lg:border-l lg:border-t-0 lg:p-8">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Interaction
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm font-medium">
                    Rotate
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/35">
                    Drag your mouse or finger across the model.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Zoom
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/35">
                    Use your mouse wheel or pinch gesture.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Explore
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/35">
                    View the model from different angles.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Technology
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                  React
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                  Three.js
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                  WebGL
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Explore;