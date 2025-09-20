import { Wand2 } from "lucide-react";
import { Position } from "reactflow";
import { Textarea } from "../ui/textarea";
import { NodeWrapper } from "./node-wrapper";

export const TransformNode = ({ id }) => {
  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
      label: "Input",
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
      label: "Transformed",
    },
  ];

  return (
    <NodeWrapper id={id} title="Transform Node" handles={handles} icon={Wand2}>
      <Textarea
        placeholder="Enter transformation logic..."
        className="h-20 border-orange-500 focus:ring-2 focus:ring-orange-500"
      />
    </NodeWrapper>
  );
};
