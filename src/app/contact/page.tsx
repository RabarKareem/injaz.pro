import type { Metadata } from "next";
import { Phone, Mail, Globe, MapPin, Clock, MessageCircle } from "lucide-react";
import Section, { SectionHeader, FadeIn } from "@/components/Section";
import TetrisDivider from "@/components/TetrisDivider";
import FAQAccordion from "@/components/FAQAccordion";
import ContactRequestForm from "@/components/ContactRequestForm";
import { siteConfig, faqItems } from "@/data/content";

export const metadata: Metadata = {
  title: "تواصل معنا | اتصل بفريق إنجاز ERP",
  description:
    "تواصل مع فريق إنجاز ERP للحصول على استشارة مجانية أو عرض تجريبي. هاتف: +9647500221000 | بريد: injaz.erpro@gmail.com. نحن هنا لمساعدتك.",
  keywords: [
    "تواصل مع شركة ERP في العراق",
    "احجز عرض ERP",
    "ERP demo Iraq",
    "ERP consultation Iraq",
    "contact local ERP provider Iraq",
  ],
  alternates: {
    canonical: "https://injaz.pro/contact",
  },
  openGraph: {
    title: "تواصل معنا | إنجاز ERP",
    description:
      "احجز استشارة مجانية أو اطلب عرضاً تجريبياً. فريقنا جاهز لمساعدتك.",
    url: "https://injaz.pro/contact",
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: "الهاتف",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: "اتصل بنا مباشرة للحصول على إجابات فورية",
    dir: "ltr" as const,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "أرسل استفسارك وسنرد عليك سريعاً",
  },
  {
    icon: Globe,
    title: "الموقع",
    value: siteConfig.url.replace("https://", ""),
    href: siteConfig.url,
    description: "تعرف أكثر على المنصة والخدمات",
  },
];

export default function ContactPage() {
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
            تواصل معنا
          </h1>
          <p className="text-xl text-primary font-semibold mb-4">
            نحن هنا لمساعدتك في اتخاذ القرار الأفضل لشركتك
          </p>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            للاستشارة أو العرض التجريبي أو أي استفسار، فريقنا جاهز لمساعدتك.
          </p>
        </div>
      </Section>

      <TetrisDivider />

      {/* Contact Methods */}
      <Section withTexture>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, i) => (
            <FadeIn key={method.title} delay={i * 0.1}>
              <a
                href={method.href}
                className="block p-6 lg:p-8 bg-white  border border-border hover:border-primary/30 transition-all card-premium text-center h-full"
              >
                <div className="w-14 h-14 bg-primary/8  flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {method.title}
                </h3>
                <p
                  className="text-primary font-semibold mb-2"
                  dir={method.dir}
                >
                  {method.value}
                </p>
                <p className="text-sm text-muted leading-7">{method.description}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Contact Form Placeholder */}
        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white  border border-border p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">
                اطلب استشارة مجانية
              </h2>
              <p className="text-muted text-center mb-8">
                اترك بياناتك وسنتواصل معك خلال وقت قصير
              </p>
              <ContactRequestForm />
            </div>
          </div>
        </FadeIn>
      </Section>

      <TetrisDivider variant="dark" flip />

      {/* Additional Info */}
      <Section dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FadeIn>
            <div className="p-6 bg-white/5  border border-white/10 text-center">
              <MessageCircle className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                استشارة مجانية
              </h3>
              <p className="text-sm text-gray-400">
                تحدث مع فريقنا لفهم ما إذا كان إنجاز يناسب شركتك
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="p-6 bg-white/5  border border-white/10 text-center">
              <Clock className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                استجابة سريعة
              </h3>
              <p className="text-sm text-gray-400">
                استجابة أسرع لأن فريق الدعم قريب ومباشر
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-6 bg-white/5  border border-white/10 text-center">
              <MapPin className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                تواجد محلي
              </h3>
              <p className="text-sm text-gray-400">
                العراق — بغداد، أربيل، البصرة، الموصل، وأكثر
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <TetrisDivider flip />

      {/* FAQ */}
      <Section withTetrisPattern>
        <SectionHeader
          title="الأسئلة الشائعة"
          subtitle="أجوبة لأهم الأسئلة حول إنجاز ERP"
        />
        <FAQAccordion items={faqItems.slice(0, 5)} />
      </Section>
    </>
  );
}
