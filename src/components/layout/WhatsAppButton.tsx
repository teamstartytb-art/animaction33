"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);
  const waMessage = encodeURIComponent(
    "Bonjour AnimAction33 ! Je souhaite des informations sur vos prestations."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-aa-paper border-3 border-aa-ink rounded-2xl p-5 shadow-pop-lg max-w-xs"
          >
            <p className="font-display text-aa-ink text-sm uppercase mb-2">
              Parlons de votre projet&nbsp;!
            </p>
            <p className="text-aa-ink/70 text-sm mb-4">Réponse rapide 7j/7 via WhatsApp</p>
            <a
              href={`https://wa.me/33677243675?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-xl font-display text-sm uppercase border-2 border-aa-ink shadow-pop-sm hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} /> Ouvrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.4, 1.4], opacity: [0.7, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Contacter via WhatsApp"
          className="relative w-16 h-16 bg-green-500 rounded-full border-3 border-aa-ink shadow-pop-md flex items-center justify-center text-white"
        >
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="wapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
