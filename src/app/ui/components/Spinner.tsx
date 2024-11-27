"use client";

import { motion } from "framer-motion";

export function Spinner() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-slate-300/80 backdrop-blur-sm"
      role="alert"
      aria-label="Loading"
    >
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-mustard-yellow rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
