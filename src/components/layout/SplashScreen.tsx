"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("aa_splash_seen")) return;
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("aa_splash_seen", "1");
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-aa-yellow flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* Rayons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-aa-ink/10"
                style={{
                  height: "60vh",
                  rotate: `${i * 22.5}deg`,
                  transformOrigin: "bottom center",
                  bottom: "50%",
                  left: "calc(50% - 2px)",
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Image
                src="/logo-final.png"
                alt="AnimAction33"
                width={320}
                height={320}
                sizes="320px"
                className="object-contain h-auto w-[320px] max-w-[80vw] drop-shadow-2xl"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="font-hand text-3xl text-aa-ink tracking-wide"
            >
              Vivez l&apos;animation autrement
            </motion.p>
          </motion.div>

          {/* Confettis */}
          {Array.from({ length: 24 }).map((_, i) => {
            const colors = ["#E8252C", "#1C5FD8", "#0F1B3D", "#FFFDF6"];
            const left = `${(i * 37) % 100}%`;
            const duration = 2.5 + ((i * 13) % 10) / 10;
            const delay = 0.8 + ((i * 7) % 5) / 10;
            return (
              <motion.div
                key={i}
                className="absolute w-4 h-3 rounded-sm"
                style={{ backgroundColor: colors[i % 4], left, top: "-20px" }}
                initial={{ y: -30, rotate: 0, opacity: 1 }}
                animate={{ y: "110vh", rotate: 720, opacity: [1, 1, 0] }}
                transition={{ duration, delay, ease: "easeIn" }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
