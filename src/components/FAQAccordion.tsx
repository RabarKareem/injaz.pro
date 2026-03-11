"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
          className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
            openIndex === index
              ? "border-primary/25 bg-primary/[0.04] shadow-[0_24px_50px_rgba(152,210,8,0.08)]"
              : "border-border bg-cream hover:border-primary/15 hover:bg-white"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 p-5 text-right"
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center gap-4 flex-1">
              <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-300 ${
                openIndex === index ? "bg-primary text-charcoal" : "bg-white text-slate shadow-[0_10px_20px_rgba(15,23,42,0.06)]"
              }`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-charcoal text-right flex-1">
                {item.question}
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-5 pb-5 pr-[4.5rem] text-[0.94rem] leading-[1.9] text-slate-600">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
