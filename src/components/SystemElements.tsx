"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ═══════════════════════════════════════════════════════════
   LARGE DASHBOARD LAPTOP — Big inline section element
   Shows an ERP dashboard with animated metrics
   ═══════════════════════════════════════════════════════════ */
export function DashboardLaptop({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [18, -8, -22]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 3, -6]);

  return (
    <motion.div
      ref={ref}
      className={`preserve-3d ${className}`}
      style={{
        perspective: 1400,
      }}
    >
      <motion.div
        style={{ rotateY, rotateX }}
        className="preserve-3d"
      >
        {/* Screen bezel */}
        <div
          className="relative bg-[#0c1220] border-[3px] border-slate/40"
          style={{
            width: "100%",
            maxWidth: 720,
            aspectRatio: "16/10",
            boxShadow: "0 0 120px rgba(152, 210, 8, 0.14), 0 50px 120px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Screen inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-blue-500/4" />

          {/* Dashboard UI */}
          <div className="relative p-4 sm:p-5 h-full flex flex-col gap-3">
            {/* Title bar */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-red-400/70" />
                <div className="w-2.5 h-2.5 bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 bg-green-400/70" />
              </div>
              <div className="flex-1 h-4 bg-white/5 mx-3" />
              <div className="h-3 w-16 bg-primary/20" />
            </div>

            {/* Sidebar + main area */}
            <div className="flex gap-3 flex-1 min-h-0">
              {/* Sidebar */}
              <div className="w-20 sm:w-24 flex flex-col gap-2 py-2">
                <div className="h-6 bg-primary/15 flex items-center px-2">
                  <div className="w-3 h-3 bg-primary/40" />
                </div>
                {["bg-white/6", "bg-white/6", "bg-primary/10", "bg-white/6", "bg-white/6", "bg-white/6"].map((c, i) => (
                  <div key={i} className={`h-4 ${c} flex items-center px-2 gap-1`}>
                    <div className="w-2 h-2 bg-white/10" />
                    <div className="flex-1 h-1.5 bg-white/8" />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-3 min-h-0">
                {/* Stats cards row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { color: "bg-emerald-500/12 border border-emerald-500/10", label: "المبيعات", value: "٢٤,٥٠٠", accent: "text-emerald-400" },
                    { color: "bg-blue-500/12 border border-blue-500/10", label: "المشتريات", value: "١٨,٣٠٠", accent: "text-blue-400" },
                    { color: "bg-amber-500/12 border border-amber-500/10", label: "الأرباح", value: "٦,٢٠٠", accent: "text-amber-400" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.15, ease: [0.25, 0.8, 0.25, 1] }}
                      className={`${stat.color} p-2`}
                    >
                      <div className="text-[8px] sm:text-[9px] text-white/40">{stat.label}</div>
                      <div className={`text-xs sm:text-sm font-bold ${stat.accent}`} dir="rtl">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 bg-white/[0.02] border border-white/5 p-2 sm:p-3 min-h-0">
                  <div className="h-2 w-16 bg-white/10 mb-2" />
                  <div className="flex items-end gap-[3px] sm:gap-1 h-[calc(100%-16px)]">
                    {[35, 55, 45, 68, 52, 72, 48, 82, 58, 75, 90, 62].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.06, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                        className={`flex-1 ${
                          i >= 10 ? "bg-primary/60" :
                          i >= 8 ? "bg-primary/40" :
                          i >= 5 ? "bg-teal-500/30" :
                          "bg-teal-500/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Table rows */}
                <div className="space-y-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="h-3 bg-white/[0.03] flex items-center gap-2 px-2"
                    >
                      <div className="w-1/5 h-1.5 bg-white/8" />
                      <div className="w-1/4 h-1.5 bg-white/5" />
                      <div className="flex-1" />
                      <div className="w-8 h-1.5 bg-primary/15" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scan line effect */}
          <motion.div
            animate={{ y: [-300, 300] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none"
          />

          {/* Screen edge glow */}
          <div className="absolute inset-0 border border-primary/[0.06] pointer-events-none" />
        </div>

        {/* Keyboard base */}
        <div
          className="mx-auto bg-gradient-to-b from-slate/60 to-graphite border-x-2 border-b-2 border-white/8"
          style={{
            width: "108%",
            marginLeft: "-4%",
            height: 28,
            transform: "perspective(800px) rotateX(70deg)",
            transformOrigin: "top center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}
        >
          <div className="flex gap-[2px] px-3 pt-1.5 flex-wrap overflow-hidden">
            {[...Array(45)].map((_, i) => (
              <div key={i} className="w-[6%] h-2 bg-white/[0.04]" />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MODULE SCREEN — Shows an ERP module interface with
   content that "emerges" from the screen on scroll
   ═══════════════════════════════════════════════════════════ */
export function ModuleScreen({
  moduleName,
  items,
  className = "",
}: {
  moduleName: string;
  items: { label: string; value: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 3, 14]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, -2, -6]);
  const cardY = useTransform(scrollYProgress, [0.2, 0.5], [60, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ perspective: 1100 }}>
      <motion.div style={{ rotateY, rotateX }} className="preserve-3d">
        {/* Monitor frame */}
        <div
          className="relative bg-[#0c1220] border-[3px] border-slate/40 overflow-hidden"
          style={{
            width: "100%",
            maxWidth: 520,
            aspectRatio: "4/3",
            boxShadow: "0 0 80px rgba(152, 210, 8, 0.08), 0 30px 70px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/3" />

          <div className="relative p-4 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-primary/25 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-primary/60" />
              </div>
              <div className="text-white/70 text-xs font-bold">{moduleName}</div>
              <div className="flex-1" />
              <div className="flex gap-1">
                <div className="h-2 w-2 bg-emerald-500/30" />
                <div className="h-2 w-8 bg-white/5" />
              </div>
            </div>

            {/* Module data rows emerging */}
            <div className="flex-1 flex flex-col gap-2">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    y: cardY,
                    opacity: cardOpacity,
                  }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between bg-white/[0.03] border border-white/[0.06] p-3 hover:bg-white/[0.06] transition-colors duration-300"
                >
                  <span className="text-[10px] sm:text-xs text-white/50">{item.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-primary/80">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stand */}
        <div className="flex flex-col items-center">
          <div className="w-2 h-8 bg-slate/40" />
          <div className="w-20 h-2 bg-slate/30" />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PHONE WITH APP — Large phone showing the mobile app
   Rotates on scroll, cards slide out on scroll
   ═══════════════════════════════════════════════════════════ */
export function PhoneWithApp({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [28, -3, -20]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 2, 8]);
  const cardSlide = useTransform(scrollYProgress, [0.3, 0.55], [50, -25]);
  const cardOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  return (
    <div ref={ref} className={`relative ${className}`} style={{ perspective: 900 }}>
      <motion.div style={{ rotateY, rotateX }} className="preserve-3d">
        <div
          className="relative bg-[#0c1220] border-[3px] border-white/12 overflow-visible mx-auto"
          style={{
            width: 220,
            height: 440,
            boxShadow: "0 30px 100px rgba(0,0,0,0.6), 0 0 60px rgba(152,210,8,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 pt-2 pb-1">
            <div className="w-8 h-1 bg-white/20" />
            <div className="w-4 h-1 bg-white/15" />
          </div>

          {/* App header */}
          <div className="px-3 py-2">
            <div className="h-2 w-12 bg-primary/30 mb-1" />
            <div className="h-1.5 w-20 bg-white/10" />
          </div>

          {/* App content */}
          <div className="px-3 space-y-2">
            {/* Summary card */}
            <div className="bg-gradient-to-l from-primary/12 to-emerald-500/8 p-2 border border-primary/10">
              <div className="text-[7px] text-white/40 mb-1">المبيعات اليوم</div>
              <div className="text-sm font-bold text-primary" dir="rtl">٤,٢٠٠ د.ع</div>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-emerald-400" />
                <div className="text-[6px] text-emerald-400">+١٢٪</div>
              </div>
            </div>

            {/* Mini chart */}
            <div className="bg-white/[0.03] p-2 h-16">
              <div className="flex items-end gap-[2px] h-full">
                {[40, 60, 35, 75, 50, 65, 80, 45, 70, 55, 85, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.04 }}
                    className="flex-1 bg-primary/25"
                  />
                ))}
              </div>
            </div>

            {/* List items */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.02] p-1.5">
                <div className={`w-4 h-4 ${i === 0 ? "bg-primary/20" : "bg-white/5"}`} />
                <div className="flex-1">
                  <div className="h-1.5 bg-white/10 w-3/4 mb-1" />
                  <div className="h-1 bg-white/5 w-1/2" />
                </div>
                <div className="h-1 w-6 bg-white/8" />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 inset-x-0 flex justify-around p-2 bg-graphite/80 border-t border-white/5">
            {[true, false, false, false].map((active, i) => (
              <div key={i} className={`w-5 h-5 ${active ? "bg-primary/30" : "bg-white/8"}`} />
            ))}
          </div>
        </div>

        {/* Floating notification card OUTSIDE the phone — slide on scroll */}
        <motion.div
          style={{ x: cardSlide, opacity: cardOpacity }}
          className="absolute -right-24 top-16 z-20"
        >
          <div className="bg-graphite/95 border border-white/10 p-2.5 w-28 shadow-xl" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3 h-3 bg-primary/40" />
              <div className="h-1.5 w-10 bg-white/20" />
            </div>
            <div className="h-1 w-full bg-white/8" />
            <div className="h-1 w-2/3 bg-white/5 mt-1" />
          </div>
        </motion.div>

        {/* Floating stat card — slide other side */}
        <motion.div
          style={{ x: useTransform(scrollYProgress, [0.35, 0.6], [-40, 15]), opacity: cardOpacity }}
          className="absolute -left-20 bottom-24 z-20"
        >
          <div className="bg-graphite/95 border border-primary/20 p-2.5 w-24 shadow-xl" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.4)" }}>
            <div className="text-[7px] text-white/40">الطلبات</div>
            <div className="text-sm font-bold text-primary">١٢٣</div>
            <div className="h-1.5 w-full bg-primary/15 mt-1">
              <div className="h-full w-3/4 bg-primary/40" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ISOMETRIC ERP GRID — 3D isometric blocks showing
   connected modules, rotates gently on scroll
   ═══════════════════════════════════════════════════════════ */
export function IsometricERPGrid({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 40, 20]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-20, -38, -50]);

  const moduleBlocks = [
    { label: "المحاسبة", x: 0, y: 0, h: 55, color: "#10B981" },     /* emerald — finance */
    { label: "المخزون", x: 1, y: 0, h: 45, color: "#3B82F6" },      /* blue — inventory */
    { label: "المبيعات", x: 2, y: 0, h: 65, color: "#98d208" },     /* primary — sales */
    { label: "الموارد", x: 0, y: 1, h: 40, color: "#8B5CF6" },      /* purple — HR */
    { label: "المشاريع", x: 1, y: 1, h: 60, color: "#F59E0B" },    /* amber — projects */
    { label: "التقارير", x: 2, y: 1, h: 50, color: "#14B8A6" },     /* teal — reports */
    { label: "التصنيع", x: 0, y: 2, h: 48, color: "#F43F5E" },     /* rose — manufacturing */
    { label: "العملاء", x: 1, y: 2, h: 55, color: "#6366F1" },      /* indigo — CRM */
    { label: "المشتريات", x: 2, y: 2, h: 42, color: "#EC4899" },   /* pink — purchasing */
  ];

  return (
    <div ref={ref} className={`${className}`} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, rotateY }}
        className="preserve-3d relative mx-auto"
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="relative" style={{ width: 380, height: 360, margin: "0 auto" }}>
          {moduleBlocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 120 }}
              className="absolute preserve-3d"
              style={{
                left: block.x * 120,
                top: block.y * 108,
                width: 100,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top face */}
              <div
                className="absolute"
                style={{
                  width: 100,
                  height: 100,
                  background: block.color,
                  opacity: 0.6,
                  filter: "brightness(1.4)",
                  transform: `rotateX(90deg) translateZ(${block.h}px)`,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />
              {/* Front face */}
              <div
                className="flex items-end justify-center pb-2"
                style={{
                  width: 100,
                  height: block.h,
                  background: block.color,
                  opacity: 0.7,
                  transform: `translateZ(50px)`,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-white text-[10px] font-bold drop-shadow-sm">{block.label}</span>
              </div>
              {/* Right side face */}
              <div
                className="absolute"
                style={{
                  width: 50,
                  height: block.h,
                  background: block.color,
                  opacity: 0.5,
                  filter: "brightness(0.65)",
                  right: -50,
                  top: 0,
                  transform: "rotateY(90deg) translateZ(50px)",
                  transformOrigin: "left",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              />
              {/* Glow beneath */}
              <div
                className="absolute -inset-1 blur-lg pointer-events-none"
                style={{ background: block.color, opacity: 0.08 }}
              />
            </motion.div>
          ))}

          {/* Animated connection pulses */}
          {[
            { x1: 42, y1: 50, x2: 142, y2: 50 },
            { x1: 142, y1: 50, x2: 242, y2: 50 },
            { x1: 42, y1: 50, x2: 42, y2: 140 },
            { x1: 142, y1: 50, x2: 142, y2: 140 },
            { x1: 42, y1: 140, x2: 42, y2: 230 },
            { x1: 142, y1: 140, x2: 242, y2: 140 },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.1 }}
              className="absolute pointer-events-none"
              style={{
                left: Math.min(line.x1, line.x2),
                top: Math.min(line.y1, line.y2),
                width: line.x1 === line.x2 ? 2 : Math.abs(line.x2 - line.x1),
                height: line.y1 === line.y2 ? 2 : Math.abs(line.y2 - line.y1),
                background: "rgba(152,210,8,0.2)",
              }}
            >
              <motion.div
                animate={{
                  x: line.x1 === line.x2 ? 0 : [0, Math.abs(line.x2 - line.x1)],
                  y: line.y1 === line.y2 ? 0 : [0, Math.abs(line.y2 - line.y1)],
                }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className="w-2 h-2 bg-primary shadow-lg shadow-primary/50 absolute"
                style={{ marginLeft: -4, marginTop: -4 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL-DRIVEN MONITOR — Large monitor that tilts on scroll
   with animated dashboard content revealing on scroll
   ═══════════════════════════════════════════════════════════ */
export function ScrollMonitor({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [24, -2, -16]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 2, -6]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.85, 1, 1]);

  return (
    <div ref={ref} className={`${className}`} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateY, rotateX, scale }}
        className="preserve-3d"
      >
        <div
          className="relative bg-[#0c1220] border-[3px] border-slate/35 overflow-hidden"
          style={{
            width: "100%",
            maxWidth: 560,
            aspectRatio: "16/10",
            boxShadow: "0 0 100px rgba(152, 210, 8, 0.1), 0 45px 100px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-blue-500/3" />
          {children}
        </div>
        {/* Stand */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-10 bg-slate/30" />
          <div className="w-28 h-2 bg-slate/20" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }} />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   TETRIS BLOCKS — 3D falling / assembled Tetris pieces
   representing ERP modules clicking into place.
   Overflows sections for dramatic oversized effect.
   ═══════════════════════════════════════════════════════════ */

type TetrisShape = { cells: [number, number][]; color: string; label: string };

const TETRIS_SHAPES: TetrisShape[] = [
  { cells: [[0,0],[1,0],[0,1],[1,1]], color: "#10B981", label: "المحاسبة" },         // O — green (finance)
  { cells: [[0,0],[1,0],[2,0],[3,0]], color: "#3B82F6", label: "المخزون" },           // I — blue (inventory)
  { cells: [[0,0],[0,1],[1,1],[2,1]], color: "#98d208", label: "المبيعات" },          // J — primary (sales)
  { cells: [[0,0],[1,0],[1,1],[2,1]], color: "#F59E0B", label: "المشاريع" },          // S — amber (projects)
  { cells: [[1,0],[0,1],[1,1],[2,1]], color: "#8B5CF6", label: "الموارد البشرية" },   // T — purple (HR)
  { cells: [[2,0],[0,1],[1,1],[2,1]], color: "#F43F5E", label: "التصنيع" },           // L — rose (manufacturing)
  { cells: [[0,0],[1,0],[0,1],[1,0]], color: "#14B8A6", label: "التقارير" },          // Z variant — teal
];

export function TetrisBlocks({
  className = "",
  variant = "assembled",
}: {
  className?: string;
  variant?: "assembled" | "falling" | "scattered";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [35, 25, 15]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-30, -40, -48]);
  const globalScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);

  const CELL = 44;
  const GAP = 3;

  /* Pre-computed placement grid positions for assembled mode */
  const placements = [
    { shape: 0, gx: 0, gy: 0 },   // O-block top-left
    { shape: 1, gx: 2, gy: 0 },   // I-block horizontal
    { shape: 4, gx: 0, gy: 2 },   // T-block
    { shape: 2, gx: 3, gy: 1 },   // J-block
    { shape: 3, gx: 0, gy: 4 },   // S-block
    { shape: 5, gx: 2, gy: 3 },   // L-block
    { shape: 6, gx: 4, gy: 4 },   // Z-block
  ];

  return (
    <div ref={ref} className={`${className}`} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, rotateY, scale: globalScale }}
        className="preserve-3d relative mx-auto"
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="relative" style={{ width: 6 * (CELL + GAP), height: 6 * (CELL + GAP), margin: "0 auto" }}>
          {placements.map((p, pi) => {
            const shape = TETRIS_SHAPES[p.shape];
            return shape.cells.map((cell, ci) => {
              const x = (p.gx + cell[0]) * (CELL + GAP);
              const y = (p.gy + cell[1]) * (CELL + GAP);
              const blockH = variant === "assembled" ? 30 + pi * 4 : 24;
              const scatterOffsetX = variant === "scattered" ? (pi % 2 === 0 ? -20 : 20) * (ci + 1) : 0;
              const scatterOffsetY = variant === "scattered" ? (pi % 3 === 0 ? -15 : 15) * ci : 0;

              return (
                <motion.div
                  key={`${pi}-${ci}`}
                  initial={
                    variant === "falling"
                      ? { opacity: 0, y: -200 - pi * 60, rotateZ: pi * 15 }
                      : variant === "scattered"
                      ? { opacity: 0, scale: 0.5, x: scatterOffsetX * 3, y: scatterOffsetY * 3 }
                      : { opacity: 0, y: 40, scale: 0.6 }
                  }
                  whileInView={
                    variant === "falling"
                      ? { opacity: 1, y: 0, rotateZ: 0 }
                      : variant === "scattered"
                      ? { opacity: 1, scale: 1, x: scatterOffsetX, y: scatterOffsetY }
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    delay: variant === "falling" ? 0.1 + pi * 0.15 + ci * 0.03 : 0.1 + pi * 0.08 + ci * 0.02,
                    type: "spring",
                    stiffness: variant === "falling" ? 80 : 120,
                    damping: variant === "falling" ? 10 : 14,
                  }}
                  className="absolute preserve-3d"
                  style={{
                    left: x,
                    top: y,
                    width: CELL,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Top face */}
                  <div
                    className="absolute"
                    style={{
                      width: CELL,
                      height: CELL,
                      background: shape.color,
                      opacity: 0.7,
                      filter: "brightness(1.5)",
                      transform: `rotateX(90deg) translateZ(${blockH}px)`,
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  >
                    {ci === 0 && (
                      <span className="absolute inset-0 flex items-center justify-center text-[7px] text-white/80 font-bold"
                        style={{ transform: "rotateX(180deg)" }}
                      >
                        {shape.label.slice(0, 3)}
                      </span>
                    )}
                  </div>
                  {/* Front face */}
                  <div
                    style={{
                      width: CELL,
                      height: blockH,
                      background: shape.color,
                      opacity: 0.8,
                      transform: `translateZ(${CELL / 2}px)`,
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                  {/* Right side face */}
                  <div
                    className="absolute"
                    style={{
                      width: CELL / 2,
                      height: blockH,
                      background: shape.color,
                      opacity: 0.5,
                      filter: "brightness(0.6)",
                      right: -(CELL / 2),
                      top: 0,
                      transform: `rotateY(90deg) translateZ(${CELL / 2}px)`,
                      transformOrigin: "left",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  />
                  {/* Glow */}
                  <div
                    className="absolute -inset-2 blur-xl pointer-events-none"
                    style={{ background: shape.color, opacity: 0.06 }}
                  />
                </motion.div>
              );
            });
          })}

          {/* Brand logo watermark in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            className="absolute z-10 pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) translateZ(60px)",
              width: 56,
              height: 56,
            }}
          >
            <Image src="/logo.png" alt="Injaz" width={56} height={56} className="opacity-60 drop-shadow-lg" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   BRAND DIAMOND — The Injaz diamond / puzzle-piece identity
   A rotating 3D diamond with the logo, used as brand accent
   ═══════════════════════════════════════════════════════════ */
export function BrandDiamond({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.div
      animate={{ rotateY: [0, 360] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className={`preserve-3d ${className}`}
      style={{ perspective: 600, width: size, height: size }}
    >
      <div
        className="relative w-full h-full rotate-45 preserve-3d"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #98d208 0%, #7ab506 100%)",
            transform: `translateZ(${size / 4}px)`,
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: `0 0 ${size / 2}px rgba(152,210,8,0.2)`,
          }}
        >
          <div className="-rotate-45">
            <Image src="/logo.png" alt="Injaz" width={size * 0.5} height={size * 0.5} className="drop-shadow-md" />
          </div>
        </div>
        {/* Back face */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #7ab506 0%, #5a8a04 100%)",
            transform: `translateZ(-${size / 4}px) rotateY(180deg)`,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
        {/* Top face */}
        <div
          className="absolute"
          style={{
            width: "100%",
            height: size / 2,
            background: "linear-gradient(180deg, #b5e63a 0%, #98d208 100%)",
            top: -(size / 4),
            transform: `rotateX(90deg) translateZ(0px)`,
            transformOrigin: "bottom center",
            border: "1px solid rgba(255,255,255,0.15)",
            opacity: 0.9,
          }}
        />
        {/* Right face */}
        <div
          className="absolute"
          style={{
            width: size / 2,
            height: "100%",
            background: "linear-gradient(90deg, #98d208 0%, #6a9e05 100%)",
            right: -(size / 4),
            transform: `rotateY(90deg) translateZ(0px)`,
            transformOrigin: "left center",
            border: "1px solid rgba(255,255,255,0.08)",
            opacity: 0.7,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING TETRIS PIECE — Single decorative tetris shape
   that floats around as a brand decoration
   ═══════════════════════════════════════════════════════════ */
export function FloatingTetrisPiece({
  className = "",
  shapeIndex = 0,
  size = 20,
}: {
  className?: string;
  shapeIndex?: number;
  size?: number;
}) {
  const shape = TETRIS_SHAPES[shapeIndex % TETRIS_SHAPES.length];
  const blockH = 12;

  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotateZ: [0, 3, -3, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 6 + shapeIndex * 0.5,
        ease: "easeInOut",
      }}
      className={`preserve-3d pointer-events-none ${className}`}
      style={{
        perspective: 400,
        transformStyle: "preserve-3d",
        transform: `rotateX(-35deg) rotateY(30deg)`,
      }}
    >
      <div className="relative preserve-3d" style={{ transformStyle: "preserve-3d" }}>
        {shape.cells.map((cell, ci) => (
          <div
            key={ci}
            className="absolute preserve-3d"
            style={{
              left: cell[0] * (size + 2),
              top: cell[1] * (size + 2),
              width: size,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top */}
            <div
              className="absolute"
              style={{
                width: size,
                height: size,
                background: shape.color,
                opacity: 0.5,
                filter: "brightness(1.4)",
                transform: `rotateX(90deg) translateZ(${blockH}px)`,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
            {/* Front */}
            <div
              style={{
                width: size,
                height: blockH,
                background: shape.color,
                opacity: 0.6,
                transform: `translateZ(${size / 2}px)`,
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            {/* Right */}
            <div
              className="absolute"
              style={{
                width: size / 2,
                height: blockH,
                background: shape.color,
                opacity: 0.35,
                filter: "brightness(0.6)",
                right: -(size / 2),
                top: 0,
                transform: `rotateY(90deg) translateZ(${size / 2}px)`,
                transformOrigin: "left",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FINAL TETRIS — Big assembled Tetris structure
   3 pieces in place + 1 GREEN piece falling to complete it.
   Represents all ERP modules aligning together.
   ═══════════════════════════════════════════════════════════ */
export function FinalTetris({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [25, 15, 5]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [-25, -35, -45]);

  const CELL = 56;
  const GAP = 4;

  /*
    Grid layout (4 cols × 4 rows):
    Col:   0    1    2    3
    Row 0:            [G]  [G]   ← GREEN piece (falls from above)
    Row 1: [A]  [A]  [G]  [P]   ← Amber + Green fills gap + Purple
    Row 2: [A]  [A]  [P]  [P]   ← Amber + Purple
    Row 3: [B]  [B]  [B]  [B]   ← Blue base
  */

  const assembledPieces = [
    {
      cells: [[0, 3], [1, 3], [2, 3], [3, 3]] as [number, number][],
      color: "#3B82F6",
      label: "المخزون",
      h: 36,
    },
    {
      cells: [[0, 1], [1, 1], [0, 2], [1, 2]] as [number, number][],
      color: "#F59E0B",
      label: "المشاريع",
      h: 32,
    },
    {
      cells: [[3, 1], [2, 2], [3, 2]] as [number, number][],
      color: "#8B5CF6",
      label: "الموارد",
      h: 28,
    },
  ];

  const greenPiece = {
    cells: [[2, 0], [3, 0], [2, 1]] as [number, number][],
    color: "#98d208",
    label: "إنجاز",
    h: 30,
  };

  const gridW = 4 * (CELL + GAP);
  const gridH = 4 * (CELL + GAP);

  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, rotateY }}
        className="preserve-3d relative mx-auto"
      >
        <div
          className="relative"
          style={{ width: gridW, height: gridH, margin: "0 auto" }}
        >
          {/* Pre-assembled pieces */}
          {assembledPieces.map((piece, pi) =>
            piece.cells.map((cell, ci) => (
              <motion.div
                key={`a-${pi}-${ci}`}
                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + pi * 0.15 + ci * 0.04,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
                className="absolute preserve-3d"
                style={{
                  left: cell[0] * (CELL + GAP),
                  top: cell[1] * (CELL + GAP),
                  width: CELL,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Top face */}
                <div
                  className="absolute"
                  style={{
                    width: CELL,
                    height: CELL,
                    background: piece.color,
                    opacity: 0.7,
                    filter: "brightness(1.4)",
                    transform: `rotateX(90deg) translateZ(${piece.h}px)`,
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {ci === 0 && (
                    <span
                      className="absolute inset-0 flex items-center justify-center text-[8px] text-white/80 font-bold"
                      style={{ transform: "rotateX(180deg)" }}
                    >
                      {piece.label}
                    </span>
                  )}
                </div>
                {/* Front face */}
                <div
                  style={{
                    width: CELL,
                    height: piece.h,
                    background: piece.color,
                    opacity: 0.85,
                    transform: `translateZ(${CELL / 2}px)`,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
                {/* Right face */}
                <div
                  className="absolute"
                  style={{
                    width: CELL / 2,
                    height: piece.h,
                    background: piece.color,
                    opacity: 0.5,
                    filter: "brightness(0.6)",
                    right: -(CELL / 2),
                    top: 0,
                    transform: `rotateY(90deg) translateZ(${CELL / 2}px)`,
                    transformOrigin: "left",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                />
              </motion.div>
            ))
          )}

          {/* GREEN falling piece — the completion piece */}
          {greenPiece.cells.map((cell, ci) => (
            <motion.div
              key={`g-${ci}`}
              initial={{ opacity: 0, y: -200, rotateZ: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 1.0 + ci * 0.06,
                type: "spring",
                stiffness: 55,
                damping: 9,
              }}
              className="absolute preserve-3d"
              style={{
                left: cell[0] * (CELL + GAP),
                top: cell[1] * (CELL + GAP),
                width: CELL,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Top face */}
              <div
                className="absolute"
                style={{
                  width: CELL,
                  height: CELL,
                  background: greenPiece.color,
                  opacity: 0.75,
                  filter: "brightness(1.5)",
                  transform: `rotateX(90deg) translateZ(${greenPiece.h}px)`,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {ci === 0 && (
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-bold"
                    style={{ transform: "rotateX(180deg)" }}
                  >
                    {greenPiece.label}
                  </span>
                )}
              </div>
              {/* Front face */}
              <div
                style={{
                  width: CELL,
                  height: greenPiece.h,
                  background: greenPiece.color,
                  opacity: 0.9,
                  transform: `translateZ(${CELL / 2}px)`,
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              />
              {/* Right face */}
              <div
                className="absolute"
                style={{
                  width: CELL / 2,
                  height: greenPiece.h,
                  background: greenPiece.color,
                  opacity: 0.55,
                  filter: "brightness(0.65)",
                  right: -(CELL / 2),
                  top: 0,
                  transform: `rotateY(90deg) translateZ(${CELL / 2}px)`,
                  transformOrigin: "left",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              {/* Glow */}
              <div
                className="absolute -inset-4 blur-2xl pointer-events-none"
                style={{ background: greenPiece.color, opacity: 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
