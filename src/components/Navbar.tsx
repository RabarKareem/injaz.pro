"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowLeft } from "lucide-react";
import { navigation, siteConfig } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navItems = navigation.filter((item) => item.href !== "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !isOpen;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-500 ${
            transparent
              ? "border border-white/10 bg-white/6 backdrop-blur-xl"
              : "border border-white/60 bg-white/85 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          } rounded-full px-4 sm:px-5`}
        >
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[74px]">
            <Link href="/" className="group flex flex-shrink-0 items-center gap-3">
              <div className="relative">
              <Image
                src="/logo.png"
                alt="إنجاز ERP"
                width={44}
                height={44}
                className="h-10 w-10 transition-transform duration-500 group-hover:scale-105 lg:h-11 lg:w-11"
                priority
              />
              <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 lg:text-2xl ${
                transparent ? "text-white" : "text-charcoal"
              }`}
            >
              إنجاز <span className="text-primary-light">ERP</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/8 px-2 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    transparent
                      ? isActive
                        ? "text-primary-light"
                        : "text-white/78 hover:text-white"
                      : isActive
                        ? "text-primary"
                        : "text-slate hover:text-charcoal"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute inset-0 rounded-full ${transparent ? "bg-white" : "bg-primary/10 border border-primary/20"}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <span className={`absolute inset-0 rounded-full ${transparent ? "bg-white/[0.08]" : "bg-primary/[0.05]"} scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100`} />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className={`group flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-all duration-300 ${
                transparent
                  ? "text-white/70 hover:bg-white/8 hover:text-white"
                  : "text-muted hover:bg-primary/6 hover:text-primary"
              }`}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${transparent ? "bg-white/[0.08] group-hover:bg-white/[0.15]" : "bg-primary/8 group-hover:bg-primary/15"}`}>
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span dir="ltr" className="font-medium">{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="relative overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-charcoal shadow-[0_18px_36px_rgba(152,210,8,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                احجز عرضاً تجريبياً
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              transparent ? "text-white" : "text-charcoal hover:text-primary"
            }`}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            className="mx-4 mt-3 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/95 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl lg:hidden sm:mx-6 lg:mx-8"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-[1.1rem] px-4 py-3.5 text-base font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-primary/8 text-primary"
                        : "text-charcoal hover:bg-primary/[0.03] hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && <div className="w-2 h-2 bg-primary rotate-45" />}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-5 mt-4 border-t border-border/50 space-y-3"
              >
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 rounded-[1.1rem] px-4 py-3 text-muted transition-colors hover:bg-primary/[0.03] hover:text-primary"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/8">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span dir="ltr" className="font-medium">{siteConfig.phone}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-charcoal shadow-[0_18px_36px_rgba(152,210,8,0.18)] transition-colors hover:bg-primary-dark"
                >
                  احجز عرضاً تجريبياً
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
