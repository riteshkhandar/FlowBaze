import axios from "axios";
import { Play, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useStore } from "./store";
import { Button } from "./ui/button";

export const SubmitButton = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const nodes = useStore((state) => state.getNodes());
  const edges = useStore((state) => state.getEdges());
  const setPipelineStats = useStore((state) => state.setPipelineStats);
  const setStatsDialogOpen = useStore((state) => state.setStatsDialogOpen);
  const isDarkMode = useStore((state) => state.isDarkMode);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/pipelines/parse`;
      const response = await axios.post(url, { nodes, edges });

      setPipelineStats(response.data);
      setStatsDialogOpen(true);
    } catch (error) {
      toast.error("Pipeline Validation Failed", {
        description: error?.message || "Unknown error",
        duration: 5000,
      });
      setPipelineStats(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubmit}
      disabled={isLoading}
      className={`flex items-center gap-2 px-4 h-10 rounded-lg
        bg-gradient-to-r from-orange-500 to-orange-600
    
      
        ${isDarkMode ? "text-gray-200" : "text-white"} ${className}`}
    >
      {isLoading ? (
        <Loader2 className={`animate-spin h-4 w-4 ${isDarkMode ? "text-white" : "text-black"}`} />
      ) : (
        <Play className={`h-4 w-4 ${isDarkMode ? "text-gray-200" : "text-white"}`} />
      )}
      <span>Submit</span>
    </Button>
  );
};
