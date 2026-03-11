import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "default" | "large";
  className?: string;
}

export default function CTAButton({
  children,
  href = "/contact",
  variant = "primary",
  size = "default",
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold transition-all duration-300";

  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-primary text-charcoal shadow-[0_20px_40px_rgba(152,210,8,0.24)] hover:-translate-y-0.5 hover:bg-primary-dark",
    secondary:
      "bg-charcoal text-white shadow-[0_18px_40px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 hover:bg-graphite",
    outline:
      "border border-primary/25 bg-transparent text-primary hover:-translate-y-0.5 hover:bg-primary hover:text-charcoal",
    dark: "bg-white text-charcoal shadow-[0_18px_40px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:bg-gray-100",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <Link href={href} className={combinedClasses}>
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>
      <span className="absolute inset-[1px] rounded-full border border-white/10 opacity-60" />
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </Link>
  );
}
