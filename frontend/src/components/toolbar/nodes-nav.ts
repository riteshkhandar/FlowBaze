import {
    ArrowRight,
    Code,
    Database,
    FileText,
    Filter,
    Layers,
    LogIn,
    MessageSquare,
    Zap,
} from "lucide-react";

export const nodes = [
  { type: "customInput", label: "Input", icon: LogIn },
  { type: "llm", label: "LLM", icon: MessageSquare },
  { type: "customOutput", label: "Output", icon: ArrowRight },
  { type: "text", label: "Text", icon: FileText },
  { type: "aggeregate", label: "Aggregate", icon: Layers },
  { type: "database", label: "Database", icon: Database },
  { type: "filter", label: "Filter", icon: Filter },
  { type: "api", label: "API", icon: Zap },
  { type: "code", label: "Code", icon: Code },
];
