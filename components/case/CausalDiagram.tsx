"use client";

import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeMouseHandler,
  MarkerType,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";
import ConceptNode, { type ConceptNodeData } from "./nodes/ConceptNode";
import type { CausalNode, CausalEdge } from "@/data/types";
import { nodeTypeConfig } from "@/lib/utils";

const nodeTypes = { conceptNode: ConceptNode };

interface Props {
  causalNodes: CausalNode[];
  causalEdges: CausalEdge[];
  onConceptSelect: (conceptId: string) => void;
  selectedConceptId: string | null;
  vertical?: boolean;
}

export default function CausalDiagram({
  causalNodes,
  causalEdges,
  onConceptSelect,
  selectedConceptId,
  vertical = false,
}: Props) {
  const flowNodes: Node<ConceptNodeData>[] = useMemo(
    () =>
      causalNodes.map((n, i) => ({
        id: n.id,
        type: "conceptNode",
        position: n.position,
        data: {
          label: n.shortLabel ?? n.label,
          nodeType: n.nodeType,
          description: n.description,
          conceptId: n.conceptId,
          animationDelay: i * 0.06,
          vertical,
          year: n.year,
        },
        selected: selectedConceptId === n.conceptId,
      })),
    [causalNodes, selectedConceptId]
  );

  const flowEdges: Edge[] = useMemo(
    () =>
      causalEdges.map((e) => {
        const isCritique = e.edgeType === "critique";
        const sourceNode = causalNodes.find((n) => n.id === e.source);
        const edgeColor = isCritique
          ? "#6B7B90"
          : sourceNode
          ? nodeTypeConfig[sourceNode.nodeType].color
          : "#6B7B90";

        return {
          id: e.id,
          source: e.source,
          target: e.target,
          type: "default",
          animated: !isCritique,
          style: {
            stroke: edgeColor,
            strokeWidth: isCritique ? 1.5 : 1.5,
            strokeDasharray: isCritique ? "5 4" : undefined,
            opacity: isCritique ? 0.5 : 0.65,
          },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: edgeColor,
            width: 12,
            height: 12,
          },
        };
      }),
    [causalEdges, causalNodes]
  );

  const [nodes, , onNodesChange] = useNodesState(flowNodes);
  const [edges, , onEdgesChange] = useEdgesState(flowEdges);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_event, node) => {
      const conceptId = (node.data as ConceptNodeData).conceptId as string;
      onConceptSelect(conceptId);
    },
    [onConceptSelect]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-xl overflow-hidden border border-border/50"
      style={{ height: vertical ? 1140 : 580 }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        {...(vertical
          ? {
              fitView: false,
              defaultViewport: { x: 50, y: 20, zoom: 1 },
              panOnDrag: false,
              zoomOnScroll: false,
              zoomOnPinch: false,
              preventScrolling: false,
            }
          : {
              fitView: true,
              fitViewOptions: { padding: 0.15 },
            })}
        minZoom={0.5}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
        style={{ background: "#070f1f" }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={28}
          size={1}
          color="rgba(255,255,255,0.04)"
        />
        {!vertical && (
          <Controls
            style={{
              background: "#0d1526",
              border: "1px solid #1e2d45",
              borderRadius: 8,
            }}
          />
        )}
      </ReactFlow>

      {/* Legend */}
      <div className="px-4 py-3 border-t border-border/40 bg-ink-900/60 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-3">
          {Object.entries(nodeTypeConfig).map(([type, cfg]) => (
            <div key={type} className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ background: `${cfg.color}55`, border: `1px solid ${cfg.color}` }}
              />
              <span className="text-[10px] text-text-muted">{cfg.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-1.5 ml-2 border-l border-border/40 pl-3">
            <span className="text-[10px] text-text-muted">
              — — critique/shadow
            </span>
          </div>
        </div>
        <p className="text-[10px] text-text-muted italic">
          Click a node to explore the concept →
        </p>
      </div>
    </motion.div>
  );
}
