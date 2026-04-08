"use client";

import { motion, useReducedMotion } from "framer-motion";

interface BookCoverProps {
  width?: number;
  height?: number;
}

export function BookCover({ width = 280, height = 400 }: BookCoverProps) {
  const shouldReduceMotion = useReducedMotion();

  // Measurement nodes representing Attribution, Incrementality, MMM
  const nodes = [
    // Left cluster - Attribution
    { cx: 60, cy: 140, r: 4, color: "#A78BFA", delay: 0.3 },
    { cx: 45, cy: 165, r: 3, color: "#A78BFA", delay: 0.4 },
    { cx: 75, cy: 170, r: 3.5, color: "#A78BFA", delay: 0.35 },
    // Center cluster - Incrementality
    { cx: 140, cy: 130, r: 5, color: "#818CF8", delay: 0.5 },
    { cx: 125, cy: 155, r: 3, color: "#818CF8", delay: 0.55 },
    { cx: 155, cy: 160, r: 3.5, color: "#818CF8", delay: 0.45 },
    // Right cluster - MMM
    { cx: 220, cy: 145, r: 4.5, color: "#22D3EE", delay: 0.6 },
    { cx: 205, cy: 168, r: 3, color: "#22D3EE", delay: 0.65 },
    { cx: 235, cy: 162, r: 3, color: "#22D3EE", delay: 0.7 },
    // Convergence point - Smarter Budgeting
    { cx: 140, cy: 210, r: 7, color: "#22D3EE", delay: 0.8 },
  ];

  // Connection lines flowing to center
  const connections = [
    // Attribution to center
    { x1: 60, y1: 140, x2: 140, y2: 210, color: "#A78BFA", delay: 0.9 },
    { x1: 45, y1: 165, x2: 140, y2: 210, color: "#A78BFA", delay: 0.95 },
    { x1: 75, y1: 170, x2: 140, y2: 210, color: "#A78BFA", delay: 1.0 },
    // Incrementality to center
    { x1: 140, y1: 130, x2: 140, y2: 210, color: "#818CF8", delay: 1.05 },
    { x1: 125, y1: 155, x2: 140, y2: 210, color: "#818CF8", delay: 1.1 },
    { x1: 155, y1: 160, x2: 140, y2: 210, color: "#818CF8", delay: 1.15 },
    // MMM to center
    { x1: 220, y1: 145, x2: 140, y2: 210, color: "#22D3EE", delay: 1.2 },
    { x1: 205, y1: 168, x2: 140, y2: 210, color: "#22D3EE", delay: 1.25 },
    { x1: 235, y1: 162, x2: 140, y2: 210, color: "#22D3EE", delay: 1.3 },
    // Cross connections
    { x1: 60, y1: 140, x2: 140, y2: 130, color: "#A78BFA", delay: 1.0, opacity: 0.3 },
    { x1: 140, y1: 130, x2: 220, y2: 145, color: "#818CF8", delay: 1.1, opacity: 0.3 },
  ];

  // Rising bars at bottom representing profit growth
  const bars = [
    { x: 55, h: 20, color: "#A78BFA", delay: 1.4 },
    { x: 80, h: 28, color: "#A78BFA", delay: 1.45 },
    { x: 105, h: 24, color: "#818CF8", delay: 1.5 },
    { x: 130, h: 35, color: "#818CF8", delay: 1.55 },
    { x: 155, h: 30, color: "#22D3EE", delay: 1.6 },
    { x: 180, h: 42, color: "#22D3EE", delay: 1.65 },
    { x: 205, h: 50, color: "#22D3EE", delay: 1.7 },
  ];

  const barY = 280;

  return (
    <div
      className="relative"
      style={{ width, height }}
      role="img"
      aria-label="Book cover: The New Marketing Measurement Playbook"
    >
      <svg
        viewBox="0 0 280 400"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Book background */}
        <defs>
          <linearGradient id="bookBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Book shape with spine shadow */}
        <rect x="0" y="0" width="280" height="400" rx="4" fill="url(#bookBg)" />
        <rect x="0" y="0" width="8" height="400" rx="4" fill="#0A0F1C" opacity="0.5" />

        {/* Top accent line */}
        <rect x="30" y="30" width="220" height="2" fill="url(#accentLine)" rx="1" />

        {/* Title */}
        <text x="140" y="65" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.5">
          THE NEW
        </text>
        <text x="140" y="82" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.3">
          MARKETING
        </text>
        <text x="140" y="99" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.3">
          MEASUREMENT
        </text>
        <text x="140" y="116" textAnchor="middle" fill="#22D3EE" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1">
          PLAYBOOK
        </text>

        {/* Connection lines */}
        {connections.map((line, i) => {
          const props = shouldReduceMotion
            ? { opacity: line.opacity ?? 0.15 }
            : {};
          return (
            <motion.line
              key={`line-${i}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.color}
              strokeWidth={1}
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: line.opacity ?? 0.15 }}
              transition={shouldReduceMotion ? undefined : { delay: line.delay, duration: 0.4 }}
              {...props}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={node.color}
            filter="url(#glow)"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={shouldReduceMotion ? undefined : { delay: node.delay, duration: 0.3 }}
          />
        ))}

        {/* Convergence glow ring */}
        <motion.circle
          cx={140}
          cy={210}
          r={12}
          fill="none"
          stroke="#22D3EE"
          strokeWidth={1}
          opacity={0.2}
          initial={shouldReduceMotion ? undefined : { scale: 0 }}
          animate={{ scale: 1 }}
          transition={shouldReduceMotion ? undefined : { delay: 0.85, duration: 0.5 }}
        />

        {/* Cluster labels */}
        <text x="60" y="188" textAnchor="middle" fill="#A78BFA" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.7">
          ATTRIBUTION
        </text>
        <text x="140" y="180" textAnchor="middle" fill="#818CF8" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.7">
          INCREMENTALITY
        </text>
        <text x="220" y="185" textAnchor="middle" fill="#22D3EE" fontSize="6.5" fontWeight="600" fontFamily="system-ui, sans-serif" opacity="0.7">
          MMM
        </text>

        {/* Divider */}
        <line x1="50" y1="240" x2="230" y2="240" stroke="#CBD5E1" strokeWidth={0.5} opacity={0.2} />

        {/* Subtitle */}
        <text x="140" y="258" textAnchor="middle" fill="#CBD5E1" fontSize="7" fontFamily="system-ui, sans-serif" letterSpacing="0.2">
          How Attribution, Incrementality Testing,
        </text>
        <text x="140" y="268" textAnchor="middle" fill="#CBD5E1" fontSize="7" fontFamily="system-ui, sans-serif" letterSpacing="0.2">
          and MMMs Drive Smarter Budgeting
        </text>
        <text x="140" y="278" textAnchor="middle" fill="#CBD5E1" fontSize="7" fontFamily="system-ui, sans-serif" letterSpacing="0.2">
          and Maximize Profits
        </text>

        {/* Profit bars */}
        {bars.map((bar, i) => (
          <motion.rect
            key={`bar-${i}`}
            x={bar.x}
            y={barY - bar.h}
            width={18}
            height={bar.h}
            rx={2}
            fill={bar.color}
            opacity={0.6}
            initial={shouldReduceMotion ? undefined : { height: 0, y: barY }}
            animate={{ height: bar.h, y: barY - bar.h }}
            transition={shouldReduceMotion ? undefined : { delay: bar.delay, duration: 0.4, ease: "easeOut" }}
          />
        ))}

        {/* Bottom accent line */}
        <rect x="30" y="340" width="220" height="1" fill="url(#accentLine)" rx="0.5" opacity="0.5" />

        {/* Author */}
        <text x="140" y="365" textAnchor="middle" fill="#CBD5E1" fontSize="8" fontFamily="system-ui, sans-serif" letterSpacing="1.5">
          NADIR HUSSAIN
        </text>

        {/* Bottom border */}
        <rect x="30" y="380" width="220" height="1.5" fill="url(#accentLine)" rx="1" />
      </svg>
    </div>
  );
}
