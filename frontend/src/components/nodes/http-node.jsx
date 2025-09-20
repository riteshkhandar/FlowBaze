import { Globe } from "lucide-react";
import { useState } from "react";
import { Position } from "reactflow";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { NodeWrapper } from "./node-wrapper";

export const HttpNode = ({ id }) => {
  const [method, setMethod] = useState("GET");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-input`,
      label: "Request",
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-output`,
      label: "Response",
    },
  ];

  return (
    <NodeWrapper id={id} title="HTTP Node" handles={handles} icon={Globe}>
      <div className="space-y-3">
        <Select value={method} onValueChange={setMethod}>
          <SelectTrigger>
            <SelectValue placeholder="HTTP Method" />
          </SelectTrigger>
          <SelectContent>
            {["GET", "POST", "PUT", "DELETE"].map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input placeholder="Enter URL..." className="border-orange-500 focus:ring-2 focus:ring-orange-500" />
      </div>
    </NodeWrapper>
  );
};
