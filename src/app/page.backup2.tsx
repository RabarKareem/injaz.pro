"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ComponentType } from "react";
import Tilt from "react-parallax-tilt";

import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import Cube3D from "@/components/Cube3D";
import {
  FloatingLaptop,
  FloatingScreen,
  FloatingUICard,
  FloatingKeyboard,
  FloatingPhone,
  ConnectedModules,
} from "@/components/FloatingSystem";

import {
  hero,
  valuePropositions,
  missingPiece,
  comparison,
  ctaSection,
  faqItems,
} from "@/data/content";
import { modules } from "@/data/modules";
import { industries } from "@/data/industries";

function getIcon(name: string): ComponentType<LucideProps> | null {
  return (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[name] ?? null;
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 50));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

/* ─── Stagger variants ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ═══════════════════════════════════════════════════════════
   HERO — Full dark with floating laptop, screens & system UI
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal"
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] bg-primary/20 blur-[140px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-light/15 blur-[120px]"
        />
      </div>

      {/* 3D Floating System Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Laptop — top right */}
        <div className="absolute top-[12%] right-[3%] hidden lg:block">
          <FloatingLaptop delay={0.6} scale={0.85} />
        </div>

        {/* Floating Phone — left side */}
        <div className="absolute bottom-[25%] left-[5%] hidden lg:block">
          <FloatingPhone delay={1.2} />
        </div>

        {/* Floating keyboard — bottom right */}
        <div className="absolute bottom-[12%] right-[8%] hidden lg:block">
          <FloatingKeyboard delay={1.0} scale={0.8} className="opacity-50" />
        </div>

        {/* Floating UI Cards scattered */}
        <div className="absolute top-[20%] left-[8%] hidden lg:block animate-float">
          <FloatingUICard delay={0.8} variant="stat" />
        </div>
        <div className="absolute top-[55%] right-[6%] hidden lg:block animate-float-slow">
          <FloatingUICard delay={1.4} variant="chart" />
        </div>
        <div className="absolute bottom-[35%] left-[15%] hidden lg:block animate-float-reverse">
          <FloatingUICard delay={1.6} variant="notification" />
        </div>

        {/* Floating 3D cubes */}
        <div className="absolute top-[45%] right-[25%] hidden lg:block">
          <Cube3D size={35} animation="gentle" delay={1.0} opacity={0.25} />
        </div>
        <div className="absolute top-[15%] left-[25%] hidden lg:block">
          <Cube3D size={25} animation="float" delay={1.3} opacity={0.15} />
        </div>
        <div className="absolute bottom-[20%] left-[35%] hidden lg:block">
          <Cube3D size={20} animation="spin" delay={1.5} opacity={0.2} />
        </div>
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 px-5 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-primary rotate-45 animate-pulse" />
            <span className="text-primary-light text-sm font-medium">
              {hero.subheadline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-10"
          >
            القطعة{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-light via-primary to-accent animate-gradient">
              الناقصة
            </span>
            <br />
            لنجاح أعمالك
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CTAButton
              href="/contact"
              variant="primary"
              size="large"
              className="animate-glow !shadow-xl !shadow-primary/25"
            >
              {hero.cta1}
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            </CTAButton>
            <CTAButton
              href="/modules"
              variant="outline"
              size="large"
              className="!border-white/20 !text-white hover:!bg-white/10"
            >
              اكتشف الوحدات
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATS BAR — Floating glass card with animated counters
   ═══════════════════════════════════════════════════════════ */
function StatsBar() {
  const stats = [
    { number: 10, suffix: "+", label: "وحدة متكاملة" },
    { number: 7, suffix: "+", label: "قطاع مدعوم" },
    { number: 24, suffix: "/7", label: "دعم محلي" },
    { number: 100, suffix: "%", label: "عراقي الصنع" },
  ];

  return (
    <div className="relative z-10 -mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glarePosition="all"
        glareBorderRadius="0px"
        perspective={1200}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 lg:p-10 shadow-2xl shadow-primary/[0.06] border border-white/20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3, type: "spring", stiffness: 150 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  <Counter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FEATURES — Icon-first cards, no descriptions
   ═══════════════════════════════════════════════════════════ */
function FeaturesSection() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-5">
            لماذا <span className="text-primary">إنجاز</span>؟
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {valuePropositions.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  glareEnable={true}
                  glareMaxOpacity={0.06}
                  glarePosition="all"
                  glareBorderRadius="0px"
                  perspective={1000}
                  scale={1.02}
                >
                  <div className="group relative p-8 lg:p-10 bg-cream border border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/[0.08] transition-all duration-500 cursor-default h-full">
                    {/* 3D depth shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {Icon && (
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500 shadow-[4px_4px_0px_0px_rgba(152,210,8,0.15)]">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <h3 className="relative text-lg font-bold text-charcoal">
                      {item.title}
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SYSTEM VISUALIZATION — 3D floating devices & dashboards
   ═══════════════════════════════════════════════════════════ */
function SystemVisualization() {
  return (
    <section className="py-28 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-primary-light/8 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
            نظام <span className="text-primary-light">متكامل</span> يعمل من كل جهاز
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>

        {/* 3D Device Composition */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Central large laptop */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10"
          >
            <FloatingLaptop delay={0.3} scale={1.1} />
          </motion.div>

          {/* Floating screens around the laptop */}
          <div className="absolute top-[5%] right-[8%] hidden md:block animate-float">
            <FloatingScreen delay={0.6} rotateY={-20} rotateX={8} width={160} height={110}>
              <div className="p-2 h-full flex flex-col gap-1">
                <div className="h-1.5 w-10 bg-primary/30" />
                <div className="flex-1 flex items-end gap-[2px] pb-1">
                  {[50, 70, 40, 85, 60, 75, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.05 }}
                      className="flex-1 bg-primary/30"
                    />
                  ))}
                </div>
              </div>
            </FloatingScreen>
          </div>

          <div className="absolute bottom-[5%] left-[5%] hidden md:block animate-float-slow">
            <FloatingScreen delay={0.9} rotateY={15} rotateX={-5} width={140} height={100}>
              <div className="p-2 h-full flex flex-col gap-1">
                <div className="h-1.5 w-8 bg-primary/25" />
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className={`w-1.5 h-1.5 ${i < 2 ? "bg-primary/40" : "bg-white/10"}`} />
                    <div className="h-1 bg-white/8 flex-1" />
                  </div>
                ))}
              </div>
            </FloatingScreen>
          </div>

          {/* Floating phone */}
          <div className="absolute top-[10%] left-[12%] hidden md:block">
            <FloatingPhone delay={1.1} />
          </div>

          {/* Floating UI cards */}
          <div className="absolute top-[15%] left-[35%] hidden lg:block animate-float-reverse">
            <FloatingUICard delay={1.3} variant="stat" />
          </div>
          <div className="absolute bottom-[10%] right-[25%] hidden lg:block animate-float">
            <FloatingUICard delay={1.5} variant="list" />
          </div>

          {/* 3D Cubes floating */}
          <div className="absolute top-[30%] left-[3%] hidden lg:block">
            <Cube3D size={30} animation="gentle" delay={1.2} opacity={0.3} />
          </div>
          <div className="absolute bottom-[25%] right-[5%] hidden lg:block">
            <Cube3D size={22} animation="float" delay={1.4} opacity={0.2} />
          </div>
          <div className="absolute top-[5%] right-[35%] hidden lg:block">
            <Cube3D size={18} animation="spin" delay={1.6} opacity={0.15} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MISSING PIECE — Visual Tetris puzzle, minimal text
   ═══════════════════════════════════════════════════════════ */
function MissingPieceSection() {
  const problems = missingPiece.problems;

  return (
    <section className="py-28 lg:py-36 bg-mesh overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal leading-tight">
            بدون تكامل...{" "}
            <span className="text-primary">تتفكك الصورة</span>
          </h2>
        </motion.div>

        {/* Problems as scattered angular blocks */}
        <div className="max-w-2xl mx-auto mb-12 perspective-800">
          <div className="grid grid-cols-5 gap-3">
            {problems.map((problem, i) => (
              <motion.div
                key={problem}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: i % 2 === 0 ? -8 : 8,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 130,
                  damping: 12,
                }}
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="aspect-square bg-red-50 border-2 border-red-200/60 flex items-center justify-center p-2 cursor-default shadow-[3px_3px_0px_0px_rgba(239,68,68,0.1)]"
              >
                <span className="text-[11px] sm:text-sm font-bold text-red-400 text-center leading-tight">
                  {problem}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated connector */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center mb-12 origin-top"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-gradient-to-b from-red-300 to-primary" />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
              className="w-4 h-4 bg-primary rotate-45 shadow-lg shadow-primary/30"
            />
          </div>
        </motion.div>

        {/* Solution — sharp 3D box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
          className="max-w-xl mx-auto"
        >
          <Tilt
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            glareEnable={true}
            glareMaxOpacity={0.12}
            glarePosition="all"
            glareBorderRadius="0px"
            perspective={1000}
          >
            <div className="bg-gradient-to-br from-primary via-primary to-primary-dark p-10 text-center shadow-[8px_8px_0px_0px_rgba(122,181,6,0.4)] relative overflow-hidden">
              {/* Decorative angular shapes */}
              <div className="absolute top-3 left-3 w-8 h-8 bg-white/10 rotate-12" />
              <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/5 -rotate-6" />

              <div className="relative">
                <div className="flex justify-center gap-2 mb-5">
                  {[0.2, 0.4, 0.6, 0.8, 1].map((o, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 1.4 + i * 0.08,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="w-3 h-3"
                      style={{ backgroundColor: `rgba(255,255,255,${o})` }}
                    />
                  ))}
                </div>
                <p className="text-xl lg:text-2xl text-white font-bold leading-relaxed">
                  إنجاز ERP = القطعة التي توحد كل شيء
                </p>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MODULES — Dark section, icon grid, no descriptions
   ═══════════════════════════════════════════════════════════ */
function ModulesSection() {
  return (
    <section className="py-28 lg:py-36 bg-charcoal relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 blur-[150px]" />

      {/* Floating 3D elements in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] right-[5%] hidden lg:block">
          <Cube3D size={40} animation="gentle" delay={0.5} opacity={0.12} />
        </div>
        <div className="absolute bottom-[10%] left-[3%] hidden lg:block">
          <Cube3D size={28} animation="float" delay={0.8} opacity={0.1} />
        </div>
        <div className="absolute top-[50%] right-[3%] hidden lg:block animate-float-slow">
          <FloatingUICard delay={1.0} variant="chart" />
        </div>
        <div className="absolute bottom-[8%] right-[15%] hidden lg:block">
          <FloatingKeyboard delay={1.2} scale={0.6} className="opacity-30" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
            وحدات <span className="text-primary-light">متكاملة</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {modules.map((mod, idx) => {
            const Icon = getIcon(mod.icon);
            return (
              <motion.div
                key={mod.title}
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  rotateY: -5,
                  transition: { duration: 0.25 },
                }}
                className="group glass-dark p-6 lg:p-7 text-center cursor-default hover:bg-primary/10 transition-all duration-300 card-3d border border-white/[0.06] relative"
              >
                {/* Small floating cube accent on some cards */}
                {idx % 3 === 0 && (
                  <div className="absolute -top-3 -right-3 pointer-events-none">
                    <Cube3D size={14} animation="gentle" delay={idx * 0.1} opacity={0.3} />
                  </div>
                )}
                {Icon && (
                  <div className="w-14 h-14 bg-primary/12 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(152,210,8,0.1)]">
                    <Icon className="w-7 h-7 text-primary-light" />
                  </div>
                )}
                <h3 className="text-sm font-bold text-white/90">
                  {mod.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connected Modules 3D Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <ConnectedModules delay={0.5} />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INDUSTRIES — Clean icon grid, titles only
   ═══════════════════════════════════════════════════════════ */
function IndustriesSection() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-5">
            قطاعات <span className="text-primary">نخدمها</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {industries.map((industry) => {
            const Icon = getIcon(industry.icon);
            return (
              <motion.div key={industry.title} variants={fadeUp}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable={true}
                  glareMaxOpacity={0.06}
                  glarePosition="all"
                  glareBorderRadius="0px"
                  perspective={800}
                  scale={1.03}
                >
                  <div className="group p-7 bg-cream border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06] text-center transition-all duration-500 cursor-default h-full">
                    {Icon && (
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/12 to-primary/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 shadow-[4px_4px_0px_0px_rgba(152,210,8,0.1)]">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <h3 className="text-base font-bold text-charcoal">
                      {industry.title}
                    </h3>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPARISON — Side-by-side visual cards
   ═══════════════════════════════════════════════════════════ */
function ComparisonSection() {
  return (
    <section className="py-28 lg:py-36 bg-mesh">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-5">
            الفرق <span className="text-primary">واضح</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 perspective-800">
          {/* Generic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 bg-gray-50 border border-gray-200/80"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-slate">
                {comparison.generic.label}
              </h3>
            </div>
            <div className="space-y-4">
              {comparison.generic.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <XCircle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                  <span className="text-muted text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Injaz — 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glarePosition="all"
              glareBorderRadius="0px"
              perspective={1000}
            >
              <div className="p-8 lg:p-10 bg-gradient-to-br from-primary via-primary to-primary-dark text-white relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(122,181,6,0.3)]">
                {/* Angular decorations */}
                <div className="absolute top-4 left-4 w-24 h-24 bg-white/[0.04] rotate-12" />
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/[0.03] -rotate-6" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-white/15 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">
                      {comparison.injaz.label}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {comparison.injaz.points.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-white/90 text-sm">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FAQ — Minimal accordion
   ═══════════════════════════════════════════════════════════ */
function FAQSection() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-5">
            أسئلة <span className="text-primary">شائعة</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent mx-auto" />
        </motion.div>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FINAL CTA — Full dark, dramatic gradient
   ═══════════════════════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-charcoal overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary-light/10 blur-[120px]" />
      </div>

      {/* Floating 3D system elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating laptop — top left */}
        <div className="absolute top-[8%] left-[3%] hidden lg:block opacity-40">
          <FloatingLaptop delay={0.5} scale={0.5} />
        </div>

        {/* Floating keyboard — bottom right */}
        <div className="absolute bottom-[10%] right-[5%] hidden lg:block opacity-30">
          <FloatingKeyboard delay={0.8} scale={0.7} />
        </div>

        {/* Floating phone */}
        <div className="absolute top-[20%] right-[8%] hidden lg:block opacity-40">
          <FloatingPhone delay={1.0} />
        </div>

        {/* Floating UI cards */}
        <div className="absolute bottom-[25%] left-[8%] hidden lg:block animate-float opacity-50">
          <FloatingUICard delay={1.2} variant="notification" />
        </div>
        <div className="absolute top-[55%] right-[18%] hidden lg:block animate-float-slow opacity-40">
          <FloatingUICard delay={1.4} variant="stat" />
        </div>

        {/* 3D Cubes */}
        <div className="absolute top-[15%] left-[30%] hidden lg:block">
          <Cube3D size={25} animation="gentle" delay={0.6} opacity={0.2} />
        </div>
        <div className="absolute bottom-[15%] left-[25%] hidden lg:block">
          <Cube3D size={18} animation="float" delay={0.9} opacity={0.15} />
        </div>
        <div className="absolute top-[40%] right-[35%] hidden lg:block">
          <Cube3D size={15} animation="spin" delay={1.1} opacity={0.12} />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-12"
        >
          مستعد لتكتمل{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-light to-accent animate-gradient">
            الصورة
          </span>
          ؟
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CTAButton
            href="/contact"
            variant="primary"
            size="large"
            className="animate-glow !shadow-xl !shadow-primary/30"
          >
            تحدث مع فريق إنجاز
            <ArrowLeft className="w-5 h-5 mr-2" />
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <SystemVisualization />
      <MissingPieceSection />
      <ModulesSection />
      <IndustriesSection />
      <ComparisonSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
