"use client";

import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   FLOATING LAPTOP — CSS 3D laptop with glowing ERP screen
   ═══════════════════════════════════════════════════════════ */
export function FloatingLaptop({
  className = "",
  delay = 0,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 1.2, type: "spring", stiffness: 60 }}
      className={`preserve-3d ${className}`}
      style={{ transform: `scale(${scale})` }}
    >
      <div className="animate-float-3d preserve-3d" style={{ transformStyle: "preserve-3d" }}>
        {/* Screen */}
        <div
          className="relative border-2 border-primary/40 bg-graphite overflow-hidden"
          style={{
            width: 280,
            height: 180,
            transform: "perspective(800px) rotateX(-5deg) rotateY(-15deg)",
            boxShadow: "0 0 60px rgba(152, 210, 8, 0.15), 0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Screen glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-charcoal to-primary/5" />

          {/* Dashboard mockup */}
          <div className="relative p-3 h-full flex flex-col gap-2">
            {/* Top bar */}
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-400/60" />
              <div className="w-2 h-2 bg-yellow-400/60" />
              <div className="w-2 h-2 bg-green-400/60" />
              <div className="flex-1 h-3 bg-white/5 mr-4" />
            </div>

            {/* Sidebar + content */}
            <div className="flex gap-2 flex-1">
              {/* Sidebar */}
              <div className="w-12 flex flex-col gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 ${i === 1 ? "bg-primary/40" : "bg-white/8"}`}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Stats row */}
                <div className="flex gap-1.5">
                  {[
                    "bg-primary/20",
                    "bg-blue-400/15",
                    "bg-amber-400/15",
                  ].map((color, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-8 ${color} flex items-center justify-center`}
                    >
                      <div className="w-4 h-1.5 bg-white/20" />
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 bg-white/[0.03] p-1.5 relative overflow-hidden">
                  {/* Fake bar chart */}
                  <div className="flex items-end gap-1 h-full">
                    {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: delay + 0.8 + i * 0.05, duration: 0.4 }}
                        className="flex-1 bg-primary/30"
                      />
                    ))}
                  </div>
                </div>

                {/* Table rows */}
                <div className="flex flex-col gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-2 bg-white/5 flex gap-1">
                      <div className="w-1/4 bg-white/8 h-full" />
                      <div className="w-1/3 bg-white/4 h-full" />
                      <div className="flex-1 bg-white/6 h-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scan line effect */}
          <motion.div
            animate={{ y: [-180, 180] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none"
          />
        </div>

        {/* Keyboard base */}
        <div
          className="bg-gradient-to-b from-slate/80 to-graphite border-x-2 border-b-2 border-white/10"
          style={{
            width: 300,
            height: 18,
            marginLeft: -10,
            transform: "perspective(800px) rotateX(60deg)",
            transformOrigin: "top",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        >
          {/* Keyboard keys */}
          <div className="flex gap-[2px] px-2 pt-1 flex-wrap h-full overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-2 h-1.5 bg-white/[0.06]" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING SCREEN — A 3D monitor/display with content
   ═══════════════════════════════════════════════════════════ */
export function FloatingScreen({
  children,
  className = "",
  delay = 0,
  rotateY = -12,
  rotateX = 5,
  width = 200,
  height = 140,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  rotateY?: number;
  rotateX?: number;
  width?: number;
  height?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className={`preserve-3d ${className}`}
    >
      <div
        className="relative bg-graphite border border-primary/30 overflow-hidden"
        style={{
          width,
          height,
          transform: `perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          boxShadow: "0 0 40px rgba(152, 210, 8, 0.1), 0 10px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        {children || (
          <div className="p-2 flex flex-col gap-1.5 h-full">
            <div className="h-2 w-1/2 bg-primary/20" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-1.5 bg-white/6" style={{ width: `${70 + Math.random() * 30}%` }} />
            ))}
          </div>
        )}
      </div>
      {/* Stand */}
      <div className="mx-auto mt-0 bg-slate/50" style={{ width: 4, height: 12, transform: `perspective(600px) rotateY(${rotateY}deg)` }} />
      <div className="mx-auto bg-slate/30" style={{ width: 24, height: 3, transform: `perspective(600px) rotateY(${rotateY}deg)` }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING UI CARD — Dashboard notification/widget
   ═══════════════════════════════════════════════════════════ */
export function FloatingUICard({
  className = "",
  delay = 0,
  variant = "notification",
}: {
  className?: string;
  delay?: number;
  variant?: "notification" | "chart" | "stat" | "list";
}) {
  const content = {
    notification: (
      <div className="p-3 flex gap-2 items-start">
        <div className="w-6 h-6 bg-primary/30 flex-shrink-0 flex items-center justify-center mt-0.5">
          <div className="w-3 h-3 bg-primary/60" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-16 bg-white/30 mb-1.5" />
          <div className="h-1.5 w-24 bg-white/10" />
          <div className="h-1.5 w-20 bg-white/8 mt-1" />
        </div>
      </div>
    ),
    chart: (
      <div className="p-3">
        <div className="h-2 w-12 bg-primary/30 mb-2" />
        <div className="flex items-end gap-[3px] h-12">
          {[30, 55, 40, 70, 60, 85, 50, 75, 90, 45, 65, 80].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: delay + 0.5 + i * 0.04 }}
              className={`flex-1 ${i >= 8 ? "bg-primary/40" : "bg-white/10"}`}
            />
          ))}
        </div>
      </div>
    ),
    stat: (
      <div className="p-3 text-center">
        <div className="h-1.5 w-10 bg-white/15 mx-auto mb-2" />
        <div className="text-primary font-bold text-lg leading-none mb-1" dir="ltr">
          ٢٤,٥٠٠
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-green-400" />
          <div className="h-1.5 w-6 bg-green-400/30" />
        </div>
      </div>
    ),
    list: (
      <div className="p-3">
        <div className="h-2 w-14 bg-primary/25 mb-2" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5 mb-1.5">
            <div className={`w-1.5 h-1.5 ${i === 0 ? "bg-primary" : "bg-white/15"}`} />
            <div className="h-1.5 bg-white/10 flex-1" />
            <div className="h-1.5 w-6 bg-white/8" />
          </div>
        ))}
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className={`${className}`}
    >
      <div
        className="bg-graphite/90 border border-white/10 backdrop-blur-sm overflow-hidden"
        style={{
          minWidth: 120,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(152,210,8,0.05)",
        }}
      >
        {content[variant]}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING KEYBOARD — 3D keyboard element
   ═══════════════════════════════════════════════════════════ */
