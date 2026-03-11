import type { Metadata } from "next";
import { Settings, Clock, Users, Lightbulb, Rocket, CheckCircle } from "lucide-react";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import TetrisDivider from "@/components/TetrisDivider";

export const metadata: Metadata = {
  title: "التنفيذ والتخصيص | تنفيذ إنجاز ERP في شركتك",
  description:
    "تعرف على كيفية تنفيذ وتخصيص إنجاز ERP في شركتك. عملية سلسة وسريعة مع دعم مباشر من الفريق المطور — من التحليل إلى الإطلاق والتطوير المستمر.",
  keywords: [
    "تنفيذ ERP في العراق",
    "تخصيص ERP للشركات العراقية",
    "ERP implementation Iraq",
    "custom ERP implementation",
    "ERP deployment and training Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/implementation",
  },
  openGraph: {
    title: "التنفيذ والتخصيص | إنجاز ERP",
    description:
      "عملية تنفيذ سلسة مع دعم مباشر من المطور — تخصيص أسرع، مرونة أعلى، ونتائج أفضل.",
    url: "https://injaz.pro/implementation",
  },
};

const steps = [
  {
    icon: Lightbulb,
    title: "التحليل والفهم",
    description:
      "نبدأ بفهم طبيعة عملك واحتياجاتك قبل أي إعداد أو تنفيذ.",
    number: "١",
  },
  {
    icon: Settings,
    title: "التخصيص والتهيئة",
    description:
      "نهيئ النظام ليتوافق مع الحسابات وسير العمل والصلاحيات داخل شركتك.",
    number: "٢",
  },
  {
    icon: Users,
    title: "التدريب والتأهيل",
    description:
      "ندرب فريقك عملياً مع دعم مباشر خلال الانتقال للنظام.",
    number: "٣",
  },
  {
    icon: Rocket,
    title: "الإطلاق والمتابعة",
    description:
      "نطلق النظام مع متابعة دقيقة لمعالجة الملاحظات بسرعة.",
    number: "٤",
  },
  {
    icon: Clock,
    title: "التطوير المستمر",
    description:
      "نواصل التطوير بعد الإطلاق بحسب احتياجات التشغيل الفعلية.",
    number: "٥",
  },
];

const benefits = [
  "تنفيذ أسرع بفضل القرب المحلي",
  "تخصيص مبني على فهم حقيقي لعملك",
  "تدريب بلغتك وحسب واقع شركتك",
  "دعم مباشر خلال كل مرحلة",
  "لا حاجة لوسطاء أو شركات تنفيذ خارجية",
  "تطوير مستمر بعد الإطلاق",
];

export default function ImplementationPage() {
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
            التنفيذ والتخصيص
          </h1>
          <p className="text-xl text-primary font-semibold mb-4">
            عملية سلسة وسريعة مع دعم مباشر من الفريق المطور
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            نعمل معك خطوة بخطوة من التحليل إلى الإطلاق، مع تخصيص وتدريب ومتابعة
            مباشرة.
          </p>
        </div>
      </Section>

      <TetrisDivider />

      {/* Steps */}
      <Section withTexture>
        <SectionHeader
          title="كيف نعمل معك"
          subtitle="خمس خطوات واضحة من الفهم إلى التشغيل والتطوير المستمر"
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="flex items-start gap-6 p-6 lg:p-8 bg-white  border border-border hover:border-primary/30 transition-all card-premium">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary  flex items-center justify-center text-charcoal text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <TetrisDivider variant="dark" flip />

      {/* Benefits */}
      <Section dark>
        <SectionHeader
          title="لماذا التنفيذ مع إنجاز أسرع وأكثر فعالية؟"
          dark
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit} delay={i * 0.08}>
              <div className="flex items-start gap-3 p-5 bg-white/5  border border-white/10">
                <CheckCircle className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-200 text-sm leading-relaxed">
                  {benefit}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <TetrisDivider flip />

      {/* CTA */}
      <Section className="!py-20 lg:!py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-6 right-6 flex gap-1.5 opacity-20">
          <div className="w-5 h-5 bg-white " />
          <div className="w-5 h-5 bg-white " />
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              مستعد لبدء رحلة التحول؟
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-white/85 mb-10">
              تحدث مع فريقنا اليوم لنفهم احتياجات شركتك ونبدأ معاً
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="dark" size="large">
                ابدأ التحول اليوم
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
                size="large"
                className="!border-white !text-white hover:!bg-white hover:!text-charcoal"
              >
                احجز استشارة مجانية
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
