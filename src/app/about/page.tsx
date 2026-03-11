import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, MapPin } from "lucide-react";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import TetrisDivider from "@/components/TetrisDivider";

export const metadata: Metadata = {
  title: "عن الشركة | شركة إنجاز ERP العراقية",
  description:
    "تعرف على إنجاز ERP المطور من شركة جياساز Jiasaz: خبرة تتجاوز 12 سنة، خبرات محلية مع بحث مستمر في السوق، وحلول مضمونة وليست مجرد بيع برنامج.",
  keywords: [
    "شركة ERP عراقية",
    "Jiasaz",
    "Injaz ERP company",
    "local ERP experts Iraq",
    "enterprise software company Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/about",
  },
  openGraph: {
    title: "عن شركة إنجاز ERP",
    description:
      "إنجاز ERP حل مطور من شركة جياساز بخبرة تتجاوز 12 سنة لخدمة القطاعات العراقية بحلول مضمونة.",
    url: "https://injaz.pro/about",
  },
};

const values = [
  {
    icon: Target,
    title: "الملاءمة",
    description:
      "نصمم حلولنا لتناسب واقع السوق العراقي، لا لتكون نسخة معربة من حل عالمي.",
  },
  {
    icon: Eye,
    title: "الشفافية",
    description:
      "نتحدث مع عملائنا بوضوح ونبني علاقات مبنية على الثقة والصراحة.",
  },
  {
    icon: Heart,
    title: "الالتزام",
    description:
      "نلتزم بدعم عملائنا وتطوير منصتنا باستمرار لتواكب نمو أعمالهم.",
  },
  {
    icon: MapPin,
    title: "المحلية",
    description:
      "نؤمن أن المنتج المحلي خيار أقوى، وأن القرب يصنع فرقاً حقيقياً.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-28 lg:pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div className="flex items-center gap-1.5 mb-6">
                <span className="w-3 h-3 bg-primary  rotate-45" />
                <span className="w-2 h-2 bg-primary/60  rotate-45" />
                <span className="w-1.5 h-1.5 bg-primary/30  rotate-45" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
                عن إنجاز <span className="text-primary">ERP</span>
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                خبرة تتجاوز 12 سنة في حلول ERP للقطاعات العراقية
              </p>
              <p className="text-lg text-muted leading-relaxed">
                نحن لا نبيع مجرد منتج برمجي، بل نقدم حلاً مضمونا يحقق نتيجة
                تشغيلية ومالية واضحة لعملائنا.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <div className="bg-charcoal  p-10 lg:p-14 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-1 opacity-30">
                <div className="w-4 h-4 bg-primary " />
                <div className="w-4 h-4 bg-primary " />
              </div>
              <div className="absolute bottom-4 right-4 flex flex-col gap-1 opacity-30">
                <div className="w-4 h-4 bg-primary " />
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-primary " />
                  <div className="w-4 h-4 bg-primary " />
                </div>
              </div>
              <Image
                src="/logo.png"
                alt="إنجاز ERP"
                width={180}
                height={180}
                className="w-32 h-32 lg:w-44 lg:h-44"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <TetrisDivider />

      {/* Mission */}
      <Section withTexture>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="رسالتنا"
            subtitle="تمكين الشركات العراقية بنظام إدارة متقدم يفهم واقعها ويخدم نموها"
          />
          <FadeIn>
            <div className="bg-white  border border-border p-8 lg:p-12">
              <p className="text-lg text-charcoal leading-loose">
                يعمل فريقنا بخبرات محلية متخصصة مع بحث مستمر في السوق لفهم
                المتغيرات الفعلية في القطاعات المستهدفة: التصنيع، التجارة
                العامة، الأدوية والصيدلة، الأغذية والمشروبات، الأعمال الخدمية،
                والأتمتة. لذلك يأتي إنجاز ERP كحل مضمون مبني على واقع عملك، لا
                على افتراضات عامة.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <TetrisDivider variant="dark" flip />

      {/* Values */}
      <Section dark>
        <SectionHeader title="قيمنا" dark />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="p-6 bg-white/5  border border-white/10 text-center h-full">
                <div className="w-14 h-14 bg-primary/20  flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-400 leading-7">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <TetrisDivider flip />

      {/* Experience & Credibility */}
      <Section withTetrisPattern>
        <SectionHeader
          title="خبرة ميدانية وحلول مضمونة"
          subtitle="نركز على النتيجة الفعلية للعميل، وليس فقط بيع برنامج"
        />
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "أكثر من 12 سنة خبرة في مشاريع وأنظمة الأعمال",
              "خبرات محلية متخصصة مع بحث مستمر في السوق العراقي",
              "خبرة عملية في قطاعات التصنيع والتجارة والخدمات",
              "تركيزنا: بيع حل مضمون قابل للقياس، لا بيع منتج فقط",
              "التطوير والتنفيذ يتمان بمنهجية واضحة من التحليل حتى التشغيل",
              "استمرارية تحسين الحل حسب تغير السوق واحتياج العميل",
            ].map((point) => (
              <div key={point} className="bg-white px-5 py-4 border border-border shadow-sm text-right">
                <div className="flex items-start gap-3">
                  <span className="mt-1 block h-2.5 w-2.5 rotate-45 bg-primary" />
                  <p className="text-sm leading-7 text-charcoal">{point}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-charcoal text-white p-7 lg:p-9 border border-charcoal/70 text-right">
            <h3 className="text-xl font-bold text-primary-light mb-3">من يقف خلف إنجاز ERP؟</h3>
            <p className="text-sm leading-8 text-white/85">
              إنجاز ERP مطور من قبل شركة <strong>Jiasaz (جياساز)</strong>،
              شركة تقنية <strong>مؤسسة منذ 2015</strong> و<strong>مسجلة
              رسميا</strong>. يمكنك الاطلاع على الشركة عبر
              {" "}
              <a href="https://jiasaz.com" target="_blank" rel="noreferrer" className="text-primary-light underline underline-offset-4 hover:text-primary">
                jiasaz.com
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

    </>
  );
}
