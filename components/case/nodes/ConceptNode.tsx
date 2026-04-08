"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";
import { nodeTypeConfig } from "@/lib/utils";
import type { NodeType } from "@/data/types";

export interface ConceptNodeData {
  label: string;
  nodeType: NodeType;
  description: string;
  selected?: boolean;
  animationDelay?: number;
  vertical?: boolean;
  year?: string;
  [key: string]: unknown;
}

const ConceptNode = memo(function ConceptNode({
  data,
  selected,
}: NodeProps & { data: ConceptNodeData }) {
  const cfg = nodeTypeConfig[data.nodeType];
  const vertical = !!data.vertical;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: (data.animationDelay as number) ?? 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative cursor-pointer"
    >
      {/* Glow when selected */}
      {selected && (
        <motion.div
          layoutId={`glow-${data.label}`}
          className="absolute inset-0 rounded-xl -z-10"
          style={{
            boxShadow: `0 0 32px 8px ${cfg.glow}`,
            background: cfg.bg,
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      <div
        className="rounded-xl px-4 py-3 min-w-[140px] max-w-[180px] transition-all duration-200"
        style={{
          background: selected ? cfg.bg : "rgba(13, 21, 38, 0.95)",
          border: `1.5px solid ${selected ? cfg.color : `${cfg.color}55`}`,
          boxShadow: selected
            ? `0 0 0 1px ${cfg.color}40, 0 4px 24px ${cfg.glow}`
            : `0 2px 12px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Type badge + year */}
        <div className="flex items-center justify-between gap-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: cfg.color }}
            />
            <span
              className="text-[9px] font-medium tracking-widest uppercase"
              style={{ color: cfg.color, opacity: 0.8 }}
            >
              {cfg.label}
            </span>
          </div>
          {data.year && (
            <span className="text-[9px] font-mono text-text-muted opacity-60 shrink-0">
              {data.year as string}
            </span>
          )}
        </div>

        {/* Label */}
        <p
          className="text-xs font-semibold leading-tight"
          style={{ color: selected ? cfg.color : "#f1f5f9" }}
        >
          {data.label}
        </p>

        {/* Description (show when selected) */}
        {selected && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-[10px] text-text-secondary mt-2 leading-relaxed"
          >
            {data.description}
          </motion.p>
        )}
      </div>

      {/* React Flow handles */}
      {vertical ? (
        <>
          <Handle
            type="target"
            position={Position.Top}
            style={{ background: cfg.color, border: "none", width: 6, height: 6, top: -3 }}
          />
          <Handle
            type="source"
            position={Position.Bottom}
            style={{ background: cfg.color, border: "none", width: 6, height: 6, bottom: -3 }}
          />
        </>
      ) : (
        <>
          <Handle
            type="target"
            position={Position.Left}
            style={{ background: cfg.color, border: "none", width: 6, height: 6, left: -3 }}
          />
          <Handle
            type="source"
            position={Position.Right}
            style={{ background: cfg.color, border: "none", width: 6, height: 6, right: -3 }}
          />
        </>
      )}
    </motion.div>
  );
});

export default ConceptNode;
