"use client";

import { motion } from "framer-motion";

interface Cube3DProps {
  size?: number;
  color?: string;
  colorDark?: string;
  colorLight?: string;
  className?: string;
  animation?: "spin" | "float" | "gentle" | "none";
  delay?: number;
  opacity?: number;
}

export default function Cube3D({
  size = 60,
  color = "rgba(152, 210, 8, 0.8)",
  colorDark = "rgba(122, 181, 6, 0.8)",
  colorLight = "rgba(181, 230, 58, 0.8)",
  className = "",
  animation = "gentle",
  delay = 0,
  opacity = 1,
}: Cube3DProps) {
  const half = size / 2;
  const animClass =
    animation === "spin"
      ? "animate-cube-spin"
      : animation === "float"
        ? "animate-cube-float"
        : animation === "gentle"
          ? "animate-cube-gentle"
          : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className={`preserve-3d ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`preserve-3d relative ${animClass}`}
        style={{ width: size, height: size, ["--cube-size" as string]: `${size}px` }}
      >
        {/* Front */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: color,
            transform: `translateZ(${half}px)`,
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        {/* Back */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: colorDark,
            transform: `rotateY(180deg) translateZ(${half}px)`,
          }}
        />
        {/* Right */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: colorDark,
            transform: `rotateY(90deg) translateZ(${half}px)`,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
        {/* Left */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: colorDark,
            transform: `rotateY(-90deg) translateZ(${half}px)`,
          }}
        />
        {/* Top */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: colorLight,
            transform: `rotateX(90deg) translateZ(${half}px)`,
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        />
        {/* Bottom */}
        <div
          className="absolute backface-hidden"
          style={{
            width: size,
            height: size,
            background: colorDark,
            transform: `rotateX(-90deg) translateZ(${half}px)`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Isometric Block (flat 3D block with 3 visible faces) ─── */
export function IsometricBlock({
  width = 60,
  height = 40,
  color = "rgba(152, 210, 8, 0.9)",
  colorSide = "rgba(122, 181, 6, 0.9)",
  colorTop = "rgba(181, 230, 58, 0.9)",
  className = "",
  delay = 0,
  children,
}: {
  width?: number;
  height?: number;
  color?: string;
  colorSide?: string;
  colorTop?: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className={`preserve-3d relative ${className}`}
      style={{ width, height: height + width * 0.5 }}
    >
      {/* Top face */}
      <div
        style={{
          position: "absolute",
          width,
          height: width,
          background: colorTop,
          transform: `rotateX(60deg) translateY(-${height * 0.3}px)`,
          transformOrigin: "bottom",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      />
      {/* Front face */}
      <div
        style={{
          position: "absolute",
          width,
          height,
          bottom: 0,
          background: color,
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      {/* Right side */}
      <div
        style={{
          position: "absolute",
          width: width * 0.4,
          height,
          bottom: 0,
          right: -width * 0.35,
          background: colorSide,
          transform: "skewY(-30deg)",
          transformOrigin: "left bottom",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />
    </motion.div>
  );
}
