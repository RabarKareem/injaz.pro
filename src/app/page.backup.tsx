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

import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";

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
   HERO — Full dark, gradient orbs, floating Tetris shapes
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
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[140px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-light/15 blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px]" />
      </div>

      {/* Floating Tetris shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* L-shape top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="absolute top-[12%] right-[8%] animate-float"
        >
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-primary rounded-xl" />
            <div className="w-12 h-12 bg-primary rounded-xl" />
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-12 h-12 bg-primary rounded-xl" />
          </div>
        </motion.div>

        {/* T-shape bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="absolute bottom-[18%] left-[6%] animate-float-slow"
        >
          <div className="flex gap-1.5 justify-center">
            <div className="w-9 h-9 bg-primary-light rounded-lg" />
          </div>
          <div className="flex gap-1.5 mt-1.5">
            <div className="w-9 h-9 bg-primary-light rounded-lg" />
            <div className="w-9 h-9 bg-primary-light rounded-lg" />
            <div className="w-9 h-9 bg-primary-light rounded-lg" />
          </div>
        </motion.div>

        {/* Square center-left */}
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 0.06, rotate: 45 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-[38%] left-[12%] animate-float-reverse"
        >
          <div className="w-20 h-20 bg-accent rounded-2xl" />
        </motion.div>

        {/* I-shape right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-[32%] right-[12%] animate-float-slow"
        >
          <div className="flex gap-1.5">
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <div className="w-8 h-8 bg-primary rounded-lg" />
          </div>
        </motion.div>

        {/* Small dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.8 }}
          className="absolute top-[60%] right-[30%] w-3 h-3 bg-primary rounded-full animate-float"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.1 }}
          className="absolute top-[25%] left-[35%] w-4 h-4 bg-accent rounded-full animate-float-reverse"
        />
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
            className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 lg:p-10 shadow-2xl shadow-primary/[0.06]"
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
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent rounded-full mx-auto" />
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
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative p-8 lg:p-10 rounded-3xl bg-cream border border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/[0.08] transition-all duration-500 cursor-default"
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {Icon && (
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                )}
                <h3 className="relative text-lg font-bold text-charcoal">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
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

        {/* Problems as scattered blocks */}
        <div className="max-w-2xl mx-auto mb-12">
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
                className="aspect-square rounded-2xl bg-red-50 border-2 border-red-200/60 flex items-center justify-center p-2 cursor-default"
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
              className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/30"
            />
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary via-primary to-primary-dark rounded-3xl p-10 text-center shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Decorative shapes inside */}
            <div className="absolute top-3 left-3 w-8 h-8 bg-white/10 rounded-xl rotate-12" />
            <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/5 rounded-xl -rotate-6" />

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
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: `rgba(255,255,255,${o})` }}
                  />
                ))}
              </div>
              <p className="text-xl lg:text-2xl text-white font-bold leading-relaxed">
                إنجاز ERP = القطعة التي توحد كل شيء
              </p>
            </div>
          </div>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

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
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {modules.map((mod) => {
            const Icon = getIcon(mod.icon);
            return (
              <motion.div
                key={mod.title}
                variants={fadeUp}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.25 },
                }}
                className="group glass-dark rounded-2xl p-6 lg:p-7 text-center cursor-default hover:bg-primary/10 transition-all duration-300"
              >
                {Icon && (
                  <div className="w-14 h-14 bg-primary/12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
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
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent rounded-full mx-auto" />
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
              <motion.div
                key={industry.title}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-7 rounded-3xl bg-cream border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06] text-center transition-all duration-500 cursor-default"
              >
                {Icon && (
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/12 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                )}
                <h3 className="text-base font-bold text-charcoal">
                  {industry.title}
                </h3>
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
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Generic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-10 rounded-3xl bg-gray-50 border border-gray-200/80"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-2xl flex items-center justify-center">
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

          {/* Injaz */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark text-white relative overflow-hidden shadow-2xl shadow-primary/20"
          >
            {/* Decorative */}
            <div className="absolute top-4 left-4 w-24 h-24 bg-white/[0.04] rounded-3xl rotate-12" />
            <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/[0.03] rounded-2xl -rotate-6" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center">
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
          <div className="w-20 h-1 bg-gradient-to-l from-primary to-accent rounded-full mx-auto" />
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
      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary-light/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-6 h-6 bg-primary/20 rounded-lg animate-float" />
        <div className="absolute top-[60%] left-[8%] w-4 h-4 bg-accent/15 rounded animate-float-slow" />
        <div className="absolute bottom-[15%] right-[20%] w-8 h-8 bg-primary-light/10 rounded-lg rotate-45 animate-float-reverse" />
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
      <MissingPieceSection />
      <ModulesSection />
      <IndustriesSection />
      <ComparisonSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
