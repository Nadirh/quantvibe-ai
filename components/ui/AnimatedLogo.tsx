"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

/*
 * "Layered Depth Neuron" logo
 * 3 violet input nodes → 2 violet hidden nodes → 1 large cyan hub → 2 cyan output nodes
 * Left-to-right neural network flow: violet (#A78BFA) = human intelligence, cyan (#22D3EE) = coded output
 */

const VIOLET = "#A78BFA";
const CYAN = "#22D3EE";

// Node positions (x, y) in a 200x160 viewBox
const inputNodes = [
  { x: 24, y: 30 },
  { x: 24, y: 80 },
  { x: 24, y: 130 },
];

const hiddenNodes = [
  { x: 72, y: 50 },
  { x: 72, y: 110 },
];

const hubNode = { x: 130, y: 80 };

const outputNodes = [
  { x: 178, y: 50 },
  { x: 178, y: 110 },
];

// Connection definitions: [from, to, weight (opacity)]
type Connection = {
  from: { x: number; y: number };
  to: { x: number; y: number };
  weight: number;
  color: string;
};

const connections: Connection[] = [
  // Input → Hidden (violet connections)
  ...inputNodes.flatMap((inp) =>
    hiddenNodes.map((hid) => ({
      from: inp,
      to: hid,
      weight: inp.y === 80 ? 0.9 : 0.5,
      color: VIOLET,
    }))
  ),
  // Hidden → Hub (transitional connections - violet to cyan)
  ...hiddenNodes.map((hid) => ({
    from: hid,
    to: hubNode,
    weight: 0.85,
    color: VIOLET,
  })),
  // Hub → Output (cyan connections)
  ...outputNodes.map((out) => ({
    from: hubNode,
    to: out,
    weight: 0.9,
    color: CYAN,
  })),
];

export function AnimatedLogo({
  size = 200,
  className,
  animate = true,
}: AnimatedLogoProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = animate && !shouldReduceMotion;

  const scale = size / 200;

  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="QuantVibe AI logo — neural network flowing from violet input nodes to cyan output nodes"
    >
      <defs>
        <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={VIOLET} />
          <stop offset="100%" stopColor={CYAN} />
        </linearGradient>
      </defs>

      {/* Connections */}
      {connections.map((conn, i) => {
        const pathD = `M ${conn.from.x} ${conn.from.y} C ${
          (conn.from.x + conn.to.x) / 2
        } ${conn.from.y}, ${(conn.from.x + conn.to.x) / 2} ${conn.to.y}, ${
          conn.to.x
        } ${conn.to.y}`;

        return shouldAnimate ? (
          <motion.path
            key={`conn-${i}`}
            d={pathD}
            stroke={conn.color}
            strokeWidth={conn.weight * 2.5}
            strokeOpacity={conn.weight * 0.6}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.8, delay: 0.3 + i * 0.06, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: 0.3 + i * 0.06 },
            }}
          />
        ) : (
          <path
            key={`conn-${i}`}
            d={pathD}
            stroke={conn.color}
            strokeWidth={conn.weight * 2.5}
            strokeOpacity={conn.weight * 0.6}
            fill="none"
            strokeLinecap="round"
          />
        );
      })}

      {/* Input nodes (violet) */}
      {inputNodes.map((node, i) =>
        shouldAnimate ? (
          <motion.circle
            key={`input-${i}`}
            cx={node.x}
            cy={node.y}
            r={7}
            fill={VIOLET}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "backOut" }}
          />
        ) : (
          <circle
            key={`input-${i}`}
            cx={node.x}
            cy={node.y}
            r={7}
            fill={VIOLET}
          />
        )
      )}

      {/* Hidden nodes (violet) */}
      {hiddenNodes.map((node, i) =>
        shouldAnimate ? (
          <motion.circle
            key={`hidden-${i}`}
            cx={node.x}
            cy={node.y}
            r={8}
            fill={VIOLET}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: "backOut" }}
          />
        ) : (
          <circle
            key={`hidden-${i}`}
            cx={node.x}
            cy={node.y}
            r={8}
            fill={VIOLET}
          />
        )
      )}

      {/* Central hub node (gradient) */}
      {shouldAnimate ? (
        <motion.circle
          cx={hubNode.x}
          cy={hubNode.y}
          r={14}
          fill="url(#hubGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
        />
      ) : (
        <circle
          cx={hubNode.x}
          cy={hubNode.y}
          r={14}
          fill="url(#hubGradient)"
        />
      )}

      {/* Glow effect on hub */}
      <circle
        cx={hubNode.x}
        cy={hubNode.y}
        r={20}
        fill="none"
        stroke={CYAN}
        strokeWidth={1}
        strokeOpacity={0.2}
      />

      {/* Output nodes (cyan) */}
      {outputNodes.map((node, i) =>
        shouldAnimate ? (
          <motion.circle
            key={`output-${i}`}
            cx={node.x}
            cy={node.y}
            r={8}
            fill={CYAN}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1, ease: "backOut" }}
          />
        ) : (
          <circle
            key={`output-${i}`}
            cx={node.x}
            cy={node.y}
            r={8}
            fill={CYAN}
          />
        )
      )}
    </svg>
  );
}
