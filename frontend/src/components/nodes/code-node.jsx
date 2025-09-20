import { Code } from "lucide-react";
import { useState } from "react";
import { Position } from "reactflow";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { NodeWrapper } from "./node-wrapper";

export const CodeNode = ({ id }) => {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(
    "// Enter your code here\nconst result = input;\nreturn result;"
  );

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
      label: "Output",
    },
  ];

  return (
    <NodeWrapper id={id} title="Code Node" handles={handles} icon={Code}>
      <div className="space-y-3">
        {/* Language Dropdown */}
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-full border-orange-500 focus:ring-2 focus:ring-orange-500">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="JavaScript">JavaScript</SelectItem>
            <SelectItem value="Python">Python</SelectItem>
            <SelectItem value="SQL">SQL</SelectItem>
            <SelectItem value="JSON">JSON</SelectItem>
          </SelectContent>
        </Select>

        {/* Code Editor */}
        <Textarea
          placeholder="Enter your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="h-24 w-full border-orange-500 focus:ring-2 focus:ring-orange-500 font-mono text-sm"
        />
      </div>
    </NodeWrapper>
  );
};
