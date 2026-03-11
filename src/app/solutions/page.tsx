import type { Metadata } from "next";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import PremiumCard from "@/components/PremiumCard";
import CTAButton from "@/components/CTAButton";
import TetrisDivider from "@/components/TetrisDivider";
import { industries, industriesSection } from "@/data/industries";

export const metadata: Metadata = {
  title: "القطاعات والحلول | إنجاز ERP للقطاعات العراقية",
  description:
    "إنجاز ERP يخدم قطاعات متعددة: التصنيع، التجارة العامة، الأدوية والصيدلة، الأغذية والمشروبات، الأعمال الخدمية، والأتمتة. حلول مرنة تتكيف مع طبيعة نشاطك في العراق.",
  keywords: [
    "ERP للقطاعات في العراق",
    "حلول ERP للمصانع في العراق",
    "custom ERP Iraq",
    "enterprise solutions Iraq",
    "ERP for manufacturing Iraq",
    "ERP for pharma Iraq",
    "ERP for trading companies Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/solutions",
  },
  openGraph: {
    title: "القطاعات والحلول | إنجاز ERP",
    description:
      "حلول ERP مرنة لقطاعات متعددة في العراق — التصنيع، التجارة، الأدوية، الأغذية، والخدمات.",
    url: "https://injaz.pro/solutions",
  },
};

const detailedIndustries = [
  {
    ...industries[0],
    details: [
      "إدارة خطوط الإنتاج وأوامر التصنيع",
      "رقابة على المواد الخام والتكاليف",
      "ربط مباشر بالمخزون والمبيعات",
      "تقارير إنتاج تفصيلية",
      "جدولة وتخطيط الإنتاج",
    ],
  },
  {
    ...industries[1],
    details: [
      "إدارة المبيعات والمشتريات بشكل متكامل",
      "رقابة شاملة على المخزون والمستودعات",
      "نظام فواتير مرن ومتوافق",
      "تقارير ربحية حسب المنتج والعميل",
      "إدارة شبكة التوزيع والعملاء",
    ],
  },
  {
    ...industries[2],
    details: [
      "إدارة مخزون دوائي متقدمة",
      "متابعة تواريخ الصلاحية والأرقام التسلسلية",
      "تقارير دقيقة للقطاع الصيدلاني",
      "إدارة التوزيع والتسعير",
      "ربط مع نظام المبيعات والمحاسبة",
    ],
  },
  {
    ...industries[3],
    details: [
      "رقابة على جودة الإنتاج",
      "إدارة تكاليف متقدمة",
      "متابعة المواد الخام والتعبئة",
      "تقارير الإنتاج والاستهلاك",
      "إدارة سلسلة التوريد",
    ],
  },
  {
    ...industries[4],
    details: [
      "إدارة المشاريع والعقود",
      "متابعة فرق العمل والمهام",
      "نظام فواتير مرن للخدمات",
      "تقارير أداء وربحية المشاريع",
      "إدارة العملاء والعلاقات",
    ],
  },
  {
    ...industries[5],
    details: [
      "أتمتة العمليات المتكررة",
      "ربط الأنظمة المختلفة",
      "تقليل العمل اليدوي",
      "رفع كفاءة التشغيل",
      "تقارير أداء العمليات",
    ],
  },
  {
    ...industries[6],
    details: [
      "بنية مرنة وقابلة للتخصيص",
      "تتكيف مع أي نوع من الأعمال",
      "وحدات قابلة للتوسع",
      "دعم مباشر في التنفيذ",
      "تخصيص حسب متطلبات القطاع",
    ],
  },
];

export default function SolutionsPage() {
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
            {industriesSection.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            إنجاز يتكيّف مع التصنيع والتجارة والأدوية والأغذية والخدمات وغيرها
            عبر منصة مرنة قابلة للتخصيص.
          </p>
        </div>
      </Section>

      <TetrisDivider />

      {/* Industries Overview */}
      <Section withTexture>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {industries.map((industry, i) => (
            <PremiumCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              index={i}
            />
          ))}
        </div>
      </Section>

      <TetrisDivider variant="dark" flip />

      {/* Detailed Industry Sections */}
      {detailedIndustries.map((industry, i) => (
        <div key={industry.title}>
          <Section dark={i % 2 === 0} withTetrisPattern={i % 2 !== 0}>
            <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <FadeIn>
                <div>
                  <SectionHeader
                    title={industry.title}
                    subtitle={industry.description}
                    centered={false}
                    dark={i % 2 === 0}
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-3">
                  {industry.details.slice(0, 3).map((detail, j) => (
                    <div
                      key={j}
                      className={`flex items-start gap-3 p-3  ${
                        i % 2 === 0
                          ? "bg-white/5 border border-white/10"
                          : "bg-white border border-border"
                      }`}
                    >
                      <div className="w-5 h-5 bg-primary  flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">
                          {j + 1}
                        </span>
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          i % 2 === 0 ? "text-gray-300" : "text-charcoal"
                        }`}
                      >
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Section>
          {i < detailedIndustries.length - 1 && (
            <TetrisDivider variant={i % 2 === 0 ? "default" : "dark"} flip={i % 2 !== 0} />
          )}
        </div>
      ))}

      {/* CTA */}
      <Section className="!py-20 lg:!py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-6 right-6 flex gap-1.5 opacity-20">
          <div className="w-5 h-5 bg-white " />
          <div className="w-5 h-5 bg-white " />
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              اكتشف كيف يناسب إنجاز ERP قطاعك
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-white/85 mb-10">
              تحدث مع فريقنا لنحدد القطاع والوحدات الأنسب لشركتك
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="dark" size="large">
                احجز استشارة مجانية
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
                size="large"
                className="!border-white !text-white hover:!bg-white hover:!text-charcoal"
              >
                اطلب عرضاً تجريبياً
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
