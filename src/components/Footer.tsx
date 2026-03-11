import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin, ArrowLeft, ChevronLeft, BadgeCheck } from "lucide-react";
import { navigation, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0 bg-ledger-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,230,58,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(152,210,8,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-xl lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr]">
            <div>
              <Link href="/" className="group mb-6 flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="إنجاز ERP"
                    width={44}
                    height={44}
                    className="h-11 w-11 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-xl font-bold lg:text-2xl">
                  إنجاز <span className="text-primary-light">ERP</span>
                </span>
              </Link>
              <p className="mb-6 max-w-xl text-sm leading-[1.9] text-white/62 lg:text-base">
                منصة عراقية متقدمة لإدارة موارد المؤسسات، صُممت من البداية لتخدم
                واقع السوق العراقي وتربط المحاسبة والمخزون والمبيعات والموارد
                البشرية في مكان واحد.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/68">
                  <MapPin className="w-4 h-4 text-primary-light" />
                  <span>العراق — بغداد، أربيل، البصرة، الموصل</span>
                </div>
                <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/68">
                  <BadgeCheck className="w-4 h-4 text-primary-light" />
                  <span>تنفيذ ودعم مباشر من الفريق المطور</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
                <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                روابط سريعة
              </h3>
              <ul className="space-y-3.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group/link flex items-center gap-2 text-sm text-white/62 transition-colors hover:text-primary-light"
                    >
                      <ChevronLeft className="w-3 h-3 opacity-0 group-hover/link:opacity-100 -translate-x-1 transition-all group-hover/link:translate-x-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
                <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                تواصل معنا
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70 transition-colors hover:border-primary/25 hover:text-primary-light"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="w-4 h-4 text-primary-light" />
                  </div>
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70 transition-colors hover:border-primary/25 hover:text-primary-light"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="w-4 h-4 text-primary-light" />
                  </div>
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`https://${siteConfig.url.replace("https://", "")}`}
                  className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70 transition-colors hover:border-primary/25 hover:text-primary-light"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="w-4 h-4 text-primary-light" />
                  </div>
                  <span>{siteConfig.url.replace("https://", "")}</span>
                </a>
                <Link
                  href="/contact"
                  className="group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-primary-dark"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <span className="relative">احجز استشارة مجانية</span>
                  <ArrowLeft className="relative w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/8 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} إنجاز ERP. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <span>صُنع بفخر في</span>
                <span className="font-medium text-primary-light">العراق</span>
                <span className="mr-2 inline-flex gap-0.5">
                  <span className="h-2 w-2 bg-primary" />
                  <span className="h-2 w-2 bg-primary/60" />
                  <span className="h-2 w-2 bg-primary/30" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
