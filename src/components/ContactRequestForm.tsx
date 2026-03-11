"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  senderEmail: string;
  industry: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  senderEmail: "",
  industry: "",
  message: "",
};

export default function ContactRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!form.senderEmail.trim()) {
      setError("يرجى إدخال بريدك الإلكتروني حتى نتمكن من الرد عليك.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setError(data.error || "تعذر إرسال الطلب حالياً. يرجى المحاولة لاحقاً.");
        return;
      }

      setSuccess("تم إرسال طلبك بنجاح. سيتواصل معك فريقنا قريباً.");
      setForm(initialState);
    } catch {
      setError("تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">الاسم الكامل</label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
            className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm"
            placeholder="أدخل اسمك الكامل"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">اسم الشركة</label>
          <input
            type="text"
            value={form.companyName}
            onChange={(event) => setForm((prev) => ({ ...prev, companyName: event.target.value }))}
            className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm"
            placeholder="اسم شركتك"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">رقم الهاتف</label>
          <input
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm text-left"
            placeholder="+964"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            dir="ltr"
            required
            value={form.senderEmail}
            onChange={(event) => setForm((prev) => ({ ...prev, senderEmail: event.target.value }))}
            className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm text-left"
            placeholder="email@company.com"
          />
          <p className="mt-1 text-xs text-muted">مطلوب للرد على طلبك.</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">القطاع</label>
        <select
          value={form.industry}
          onChange={(event) => setForm((prev) => ({ ...prev, industry: event.target.value }))}
          className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm text-muted"
        >
          <option value="">اختر قطاع شركتك</option>
          <option>التصنيع</option>
          <option>التجارة العامة</option>
          <option>الأدوية والصيدلة</option>
          <option>الأغذية والمشروبات</option>
          <option>الأعمال الخدمية</option>
          <option>الأتمتة</option>
          <option>قطاع آخر</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">كيف يمكننا مساعدتك؟</label>
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="w-full px-4 py-3 border border-border bg-cream focus:outline-none focus:border-primary transition-colors text-sm resize-none"
          placeholder="أخبرنا عن احتياجاتك أو أسئلتك..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-charcoal py-4 font-semibold text-base hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md disabled:opacity-70"
      >
        {loading ? "جارٍ إرسال الطلب..." : "أرسل طلب الاستشارة"}
      </button>

      {error ? <p className="text-sm text-red-600 text-center">{error}</p> : null}
      {success ? <p className="text-sm text-emerald-700 text-center">{success}</p> : null}

      <p className="text-xs text-muted text-center">سنتواصل معك خلال ٢٤ ساعة عمل</p>
    </form>
  );
}
