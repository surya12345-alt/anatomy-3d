import { motion } from "framer-motion";

const technologies = [
  "React",
  "Three.js",
  "React Three Fiber",
  "Tailwind CSS",
  "Framer Motion",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#070707] px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              The Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Where technology
              <span className="block text-white/40">
                meets anatomy.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/40">
              Anatomy 3D transforms traditional anatomical visualization
              into an immersive digital experience. Instead of viewing a
              static image, users can interact with a three-dimensional
              human anatomy model directly in the browser.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/40">
              The experience combines modern frontend development,
              real-time 3D rendering, responsive design, and smooth
              motion to create an engaging web experience.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-white/10 bg-black p-8 sm:p-10">

              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Built With
              </p>

              <div className="mt-8 space-y-5">
                {technologies.map((technology, index) => (
                  <div
                    key={technology}
                    className="flex items-center justify-between border-b border-white/10 pb-5 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-cyan-400/50">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-white/70">
                        {technology}
                      </span>
                    </div>

                    <span className="text-white/20">
                      →
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;