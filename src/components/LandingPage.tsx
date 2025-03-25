// src/components/LandingPage.tsx
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="h-screen overflow-hidden relative flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?photography')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white relative z-10 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to ShootForArts
      </motion.h1>

      <motion.div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
}
