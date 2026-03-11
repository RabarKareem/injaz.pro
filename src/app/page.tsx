"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ComponentType, useEffect, useRef, useState } from "react";

import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";
import {
  DashboardLaptop,
} from "@/components/SystemElements";
import {
  comparison,
  faqItems,
  hero,
} from "@/data/content";
import { industries } from "@/data/industries";
import { modules } from "@/data/modules";

function getIcon(name: string): ComponentType<LucideProps> | null {
  return ((LucideIcons as unknown) as Record<string, ComponentType<LucideProps>>)[name] ?? null;
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const timer = window.setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        window.clearInterval(timer);
        return;
      }
      setCount(current);
    }, 40);

    return () => window.clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function SectionKicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`section-kicker ${dark ? "section-kicker-dark" : "section-kicker-light"}`}
    >
      <span className="w-2 h-2 rotate-45 bg-current opacity-70" />
      {children}
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-ledger-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,230,58,0.18),transparent_30%),radial-gradient(circle_at_15%_75%,rgba(152,210,8,0.12),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.75),rgba(15,23,42,1))]" />
      <div className="absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="order-2 text-center lg:order-1 lg:text-right"
          >
            <SectionKicker dark>منصة عراقية مصممة كمنتج محلي حقيقي</SectionKicker>

            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-[5.7rem]">
              القطعة
              <span className="mx-3 inline-block bg-gradient-to-l from-primary-light via-primary to-accent bg-clip-text text-transparent">
                الناقصة
              </span>
              <br />
              <span className="text-white/88">لنجاح أعمالك</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/68 sm:text-lg lg:mr-0">
              نظام ERP عراقي يربط المحاسبة والمخزون والمبيعات والموارد البشرية في
              منصة واحدة أوضح وأسرع وأسهل في الإدارة.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <CTAButton href="/contact" variant="primary" size="large">
                {hero.cta1}
                <ArrowLeft className="mr-2 h-5 w-5" />
              </CTAButton>
              <CTAButton
                href="/modules"
                variant="outline"
                size="large"
                className="!border-white/18 !text-white hover:!bg-white/8"
              >
                استكشف المنصة
              </CTAButton>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-3xl">
              <div className="surface-dark relative overflow-hidden rounded-[2rem] px-4 py-6 sm:px-6 sm:py-8">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-l from-transparent via-primary/60 to-transparent" />
                <DashboardLaptop className="mx-auto w-full max-w-[48rem]" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.45 }}
                className="surface-dark absolute -bottom-5 right-3 max-w-[14rem] rounded-[1.4rem] px-4 py-4 sm:right-8"
              >
                <div className="text-xs text-white/45">نقطة التحول</div>
                <div className="mt-2 text-lg font-bold text-primary-light">من أنظمة متفرقة إلى منصة واحدة</div>
                <div className="mt-3 text-sm leading-6 text-white/62">
                  محاسبة ومخزون ومبيعات وتقارير ضمن تدفق تشغيلي واحد.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.45 }}
                className="surface-panel absolute -left-2 top-6 hidden max-w-[12rem] rounded-[1.4rem] px-4 py-4 text-charcoal lg:block"
              >
                <div className="text-xs text-slate">قراءة تنفيذية</div>
                <div className="mt-2 text-3xl font-bold text-primary">
                  <Counter target={24} suffix="/7" />
                </div>
                <div className="mt-1 text-sm leading-6 text-slate">
                  دعم محلي متاح عندما تحتاجه فعلاً.
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {[
            { value: 10, suffix: "+", label: "وحدة مترابطة" },
            { value: 7, suffix: "+", label: "قطاعات مدعومة" },
            { value: 100, suffix: "%", label: "منطق تشغيلي محلي" },
            { value: 1, suffix: " منصة", label: "مصدر واحد للحقيقة" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index + 0.4, duration: 0.45 }}
              className="surface-dark rounded-[1.5rem] px-5 py-5"
            >
              <div className="text-3xl font-bold text-primary-light sm:text-4xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/56">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    {
      title: "قرار أسرع",
      body: "لوحات أوضح وبيانات لحظية بدل الانتظار بين الأقسام.",
    },
    {
      title: "تشغيل أنظف",
      body: "تقليل التكرار اليدوي وربط المهام اليومية في تدفق واحد.",
    },
    {
      title: "سيطرة أعلى",
      body: "رؤية مالية وتشغيلية أقرب لما يحدث فعلاً داخل الشركة.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(152,210,8,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.72))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-8">
        <div className="text-right">
          <SectionKicker>النتيجة التي يبحث عنها المدير</SectionKicker>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[3.5rem]">
            أقل فوضى في التشغيل
            <span className="text-gradient-primary"> وأكثر وضوحاً </span>
            في القرار
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate sm:text-lg">
            إنجاز لا يجمع الأقسام فقط، بل يجعل الصورة الإدارية أقصر وأوضح: ما الذي
            يحدث، أين المشكلة، وما الذي يجب أن تقرره الآن.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "بيانات موحدة بدل ملفات وجداول متفرقة.",
              "تعاون أسهل بين الإدارة والفرق التنفيذية.",
              "تقارير قابلة للاستخدام، لا مجرد أرقام متراكمة.",
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[1.35rem] border border-primary/12 bg-white/78 px-4 py-4 shadow-[0_20px_45px_rgba(15,23,42,0.04)]"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm leading-7 text-slate sm:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-7 lg:p-8">
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <div>
              <div className="text-sm text-slate">ماذا تكسب فعلياً؟</div>
              <div className="mt-1 text-2xl font-bold text-charcoal">لوحة عمل أسهل في القراءة</div>
            </div>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="mt-6 space-y-4">
            {outcomes.map((item) => (
              <div key={item.title} className="rounded-[1.35rem] border border-border/70 bg-cream px-4 py-4">
                <div className="text-base font-bold text-charcoal">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function ModulesSection() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-right">
            <SectionKicker>الوحدات الأساسية</SectionKicker>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[3.4rem]">
              منصة واحدة
              <span className="text-gradient-primary"> بعدة عقول تشغيلية</span>
            </h2>
          </div>
          <p className="max-w-lg text-right text-base leading-8 text-slate sm:text-lg">
            اختر الوحدة التي تريدها، وافهم سريعاً كيف تعمل داخل المنصة وما الذي
            تضيفه لتشغيل شركتك.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel rounded-[2rem] p-4 sm:p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((module, index) => {
                const Icon = getIcon(module.icon);
                const isActive = index === activeModule;

                return (
                  <button
                    key={module.title}
                    type="button"
                    onClick={() => setActiveModule(index)}
                    className={`rounded-[1.35rem] border px-4 py-4 text-right transition-all duration-300 ${
                      isActive
                        ? "border-primary/25 bg-primary/10 shadow-[0_18px_40px_rgba(152,210,8,0.12)]"
                        : "border-border/70 bg-white hover:border-primary/18 hover:bg-primary/5"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${isActive ? "bg-white" : "bg-cream"}`}>
                        {Icon ? <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-slate"}`} /> : null}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-charcoal sm:text-base">{module.title}</div>
                        <div className="mt-2 line-clamp-2 text-sm leading-6 text-slate">{module.description}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="surface-panel rounded-[2rem] p-3 sm:p-5 w-full">
              <svg
                viewBox="0 0 560 560"
                className="mx-auto w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(152,210,8,0.14)" />
                    <stop offset="100%" stopColor="rgba(152,210,8,0)" />
                  </radialGradient>
                </defs>

                {/* Ambient glow */}
                <circle cx="280" cy="280" r="240" fill="url(#hubGlow)" />

                {/* Orbit ring */}
                <circle cx="280" cy="280" r="200" fill="none" stroke="rgba(152,210,8,0.1)" strokeWidth="1.5" strokeDasharray="6 8" />

                {/* Connecting lines between adjacent nodes */}
                {modules.slice(0, 8).map((_, i) => {
                  const total = 8;
                  const a1 = (i / total) * Math.PI * 2 - Math.PI / 2;
                  const a2 = ((i + 1) % total / total) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <line
                      key={`arc-${i}`}
                      x1={280 + 200 * Math.cos(a1)} y1={280 + 200 * Math.sin(a1)}
                      x2={280 + 200 * Math.cos(a2)} y2={280 + 200 * Math.sin(a2)}
                      stroke={i === activeModule || (i + 1) % total === activeModule ? "rgba(152,210,8,0.45)" : "rgba(152,210,8,0.08)"}
                      strokeWidth={i === activeModule ? 2 : 1}
                    />
                  );
                })}

                {/* Spokes from hub to each node */}
                {modules.slice(0, 8).map((_, i) => {
                  const total = 8;
                  const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <line
                      key={`spoke-${i}`}
                      x1={280} y1={280}
                      x2={280 + 200 * Math.cos(angle)} y2={280 + 200 * Math.sin(angle)}
                      stroke={i === activeModule ? "rgba(152,210,8,0.3)" : "rgba(152,210,8,0.05)"}
                      strokeWidth={1}
                      strokeDasharray={i === activeModule ? "none" : "3 6"}
                    />
                  );
                })}

                {/* Module nodes — rounded boxes */}
                {(() => {
                  const shortLabels = ["المحاسبة", "المخزون", "المبيعات", "الموارد", "العملاء", "التصنيع", "التقارير", "الصلاحيات"];
                  return modules.slice(0, 8).map((mod, i) => {
                    const total = 8;
                    const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
                    const nx = 280 + 200 * Math.cos(angle);
                    const ny = 280 + 200 * Math.sin(angle);
                    const isActive = i === activeModule;
                    const bw = isActive ? 110 : 96;
                    const bh = isActive ? 50 : 44;

                    return (
                      <g key={mod.title} onClick={() => setActiveModule(i)} className="cursor-pointer">
                        {isActive && <rect x={nx - 62} y={ny - 32} width={124} height={64} rx="20" fill="rgba(152,210,8,0.06)" />}
                        <rect
                          x={nx - bw / 2} y={ny - bh / 2}
                          width={bw} height={bh}
                          rx={isActive ? 16 : 13}
                          fill={isActive ? "#1a3006" : "#f8f7f4"}
                          stroke={isActive ? "#98D208" : "rgba(152,210,8,0.18)"}
                          strokeWidth={isActive ? 2.5 : 1.2}
                        />
                        <text
                          x={nx} y={ny + 1}
                          textAnchor="middle" dominantBaseline="central"
                          fill={isActive ? "#b5e63a" : "#3a6a00"}
                          fontSize={isActive ? "13" : "11"}
                          fontWeight="700"
                          fontFamily="inherit"
                        >
                          {shortLabels[i]}
                        </text>
                      </g>
                    );
                  });
                })()}

                {/* Central hub — rounded box with logo */}
                <rect x="248" y="250" width="64" height="60" rx="16" fill="#98D208" />
                <rect x="244" y="246" width="72" height="68" rx="18" fill="none" stroke="rgba(152,210,8,0.35)" strokeWidth="2.5" />
                <image href="/logo.png" x="256" y="256" width="48" height="48" style={{ filter: "brightness(0) invert(1)" }} />

                {/* Animated rotation indicator */}
                <circle cx="280" cy="280" r="200" fill="none" stroke="rgba(152,210,8,0.3)" strokeWidth="2" strokeDasharray="22 1230" strokeLinecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 280 280" to="360 280 280" dur="18s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const currentIndustry = industries[activeIndustry];

  return (
    <section className="relative overflow-hidden bg-charcoal py-20 lg:py-24" dir="rtl">
      <div className="absolute inset-0 bg-ledger-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(181,230,58,0.16),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(152,210,8,0.18),transparent_34%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-10 text-center">
          <SectionKicker dark>القطاعات</SectionKicker>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            يعمل في أي قطاع
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            نظام واحد يتشكل حسب طبيعة عملك: من التشغيل اليومي إلى التحليل واتخاذ القرار.
          </p>
        </div>

        <motion.div
          key={currentIndustry.title}
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto mb-8 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 text-right shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-7"
        >
          <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold tracking-wide text-primary-light/90">القطاع النشط</div>
              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">{currentIndustry.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                {currentIndustry.description}
              </p>
            </div>
            <span className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-bold text-primary-light">
              {String(activeIndustry + 1).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        <div className="relative overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex min-w-max items-center justify-start gap-3 px-2 sm:justify-center sm:gap-4">
          {industries.map((industry, index) => {
            const Icon = getIcon(industry.icon);
            const delta = Math.abs(index - activeIndustry);
            const isActive = index === activeIndustry;
            const scale = isActive ? 1 : delta === 1 ? 0.9 : 0.84;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  scale,
                  y: 0,
                  opacity: isActive ? 1 : 0.78,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className={`group w-[132px] flex-shrink-0 cursor-pointer rounded-2xl border p-3 text-center transition-all sm:w-[150px] ${
                  isActive
                    ? "border-primary/45 bg-primary/12 shadow-[0_20px_50px_rgba(152,210,8,0.2)]"
                    : "border-white/15 bg-white/[0.05]"
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                {Icon && (
                  <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${isActive ? "bg-primary/20" : "bg-white/10"}`}>
                    <Icon className={`h-5 w-5 ${isActive ? "text-primary-light" : "text-white/85"}`} />
                  </div>
                )}
                <span className={`mt-2 block text-xs font-bold leading-6 ${isActive ? "text-white" : "text-white/80"}`}>
                  {industry.title}
                </span>
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const capabilities = [
    { icon: "Building2", title: "متعدد الشركات", desc: "رخصة واحدة لمجموعة شركات تحت نفس المالك" },
    { icon: "GitBranch", title: "متعدد الفروع", desc: "فروع غير محدودة لكل شركة بصلاحيات منفصلة" },
    { icon: "BookOpen", title: "شجرة حسابات مرنة", desc: "دليل حسابات مستقل لكل شركة" },
    { icon: "Workflow", title: "سير عمل إداري", desc: "دورة موافقات لكل مهمة أو مستند أو عملية" },
    { icon: "Settings2", title: "قابل للتخصيص بالكامل", desc: "ليس نظاماً جامداً — كل شيء قابل للتعديل" },
    { icon: "ShieldCheck", title: "صلاحيات دقيقة", desc: "تحكم كامل بمن يرى ويعدّل ويوافق" },
  ];

  return (
    <section className="bg-cream py-16 lg:py-20" dir="rtl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <SectionKicker>بنية المنصة</SectionKicker>
          <h2 className="mt-4 text-2xl font-bold text-charcoal sm:text-3xl">
            منصة مؤسسية، ليست برنامجاً عادياً
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate">
            صُمم إنجاز ليعمل كمنظومة متكاملة تدير مجموعة شركات وفروع متعددة بمرونة كاملة.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = getIcon(cap.icon);
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-sm"
              >
                {Icon && (
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div className="text-right">
                  <div className="text-sm font-bold text-charcoal">{cap.title}</div>
                  <div className="mt-1 text-xs leading-6 text-slate">{cap.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = comparison.generic.points.map((genericPoint, index) => ({
    generic: genericPoint,
    injaz: comparison.injaz.points[index],
  }));

  return (
    <section className="bg-paper py-24 lg:py-32" dir="rtl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-right">
          <SectionKicker>المقارنة</SectionKicker>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[3.2rem]">
            لماذا يبدو
            <span className="text-gradient-primary"> إنجاز أوضح </span>
            من الأنظمة العامة
          </h2>
        </div>

        {/* Column labels */}
        <div className="mb-2 grid grid-cols-2 border-b border-charcoal/10 pb-4">
          <div className="text-right text-xs font-bold uppercase tracking-widest text-charcoal/60">
            {comparison.injaz.label}
          </div>
          <div className="text-left text-xs uppercase tracking-widest text-slate/35">
            {comparison.generic.label}
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="relative grid grid-cols-2 items-center border-b border-charcoal/8 py-7"
          >
            {/* Faded row number watermark */}
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[5.5rem] font-black leading-none text-charcoal/[0.04]">
              {i + 1}
            </span>

            {/* Injaz — bold, large, right */}
            <div className="relative z-10 pr-2 text-right">
              <span className="text-lg font-black leading-snug text-charcoal lg:text-xl">
                {row.injaz}
              </span>
            </div>

            {/* Generic — muted, regular, left */}
            <div className="relative z-10 pl-2 text-left">
              <span className="text-sm font-semibold leading-7 text-slate/60 line-through decoration-slate/30">
                {row.generic}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div className="text-right lg:sticky lg:top-28 lg:self-start">
          <SectionKicker>الأسئلة المتكررة</SectionKicker>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[3.3rem]">
            أسئلة الإدارة قبل
            <span className="text-gradient-primary"> اتخاذ القرار</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate sm:text-lg">
            إجابات قصيرة على أكثر الأسئلة التي تظهر قبل اتخاذ قرار الشراء أو بدء التنفيذ.
          </p>

          <div className="mt-8 rounded-[2rem] border border-primary/18 bg-primary/8 p-6">
            <div className="text-sm font-semibold text-primary-dark">مؤشر الثقة</div>
            <div className="mt-3 text-4xl font-bold text-charcoal">{faqItems.length}</div>
            <div className="mt-2 text-sm leading-7 text-slate">
              إجابات مختصرة على أكثر الأسئلة التي تظهر في اجتماعات الشراء والتنفيذ.
            </div>
          </div>
        </div>

        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.9, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 18 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-7 left-7 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-charcoal shadow-[0_22px_40px_rgba(152,210,8,0.28)] transition-transform duration-300 hover:-translate-y-1"
          aria-label="العودة إلى أعلى الصفحة"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OutcomesSection />
      <ModulesSection />
      <IndustriesSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <FAQSection />
      <ScrollToTop />
    </>
  );
}