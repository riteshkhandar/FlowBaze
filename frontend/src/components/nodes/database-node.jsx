import { Database } from "lucide-react";
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

export const DatabaseNode = ({ id }) => {
  const [query, setQuery] = useState("");
  const [dbType, setDbType] = useState("PostgreSQL");

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
      label: "Result",
    },
  ];

  return (
    <NodeWrapper id={id} title="Database Node" handles={handles} icon={Database}>
      <div className="space-y-3">
        {/* Database Type Dropdown */}
        <Select value={dbType} onValueChange={setDbType}>
          <SelectTrigger className="w-full border-orange-500 focus:ring-2 focus:ring-orange-500">
            <SelectValue placeholder="Database Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
            <SelectItem value="MySQL">MySQL</SelectItem>
            <SelectItem value="MongoDB">MongoDB</SelectItem>
            <SelectItem value="SQLite">SQLite</SelectItem>
          </SelectContent>
        </Select>

        {/* SQL Query Input */}
        <Input
          placeholder="Enter SQL query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-orange-500 focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </NodeWrapper>
  );
};
