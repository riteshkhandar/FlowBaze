import { FileText } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { useNodeHandles } from "../../hooks/useNodeHandles";
import { AutosizeTextarea } from "../ui/autosize-textarea";
import { NodeWrapper } from "./node-wrapper";

const extractVariables = (text) => {
  const variableRegex = /{{(.*?)}}/g;
  return Array.from(text.matchAll(variableRegex))
    .map((match) => match[1].trim())
    .filter(Boolean);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const updateNodeInternals = useUpdateNodeInternals();

  const variables = useMemo(() => extractVariables(text), [text]);
  const handles = useNodeHandles(id, variables);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, variables, updateNodeInternals]);

  return (
    <NodeWrapper id={id} title="Text Node" icon={FileText} handles={handles}>
      <AutosizeTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border-orange-500 focus:ring-2 focus:ring-orange-500"
        placeholder="Enter text with variables like {{variable}}"
      />
    </NodeWrapper>
  );
};
