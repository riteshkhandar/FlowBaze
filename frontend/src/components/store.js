import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    MarkerType,
} from "reactflow";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const DEFAULT_MARKER = {
  type: MarkerType.ArrowClosed,
  width: 12,
  height: 12,
  color: "hsl(var(--muted-foreground))",
};

export const useStore = create(
  persist(
    (set, get) => ({
      // State
      nodes: [],
      edges: [],
      nodeIDs: {},
      pipelineStats: null,
      isStatsDialogOpen: false,
      validationMessages: [],
      showConfetti: false,
      isMenuOpen: false,
      isDarkMode: false,

      // Getters
      getNodes: () => get().nodes,
      getEdges: () => get().edges,
      getNodeID: (type) => {
        const newIDs = { ...get().nodeIDs };
        if (newIDs[type] === undefined) {
          newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({ nodeIDs: newIDs });
        return `${type}-${newIDs[type]}`;
      },

      // Node operations
      addNode: (node) => {
        set({
          nodes: [...get().nodes, node],
        });
      },
      onNodesChange: (changes) => {
        set({
          nodes: applyNodeChanges(changes, get().nodes),
        });
      },
      updateNodeField: (nodeId, fieldName, fieldValue) => {
        set({
          nodes: get().nodes.map((node) => {
            if (node.id === nodeId) {
              node.data = { ...node.data, [fieldName]: fieldValue };
            }
            return node;
          }),
        });
      },
      removeNode: (nodeId) => {
        set({
          nodes: get().nodes.filter((node) => node.id !== nodeId),
          edges: get().edges.filter(
            (edge) => edge.source !== nodeId && edge.target !== nodeId,
          ),
        });
      },

      // Edge operations
      onEdgesChange: (changes) => {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },
      setEdges: (updater) => {
        set({
          edges: typeof updater === "function" ? updater(get().edges) : updater,
        });
      },
      onConnect: (connection) => {
        set({
          edges: addEdge(
            {
              ...connection,
              type: "custom",
              animated: true,
              deletable: true,
              markerEnd: DEFAULT_MARKER,
            },
            get().edges,
          ),
        });
      },
      setPipelineStats: (stats) =>
        set({
          pipelineStats: stats,
          showConfetti: stats?.is_dag && stats?.is_pipeline,
        }),
      setStatsDialogOpen: (isOpen) =>
        set((state) => ({
          isStatsDialogOpen: isOpen,
          pipelineStats: isOpen ? state.pipelineStats : null,
          showConfetti: isOpen ? state.showConfetti : false,
        })),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "pipeline-storage",
      partialize: (state) => ({
        nodes: state.nodes,
        edges: state.edges,
        nodeIDs: state.nodeIDs,
        isDarkMode: state.isDarkMode,
      }),
    },
  ),
);
