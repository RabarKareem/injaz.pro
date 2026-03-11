import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqItems } from "@/data/content";

const GA_ID = "G-DB280NGQB5";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://injaz.pro"),
  title: {
    default: "إنجاز ERP | نظام إدارة موارد المؤسسات الأول في العراق",
    template: "%s | إنجاز ERP",
  },
  description:
    "إنجاز ERP — نظام إدارة موارد مؤسسات عراقي متقدم يربط المحاسبة والمخزون والمبيعات والموارد البشرية في منصة واحدة. صُمم للسوق العراقي بدعم محلي مباشر وتكلفة أذكى.",
  keywords: [
    "نظام ERP في العراق",
    "أفضل نظام ERP عراقي",
    "برنامج ERP للشركات العراقية",
    "نظام إدارة موارد المؤسسات العراق",
    "برنامج محاسبة ومخازن ورواتب العراق",
    "ERP محلي في العراق",
    "بديل Odoo في العراق",
    "برنامج إدارة شامل للشركات العراقية",
    "نظام ERP للمصانع في العراق",
    "بديل ERPNext في العراق",
    "حلول ERP مخصصة في العراق",
    "حلول مؤسسية للشركات العراقية",
    "ERP for Iraq",
    "local ERP Iraq",
    "best ERP in Iraq",
    "Odoo alternative Iraq",
    "ERPNext alternative Iraq",
    "custom ERP Iraq",
    "enterprise ERP solutions Iraq",
    "إنجاز ERP",
  ],
  authors: [{ name: "إنجاز ERP" }],
  creator: "إنجاز ERP",
  openGraph: {
    type: "website",
    locale: "ar_IQ",
    url: "https://injaz.pro",
    siteName: "إنجاز ERP",
    title: "إنجاز ERP | القطعة الناقصة لنجاح أعمالك",
    description:
      "نظام ERP عراقي متقدم صُمم لواقعك. منصة متكاملة تربط أقسام شركتك بدعم محلي مباشر وتكلفة أذكى.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "إنجاز ERP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "إنجاز ERP | القطعة الناقصة لنجاح أعمالك",
    description:
      "نظام ERP عراقي متقدم صُمم لواقعك. منصة متكاملة تربط أقسام شركتك بدعم محلي مباشر.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://injaz.pro",
    languages: {
      "ar-IQ": "https://injaz.pro",
      "x-default": "https://injaz.pro",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "إنجاز ERP",
                alternateName: "Injaz ERP",
                url: "https://injaz.pro",
                logo: "https://injaz.pro/logo.png",
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+9647500221000",
                    contactType: "sales",
                    areaServed: "IQ",
                    availableLanguage: ["ar", "en"],
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Injaz ERP",
                url: "https://injaz.pro",
                inLanguage: "ar-IQ",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "إنجاز ERP",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description:
                  "نظام إدارة موارد مؤسسات عراقي متقدم يربط المحاسبة والمخزون والمبيعات والموارد البشرية في منصة واحدة.",
                url: "https://injaz.pro",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "USD",
                  price: "0",
                  description: "Custom quotation based on scope",
                },
                provider: {
                  "@type": "Organization",
                  name: "Jiasaz",
                  url: "https://jiasaz.com",
                  foundingDate: "2015",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.slice(0, 8).map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              },
            ]),
          }}
        />
      </head>
      <body className={`${ibmPlexArabic.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
