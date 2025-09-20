import { Zap } from "lucide-react";
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

export const ApiNode = ({ id }) => {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [authType, setAuthType] = useState("None");

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
    <NodeWrapper id={id} title="API Node" handles={handles} icon={Zap}>
      <div className="space-y-3">
        <div className="flex gap-2">
          {/* Method Dropdown */}
          <Select value={method} onValueChange={setMethod}>
            <SelectTrigger className="w-20 border-orange-500 focus:ring-2 focus:ring-orange-500">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
              <SelectItem value="PUT">PUT</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
            </SelectContent>
          </Select>

          {/* Endpoint Input */}
          <Input
            placeholder="https://api.example.com/endpoint"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="flex-1 border-orange-500 focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Authentication Dropdown */}
        <Select value={authType} onValueChange={setAuthType}>
          <SelectTrigger className="border-orange-500 focus:ring-2 focus:ring-orange-500">
            <SelectValue placeholder="Authentication" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None">None</SelectItem>
            <SelectItem value="API Key">API Key</SelectItem>
            <SelectItem value="Bearer Token">Bearer Token</SelectItem>
            <SelectItem value="OAuth">OAuth</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </NodeWrapper>
  );
};
