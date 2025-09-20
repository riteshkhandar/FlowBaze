import { MessageSquare } from "lucide-react";
import { Position } from "reactflow";
import { NodeWrapper } from "./node-wrapper";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const LLMNode = ({ id, data, onChange }) => {
  const [selectedLLM, setSelectedLLM] = useState(data?.llm || "gpt-4");

  const handles = [
    {
      type: "target",
      position: Position.Left,
      id: `${id}-system`,
      style: { top: "33%" },
      label: "System",
    },
    {
      type: "target",
      position: Position.Left,
      id: `${id}-prompt`,
      style: { top: "66%" },
      label: "Prompt",
    },
    {
      type: "source",
      position: Position.Right,
      id: `${id}-response`,
      label: "Response",
    },
  ];

  const llmOptions = [
    { value: "gpt-4", label: "GPT-4" },
    { value: "gpt-3.5", label: "GPT-3.5" },
    { value: "claude-3", label: "Claude 3" },
    { value: "mistral", label: "Mistral" },
  ];

  const handleChange = (value) => {
    setSelectedLLM(value);
    if (onChange) {
      onChange(id, { ...data, llm: value });
    }
  };

  return (
    <NodeWrapper id={id} title="LLM Node" handles={handles} icon={MessageSquare}>
      <div className="space-y-3">
        <Select value={selectedLLM} onValueChange={handleChange}>
          <SelectTrigger className="w-full border-orange-500 focus:ring-2 focus:ring-orange-500">
            <SelectValue placeholder="Select LLM" />
          </SelectTrigger>
          <SelectContent>
            {llmOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </NodeWrapper>
  );
};
