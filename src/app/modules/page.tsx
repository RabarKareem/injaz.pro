import type { Metadata } from "next";
import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ComponentType } from "react";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import TetrisDivider from "@/components/TetrisDivider";
import { modules, modulesSection } from "@/data/modules";

export const metadata: Metadata = {
  title: "وحدات النظام | وحدات إنجاز ERP المتكاملة",
  description:
    "استعرض وحدات إنجاز ERP: المحاسبة والإدارة المالية، المخزون، المبيعات والمشتريات، الموارد البشرية، إدارة العملاء، التصنيع، التقارير، وأكثر. كل ما تحتاجه في مكان واحد.",
  keywords: [
    "وحدات ERP",
    "وحدات المحاسبة والمخزون والمبيعات",
    "ERP modules Iraq",
    "finance inventory sales HR ERP",
    "enterprise modules Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/modules",
  },
  openGraph: {
    title: "وحدات إنجاز ERP | كل ما تحتاجه في مكان واحد",
    description:
      "منصة موحدة تجمع المحاسبة والمخزون والمبيعات والموارد البشرية والتقارير في بيئة واحدة مترابطة.",
    url: "https://injaz.pro/modules",
  },
};

function getIcon(name: string): ComponentType<LucideProps> | null {
  return (LucideIcons as unknown as Record<string, ComponentType<LucideProps>>)[name] ?? null;
}

export default function ModulesPage() {
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
            {modulesSection.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            المحاسبة والمخزون والمبيعات والموارد البشرية والتقارير، كلها ضمن منصة
            واحدة مترابطة.
          </p>
        </div>
      </Section>

      <TetrisDivider />

      {/* Modules Grid */}
      <Section withTexture>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((mod, i) => {
            const Icon = getIcon(mod.icon);
            return (
              <FadeIn key={mod.title} delay={i * 0.06}>
                <div className="p-6 lg:p-8 bg-white  border border-border hover:border-primary/30 transition-all card-premium h-full">
                  <div className="flex items-start gap-5">
                    {Icon && (
                      <div className="w-14 h-14 bg-primary/8  flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-3">
                        {mod.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-muted leading-7">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <TetrisDivider variant="dark" flip />

      {/* Integration Message */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="الأهم من الوحدات... كيف تعمل معاً"
            dark
          />
          <FadeIn>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              الوحدات لا تعمل بشكل منفصل، بل كمنظومة واحدة تمنحك رؤية أفضل وعملاً أسرع.
            </p>
          </FadeIn>

          {/* Visual: connected modules */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-5 gap-2 max-w-md mx-auto mb-10">
              {modules.slice(0, 5).map((mod, i) => {
                const Icon = getIcon(mod.icon);
                return (
                  <div
                    key={mod.title}
                    className="bg-white/10  p-3 text-center border border-white/10"
                  >
                    {Icon && (
                      <Icon className="w-5 h-5 text-primary-light mx-auto mb-1" />
                    )}
                    <span className="text-[10px] text-gray-400 leading-tight block">
                      {mod.title.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-0.5 h-6 bg-primary/40" />
            </div>
            <div className="bg-primary  p-4 max-w-xs mx-auto">
              <span className="text-white font-bold text-sm">
                منصة واحدة متكاملة = قرارات أفضل
              </span>
            </div>
          </FadeIn>
        </div>
      </Section>

      <TetrisDivider flip />

      {/* CTA */}
      <Section withTetrisPattern>
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            title="اكتشف كيف تعمل الوحدات معاً لخدمة شركتك"
          />
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" variant="primary" size="large">
                احجز عرضاً تجريبياً
              </CTAButton>
              <CTAButton href="/contact" variant="outline" size="large">
                تحدث مع فريق إنجاز
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
