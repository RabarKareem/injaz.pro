import type { Metadata } from "next";
import {
  Handshake,
  Zap,
  ShieldCheck,
  TrendingUp,
  Globe,
  MapPin,
} from "lucide-react";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import TetrisDivider from "@/components/TetrisDivider";
import {
  localVsGeneric,
  trustSection,
} from "@/data/content";

export const metadata: Metadata = {
  title: "لماذا إنجاز ERP | لماذا تختار نظام ERP محلي عراقي",
  description:
    "اكتشف لماذا إنجاز ERP هو الخيار الأذكى للشركات العراقية. نظام محلي متقدم بدعم مباشر وتخصيص أسرع وتكلفة أذكى — بديل أقوى من الأنظمة العالمية العامة.",
  keywords: [
    "لماذا إنجاز ERP",
    "بديل Odoo في العراق",
    "بديل ERPNext في العراق",
    "ERP محلي في العراق",
    "local ERP Iraq",
    "Odoo alternative Iraq",
    "ERPNext alternative Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/why-injaz",
  },
  openGraph: {
    title: "لماذا إنجاز ERP | الخيار الأذكى للشركات العراقية",
    description:
      "لسنا بديلاً محلياً أقل من الأنظمة العالمية، بل خياراً أكثر ذكاءً وقرباً وملاءمة.",
    url: "https://injaz.pro/why-injaz",
  },
};

const advantages = [
  {
    icon: MapPin,
    title: "مصمم للسوق العراقي من الأساس",
    description:
      "بُني من البداية حول احتياجات الشركات العراقية ومتطلباتها اليومية.",
  },
  {
    icon: Handshake,
    title: "دعم مباشر من الشركة المطورة",
    description:
      "تتحدث مباشرة مع الفريق الذي بنى النظام، بدون وسطاء أو انتظار طويل.",
  },
  {
    icon: Zap,
    title: "تخصيص أسرع ومرونة أعلى",
    description:
      "القرب والفهم المحلي يجعلان التخصيص أسرع وأكثر دقة.",
  },
  {
    icon: TrendingUp,
    title: "استثمار أذكى وأكثر استدامة",
    description:
      "تكلفة أوضح وقيمة أعلى بدون أعباء لا تخدم عملك فعلاً.",
  },
  {
    icon: ShieldCheck,
    title: "منصة موحدة تربط كل العمليات",
    description:
      "منصة واحدة تجمع أقسام شركتك بدل الأنظمة والملفات المتفرقة.",
  },
  {
    icon: Globe,
    title: "ليس أقل من المنتج الأجنبي",
    description:
      "حل محلي بمرونة واستجابة تجعله أكثر ملاءمة في حالات كثيرة.",
  },
];

const comparisonPoints = [
  { injaz: "مصمم لسوقك تحديداً", generic: "مصمم لكل الأسواق في آن واحد" },
  { injaz: "دعم مباشر من الفريق المطوّر", generic: "دعم بعيد أو عبر وسيط" },
  { injaz: "تخصيص سريع وأقل تكلفة", generic: "كل تعديل يستغرق وقتاً وميزانية" },
  { injaz: "استثمار بقيمة حقيقية", generic: "أسعار تشمل ما لا تحتاجه" },
  { injaz: "يتطور مع السوق العراقي", generic: "يتطور وفق أولويات عالمية" },
];

export default function WhyInjazPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-28 lg:pt-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1.5 mb-6">
            <span className="w-3 h-3 bg-primary  rotate-45" />
            <span className="w-2 h-2 bg-primary/60  rotate-45" />
            <span className="w-1.5 h-1.5 bg-primary/30  rotate-45" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
            لماذا إنجاز <span className="text-primary">ERP</span>؟
          </h1>
          <p className="text-xl text-primary font-semibold mb-4">
            لسنا بديلاً محلياً أقل من الأنظمة العالمية، بل خياراً أكثر ذكاءً
            وقرباً وملاءمة
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            إنجاز ERP منصة عراقية متقدمة صُممت لتكون أقرب إلى سوقك، أسرع في
            التنفيذ، وأوضح في القيمة من الحلول العامة.
          </p>
        </div>
      </Section>

      <TetrisDivider />

      {/* Advantages Grid */}
      <Section withTexture>
        <SectionHeader
          title="ما الذي يجعل إنجاز ERP الخيار الأذكى؟"
          subtitle="ستة أسباب تجعل أصحاب الأعمال في العراق يختارون إنجاز"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="p-6 lg:p-8 bg-white  border border-border hover:border-primary/30 transition-all card-premium h-full">
                <div className="w-12 h-12 bg-primary/8  flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <TetrisDivider />

      {/* Local vs Global Comparison */}
      <Section withTexture>
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-kicker section-kicker-light mb-4 inline-flex">المقارنة</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-3">
            لماذا يبدو إنجاز أوضح من الأنظمة العامة؟
          </h2>
          <p className="text-slate/60 text-sm max-w-md mx-auto leading-8">
            مقارنة مختصرة بين نظام صُمم لسوقك وآخر صُمم للجميع
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Column labels */}
          <div className="grid grid-cols-[1fr_1px_1fr] mb-1" dir="rtl">
            <div className="text-right pb-5">
              <span className="text-xs font-bold text-charcoal/60 uppercase tracking-widest">إنجاز ERP</span>
            </div>
            <div />
            <div className="text-left pb-5">
              <span className="text-xs text-slate/35 uppercase tracking-widest">الأنظمة العامة</span>
            </div>
          </div>

          {/* Rows */}
          {comparisonPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                className="grid grid-cols-[1fr_1px_1fr] border-t border-charcoal/10 py-6 items-center relative"
                dir="rtl"
              >
                <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[5rem] font-black leading-none text-charcoal/[0.04]">
                  {i + 1}
                </span>
                <div className="relative z-10 text-right pl-8">
                  <span className="text-base lg:text-lg font-black text-charcoal leading-snug">
                    {point.injaz}
                  </span>
                </div>
                <div className="self-stretch bg-charcoal/10" />
                <div className="relative z-10 text-left pr-8">
                  <span className="text-sm text-slate/40 font-normal leading-relaxed line-through decoration-slate/20">
                    {point.generic}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Conclusion */}
          <FadeIn delay={0.45}>
            <p className="mt-10 text-center text-slate/70 text-sm leading-8 max-w-2xl mx-auto border-t border-charcoal/12 pt-8">
              {localVsGeneric.conclusion}
            </p>
          </FadeIn>
        </div>
      </Section>

      <TetrisDivider flip />

      {/* Trust Statement */}
      <Section withTetrisPattern>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title={trustSection.title} />
          <div className="space-y-3 mb-8">
            {trustSection.points.map((point, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <p className="text-xl lg:text-2xl text-charcoal font-medium">
                  {point}
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <p className="text-muted text-base leading-8 border-t border-border pt-8 mb-10 max-w-2xl mx-auto">
              {trustSection.conclusion}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="primary" size="large">
                تحدث مع فريق إنجاز
              </CTAButton>
              <CTAButton href="/contact" variant="outline" size="large">
                احجز استشارة مجانية
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
