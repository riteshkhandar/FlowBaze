import { Bug } from "lucide-react";
import { Position } from "reactflow";
import { NodeWrapper } from "./node-wrapper";

export const DebugNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
      label: "Debug In",
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
      label: "Debug Out",
    },
  ];

  return (
    <NodeWrapper id={id} title="Debug Node" handles={handles} icon={Bug}>
      <div className="bg-muted p-3 rounded">
        <pre className="text-xs text-muted-foreground">Console output here...</pre>
      </div>
    </NodeWrapper>
  );
};
