"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

interface PremiumCardProps {
  icon?: string;
  title: string;
  description: string;
  index?: number;
  accent?: boolean;
}

export default function PremiumCard({
  icon,
  title,
  description,
  index = 0,
  accent = false,
}: PremiumCardProps) {
  const IconComponent = icon
    ? ((LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[icon] ?? null)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`card-premium relative rounded-[1.6rem] p-6 lg:p-7 border ${
        accent
          ? "bg-primary text-charcoal border-primary shadow-[4px_4px_0px_0px_rgba(122,181,6,0.4)]"
          : "bg-white border-border hover:border-primary/30"
      }`}
    >
      {/* Angular corner accent */}
      <div
        className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${
          accent ? "border-white/30" : "border-primary/20"
        }`}
      />

      {IconComponent && (
        <div
          className={`w-12 h-12 flex items-center justify-center mb-5 ${
            accent ? "bg-white/15" : "bg-primary/8"
          }`}
        >
          <IconComponent
            className={`w-6 h-6 ${accent ? "text-white" : "text-primary"}`}
          />
        </div>
      )}

      <h3
        className={`text-lg font-bold mb-3 ${accent ? "text-charcoal" : "text-charcoal"}`}
      >
        {title}
      </h3>
      <p
        className={`line-clamp-3 text-sm leading-7 ${
          accent ? "text-charcoal/75" : "text-muted"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
