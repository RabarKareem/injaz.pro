"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withTexture?: boolean;
  withTetrisPattern?: boolean;
  dark?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  withTexture = false,
  withTetrisPattern = false,
  dark = false,
}: SectionProps) {
  const bgClass = dark
    ? "bg-charcoal text-white"
    : withTexture
      ? "bg-texture"
      : withTetrisPattern
        ? "bg-tetris-pattern bg-cream"
        : "bg-white";

  return (
    <section id={id} className={`relative py-18 lg:py-24 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 lg:mb-14 ${centered ? "text-center" : ""}`}
    >
      {/* Geometric accent */}
      <div
        className={`flex items-center gap-2 mb-4 ${centered ? "justify-center" : ""}`}
      >
        <span className="w-3 h-3 bg-primary rotate-45" />
        <span className="w-8 h-0.5 bg-primary/40" />
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          dark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base lg:text-lg leading-8 max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-gray-300" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directionMap = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
