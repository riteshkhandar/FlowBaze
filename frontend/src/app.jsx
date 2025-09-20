import { useEffect } from "react";
import PipelineStats from "./components/pipeline/pipeline-stats";
import { useStore } from "./components/store";

import { PipelineToolbar } from "./components/toolbar/toolbar";
import { PipelineUI } from "./components/ui";
import { Card } from "./components/ui/card";
import { Toaster } from "./components/ui/sonner";

function App() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const isDarkMode = useStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="h-dvh">
      <Card className="h-full flex flex-col m-2 rounded-xl relative overflow-hidden">
        <PipelineToolbar />
        <div className="flex-1 flex min-h-0 relative">
          <PipelineUI />
          
        </div>
      </Card>
      <Toaster />
      <PipelineStats />
    </div>
  );
}

export default App;
