import { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  reconnectEdge,
} from "reactflow";
import { shallow } from "zustand/shallow";
import { CustomBaseEdge } from "./edges/base-edge";
import { InputNode } from "./nodes/input-node";
import { LLMNode } from "./nodes/llm-node";
import { OutputNode } from "./nodes/output-node";
import { TextNode } from "./nodes/text-node";
import { useStore } from "./store";

import "reactflow/dist/style.css";
import EdgeWithDelete from "./edges/edge-with-delete";
import { AggregateNode } from "./nodes/aggregate-node";
import { ApiNode } from "./nodes/api-node";
import { CodeNode } from "./nodes/code-node";
import { DatabaseNode } from "./nodes/database-node";
import { FilterNode } from "./nodes/filter-node";
import { Card } from "./ui/card";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  aggeregate: AggregateNode,
  database: DatabaseNode,
  filter: FilterNode,
  api: ApiNode,
  code: CodeNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setEdges: state.setEdges,
});

const edgeTypes = {
  custom: EdgeWithDelete,
  base: CustomBaseEdge,
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const edgeReconnectSuccessful = useRef(true);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setEdges,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow"),
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance, addNode, getNodeID],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onReconnectStart = useCallback(() => {
    edgeReconnectSuccessful.current = false;
  }, []);

  const onReconnect = useCallback(
    (oldEdge, newConnection) => {
      edgeReconnectSuccessful.current = true;
      setEdges((els) => {
        const reconnected = reconnectEdge(oldEdge, newConnection, els);
        return reconnected.map((edge) => ({
          ...edge,
          type: "custom",
          deletable: true,
          animated: true,
        }));
      });
    },
    [setEdges],
  );

  const onReconnectEnd = useCallback(
    (event, edge) => {
      if (!edgeReconnectSuccessful.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
      }
      edgeReconnectSuccessful.current = true;
    },
    [setEdges],
  );

  return (
    <Card ref={reactFlowWrapper} className="absolute inset-0 rounded-none">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
        edgeTypes={edgeTypes}
        defaultEdgeOptions={{
          type: "custom",
          deletable: true,
          style: {
            strokeWidth: 2,
            stroke: "hsl(var(--muted-foreground))",
          },
          markerEnd: {
            type: "arrowclosed",
            width: 12,
            height: 12,
            color: "hsl(var(--muted-foreground))",
          },
          animated: true,
        }}
        fitView
        minZoom={0.2}
        maxZoom={4}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
        className="h-full"
      >
        <Background 
          color="hsl(var(--muted-foreground))" 
          gap={gridSize} 
        />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Card>
  );
};