export function FloatingKeyboard({
  className = "",
  delay = 0,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) {
  const rows = [
    { keys: 13, widths: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    { keys: 12, widths: [1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3] },
    { keys: 11, widths: [1.6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.6] },
    { keys: 9, widths: [2, 1, 1, 1, 1, 1, 1, 1, 2] },
    { keys: 5, widths: [1.5, 1.5, 5, 1.5, 1.5] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className={`preserve-3d ${className}`}
    >
      <div
        className="bg-gradient-to-b from-graphite to-charcoal border border-white/10 p-2"
        style={{
          width: 220 * scale,
          transform: "perspective(500px) rotateX(25deg) rotateY(-8deg) rotateZ(2deg)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(152,210,8,0.05)",
        }}
      >
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-[2px] mb-[2px]">
            {row.widths.map((w, ki) => {
              const isActive = (ri === 1 && ki === 4) || (ri === 2 && ki === 6);
              return (
                <motion.div
                  key={ki}
                  animate={
                    isActive
                      ? { backgroundColor: ["rgba(152,210,8,0.15)", "rgba(255,255,255,0.06)", "rgba(152,210,8,0.15)"] }
                      : {}
                  }
                  transition={isActive ? { repeat: Infinity, duration: 1.5, delay: ri * 0.3 } : {}}
                  className="bg-white/[0.06] border border-white/[0.04]"
                  style={{
                    flex: w,
                    height: 8 * scale,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOATING PHONE — Mobile device showing the app
   ═══════════════════════════════════════════════════════════ */
export function FloatingPhone({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateZ: 8 }}
      animate={{ opacity: 1, y: 0, rotateZ: 0 }}
      transition={{ delay, duration: 1, type: "spring" }}
      className={`animate-float-slow ${className}`}
    >
      <div
        className="relative bg-charcoal border-2 border-white/15 overflow-hidden"
        style={{
          width: 70,
          height: 130,
          transform: "perspective(600px) rotateY(15deg) rotateX(-5deg)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4), 0 0 20px rgba(152,210,8,0.08)",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-1.5 pt-1 pb-0.5">
          <div className="w-4 h-0.5 bg-white/20" />
          <div className="w-2 h-0.5 bg-white/15" />
        </div>
        {/* App content */}
        <div className="p-1.5 flex flex-col gap-1">
          <div className="h-1 w-8 bg-primary/30" />
          <div className="h-6 bg-primary/10 flex items-center justify-center">
            <div className="w-4 h-3 bg-primary/20" />
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-1">
              <div className="w-3 h-3 bg-white/8" />
              <div className="flex-1">
                <div className="h-1 bg-white/10 mb-0.5" />
                <div className="h-0.5 bg-white/5 w-2/3" />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div className="absolute bottom-0 inset-x-0 flex justify-around p-1 bg-graphite/50">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-2 h-2 ${i === 0 ? "bg-primary/40" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONNECTED MODULES — 3D isometric module visualization
   ═══════════════════════════════════════════════════════════ */
export function ConnectedModules({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const moduleBlocks = [
    { label: "المحاسبة", x: 0, y: 0, color: "rgba(152,210,8,0.6)" },
    { label: "المخزون", x: 1, y: 0, color: "rgba(152,210,8,0.5)" },
    { label: "المبيعات", x: 2, y: 0, color: "rgba(152,210,8,0.4)" },
    { label: "الموارد", x: 0, y: 1, color: "rgba(152,210,8,0.45)" },
    { label: "المشاريع", x: 1, y: 1, color: "rgba(181,230,58,0.5)" },
    { label: "التقارير", x: 2, y: 1, color: "rgba(152,210,8,0.35)" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1, type: "spring" }}
      className={`preserve-3d ${className}`}
    >
      <div
        className="relative animate-isometric-float"
        style={{
          transform: "perspective(800px) rotateX(-30deg) rotateY(35deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {moduleBlocks.map((block, i) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + i * 0.1, duration: 0.5, type: "spring" }}
            className="absolute preserve-3d"
            style={{
              left: block.x * 90,
              top: block.y * 70,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Top face */}
            <div
              className="absolute"
              style={{
                width: 80,
                height: 80,
                background: `${block.color}`,
                filter: "brightness(1.3)",
                transform: "rotateX(90deg) translateZ(40px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />
            {/* Front face */}
            <div
              className="flex items-center justify-center"
              style={{
                width: 80,
                height: 40,
                background: block.color,
                transform: "translateZ(40px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-white text-[9px] font-bold">{block.label}</span>
            </div>
            {/* Side face */}
            <div
              className="absolute"
              style={{
                width: 40,
                height: 40,
                background: block.color,
                filter: "brightness(0.7)",
                right: -40,
                top: 0,
                transform: "rotateY(90deg) translateZ(40px)",
                transformOrigin: "left",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            />
            {/* Glow */}
            <div
              className="absolute -inset-2 blur-xl pointer-events-none"
              style={{ background: block.color, opacity: 0.15 }}
            />
          </motion.div>
        ))}

        {/* Connection lines */}
        <svg
          className="absolute pointer-events-none"
          style={{ top: 20, left: 40, width: 200, height: 120, opacity: 0.3 }}
        >
          <motion.line
            x1="0" y1="0" x2="90" y2="0"
            stroke="#98d208" strokeWidth="1"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.6, duration: 0.4 }}
          />
          <motion.line
            x1="90" y1="0" x2="180" y2="0"
            stroke="#98d208" strokeWidth="1"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.8, duration: 0.4 }}
          />
          <motion.line
            x1="0" y1="0" x2="0" y2="70"
            stroke="#98d208" strokeWidth="1"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.7, duration: 0.4 }}
          />
          <motion.line
            x1="90" y1="0" x2="90" y2="70"
            stroke="#98d208" strokeWidth="1"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.9, duration: 0.4 }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DATA FLOW VISUALIZATION — Animated data particles
   ═══════════════════════════════════════════════════════════ */
export function DataFlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Floating data particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + i * 0.3,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
