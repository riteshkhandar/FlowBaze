"use client";

import { DraggableNode } from "../draggable-node";
import { SubmitButton } from "../submit";
import { Card } from "../ui/card";
import { DarkModeToggle } from "../ui/dark-mode-toggle";

import { nodes } from "./nodes-nav";

export const PipelineToolbar = () => {

  return (
    <Card className="bg-card rounded-b-none py-3 px-4 border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="hidden lg:grid grid-flow-col auto-cols-[minmax(60px,1fr)] gap-2 items-center">
            {nodes.map((node) => (
              <DraggableNode
                key={node.type}
                className="w-full"
                type={node.type}
                label={node.label}
                icon={node.icon}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
  


  <div className="flex items-center gap-10">
  {/* <DarkModeToggle /> */}
  <SubmitButton />

  </div>

 

</div>

      </div>
    </Card>
  );
};
