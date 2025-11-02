"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the loader after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          duration: 1.2,
        }}
        className="flex flex-col items-center gap-4"
      >
        <Image
          src="/assets/middle logo.png"
          alt="Loading Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[#FA6C25] font-semibold tracking-widest text-lg"
        >
          Loading ScaffoldGen...
        </motion.span>
      </motion.div>

      {/* Animated Glow */}
      <motion.div
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[200px] h-[200px] bg-[#FA6C25]/30 blur-3xl rounded-full"
      />
    </motion.div>
  );
}
