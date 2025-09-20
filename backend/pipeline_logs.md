
## Request at 2025-09-20 12:59:22

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 5,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 13:06:55

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 5,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 13:21:19

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-2",
      "type": "aggeregate",
      "position": {
        "x": 117.40800825211858,
        "y": 36.67380784834799
      },
      "data": {
        "id": "aggeregate-2",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 13:26:17

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-2",
      "type": "aggeregate",
      "position": {
        "x": 117.40800825211858,
        "y": 36.67380784834799
      },
      "data": {
        "id": "aggeregate-2",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 13:26:26

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 5,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 13:32:52

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 191,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 191,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 191,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 5,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 13:35:15

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "text-1",
      "type": "text",
      "position": {
        "x": 342.4685665902073,
        "y": 33.71936604219127
      },
      "data": {
        "id": "text-1",
        "nodeType": "text"
      },
      "width": 250,
      "height": 149,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 6,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 13:35:21

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -172.5389101140437,
        "y": 179.24213371661102
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 659.2811780461451,
        "y": 278.008318995601
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 131,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1078.2309195146127,
        "y": 250.98104071077725
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 250.01654478935632,
        "y": 279.40602420103085
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -172.70663198525267,
        "y": 395.38960796153947
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": false,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 5,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 14:13:06

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1082.2827914241202,
        "y": 218.56606543471756
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -241.58845444687944,
        "y": 425.1033352979275
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": true,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -28.673638045078718,
        "y": 94.47457459533507
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -407.7996893806727,
        "y": 126.6837129401531
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 14,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 14:49:25

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 14:58:10

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:01:19

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:04:33

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:07:55

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:08:29

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:11:00

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:12:08

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:13:18

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:16:40

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:17:14

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:19:17

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:29:37

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:52:52

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:53:51

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:55:14

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -683.1300372914794,
        "y": 219.05059663711415
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 15:58:27

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": true,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:13:38

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": true,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:25:25

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": true,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:35:21

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:35:30

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:37:46

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -412.37906631779373,
        "y": 76.86943047294807
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:44:10

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:44:42

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 16:46:23

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 19:40:54

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 19:41:07

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 19:41:40

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:08:39

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:09:21

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 20:23:56

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 20:24:11

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -533.3550965359765,
        "y": 246.11835701461467
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-1",
      "type": "filter",
      "position": {
        "x": 710.0545188742061,
        "y": 59.81211195576504
      },
      "data": {
        "id": "filter-1",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": 645.6634215899436,
        "y": 460.4678283911759
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": 163.97799996991017,
        "y": 515.3090420919017
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "code-1",
      "type": "code",
      "position": {
        "x": -88.2023690567032,
        "y": -157.7392594276003
      },
      "data": {
        "id": "code-1",
        "nodeType": "code"
      },
      "width": 250,
      "height": 231,
      "selected": false,
      "dragging": false
    },
    {
      "id": "filter-2",
      "type": "filter",
      "position": {
        "x": 326.17777826288676,
        "y": 95.82177188749887
      },
      "data": {
        "id": "filter-2",
        "nodeType": "filter"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -783.7556393801392,
        "y": -159.33062222690512
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-2",
      "type": "api",
      "position": {
        "x": 201.94275942589297,
        "y": -173.5276906029411
      },
      "data": {
        "id": "api-2",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "code-1",
      "targetHandle": "code-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-code-1code-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 15,
  "num_edges": 6,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:25:04

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": 1180.1366916862848,
        "y": 531.7288929399707
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": true
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -533.3550965359765,
        "y": 246.11835701461467
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input1",
      "id": "reactflow__edge-customInput-1customInput-1-value-aggeregate-1aggeregate-1-input1"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 8,
  "num_edges": 5,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:25:17

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "aggeregate-1",
      "type": "aggeregate",
      "position": {
        "x": 240.56217700050559,
        "y": 259.14666465349353
      },
      "data": {
        "id": "aggeregate-1",
        "nodeType": "aggeregate"
      },
      "width": 250,
      "height": 151,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -533.3550965359765,
        "y": 246.11835701461467
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "aggeregate-1",
      "targetHandle": "aggeregate-1-input2",
      "id": "reactflow__edge-customInput-2customInput-2-value-aggeregate-1aggeregate-1-input2"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "aggeregate-1",
      "sourceHandle": "aggeregate-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-prompt",
      "id": "reactflow__edge-aggeregate-1aggeregate-1-output-llm-1llm-1-prompt"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 7,
  "num_edges": 4,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:25:45

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": 602.8020434572991,
        "y": 219.11802554538514
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 1069.6909653475832,
        "y": 204.1754070615323
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": 101.89140931813046,
        "y": 205.13471147564002
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    },
    {
      "id": "debug-1",
      "type": "debug",
      "position": {
        "x": 259.42643396119445,
        "y": -745.2435005064143
      },
      "data": {
        "id": "debug-1",
        "nodeType": "debug"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "http-1",
      "type": "http",
      "position": {
        "x": 274.9808088793908,
        "y": -445.19762151065123
      },
      "data": {
        "id": "http-1",
        "nodeType": "http"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    },
    {
      "id": "transform-1",
      "type": "transform",
      "position": {
        "x": 172.03112823236867,
        "y": 680.828472430652
      },
      "data": {
        "id": "transform-1",
        "nodeType": "transform"
      },
      "width": 150,
      "height": 22,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "#b1b1b7"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "#b1b1b7"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-customInput-2customInput-2-value-llm-1llm-1-system"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 6,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": false,
  "dag_validation_messages": [],
  "pipeline_validation_messages": [
    "Invalid pipeline: disconnected nodes detected"
  ]
}
```

---

## Request at 2025-09-20 20:26:14

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 21:14:31

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-1",
      "type": "customInput",
      "position": {
        "x": -987.5795513952083,
        "y": 150.7127359896432
      },
      "data": {
        "id": "customInput-1",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-1",
      "type": "llm",
      "position": {
        "x": -47.20267299961813,
        "y": 131.27795671199218
      },
      "data": {
        "id": "llm-1",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "database-1",
      "type": "database",
      "position": {
        "x": -320.5572129713828,
        "y": 394.1991172955219
      },
      "data": {
        "id": "database-1",
        "nodeType": "database"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-1",
      "type": "customOutput",
      "position": {
        "x": 426.4727512262643,
        "y": 137.53798434493342
      },
      "data": {
        "id": "customOutput-1",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "database-1",
      "sourceHandle": "database-1-output",
      "target": "llm-1",
      "targetHandle": "llm-1-system",
      "id": "reactflow__edge-database-1database-1-output-llm-1llm-1-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-1",
      "sourceHandle": "llm-1-response",
      "target": "customOutput-1",
      "targetHandle": "customOutput-1-value",
      "id": "reactflow__edge-llm-1llm-1-response-customOutput-1customOutput-1-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-1",
      "sourceHandle": "customInput-1-value",
      "target": "database-1",
      "targetHandle": "database-1-input",
      "id": "reactflow__edge-customInput-1customInput-1-value-database-1database-1-input"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 21:17:48

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -990.105543138956,
        "y": 231.48897825784238
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -558.6927823927499,
        "y": 248.55049986927423
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": -169.9338256751236,
        "y": 213.20877653130827
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "llm-2",
      "targetHandle": "llm-2-system",
      "id": "reactflow__edge-customInput-2customInput-2-value-llm-2llm-2-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "customOutput-2",
      "targetHandle": "customOutput-2-value",
      "id": "reactflow__edge-llm-2llm-2-response-customOutput-2customOutput-2-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 21:18:52

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -990.105543138956,
        "y": 231.48897825784238
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -558.6927823927499,
        "y": 248.55049986927423
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": -169.9338256751236,
        "y": 213.20877653130827
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": -607.4399869968411,
        "y": 505.69200415585476
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "llm-2",
      "targetHandle": "llm-2-system",
      "id": "reactflow__edge-customInput-2customInput-2-value-llm-2llm-2-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "customOutput-2",
      "targetHandle": "customOutput-2-value",
      "id": "reactflow__edge-llm-2llm-2-response-customOutput-2customOutput-2-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "api-1",
      "targetHandle": "api-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-api-1api-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "api-1",
      "sourceHandle": "api-1-output",
      "target": "customOutput-2",
      "targetHandle": "customOutput-2-value",
      "id": "reactflow__edge-api-1api-1-output-customOutput-2customOutput-2-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 4,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---

## Request at 2025-09-20 21:46:59

### Pipeline Request
```json
{
  "nodes": [
    {
      "id": "customInput-2",
      "type": "customInput",
      "position": {
        "x": -990.105543138956,
        "y": 231.48897825784238
      },
      "data": {
        "id": "customInput-2",
        "nodeType": "customInput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "llm-2",
      "type": "llm",
      "position": {
        "x": -558.6927823927499,
        "y": 248.55049986927423
      },
      "data": {
        "id": "llm-2",
        "nodeType": "llm"
      },
      "width": 250,
      "height": 123,
      "selected": false,
      "dragging": false
    },
    {
      "id": "customOutput-2",
      "type": "customOutput",
      "position": {
        "x": -169.9338256751236,
        "y": 213.20877653130827
      },
      "data": {
        "id": "customOutput-2",
        "nodeType": "customOutput"
      },
      "width": 250,
      "height": 171,
      "selected": false,
      "dragging": false
    },
    {
      "id": "api-1",
      "type": "api",
      "position": {
        "x": -607.4399869968411,
        "y": 505.69200415585476
      },
      "data": {
        "id": "api-1",
        "nodeType": "api"
      },
      "width": 250,
      "height": 171,
      "selected": true,
      "dragging": false
    }
  ],
  "edges": [
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "customInput-2",
      "sourceHandle": "customInput-2-value",
      "target": "llm-2",
      "targetHandle": "llm-2-system",
      "id": "reactflow__edge-customInput-2customInput-2-value-llm-2llm-2-system"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "customOutput-2",
      "targetHandle": "customOutput-2-value",
      "id": "reactflow__edge-llm-2llm-2-response-customOutput-2customOutput-2-value"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "llm-2",
      "sourceHandle": "llm-2-response",
      "target": "api-1",
      "targetHandle": "api-1-input",
      "id": "reactflow__edge-llm-2llm-2-response-api-1api-1-input"
    },
    {
      "type": "custom",
      "deletable": true,
      "style": {
        "strokeWidth": 2,
        "stroke": "hsl(var(--muted-foreground))"
      },
      "markerEnd": {
        "type": "arrowclosed",
        "width": 12,
        "height": 12,
        "color": "hsl(var(--muted-foreground))"
      },
      "animated": true,
      "source": "api-1",
      "sourceHandle": "api-1-output",
      "target": "customOutput-2",
      "targetHandle": "customOutput-2-value",
      "id": "reactflow__edge-api-1api-1-output-customOutput-2customOutput-2-value"
    }
  ]
}
```

### Pipeline Response
```json
{
  "num_nodes": 4,
  "num_edges": 4,
  "is_dag": true,
  "is_pipeline": true,
  "dag_validation_messages": [],
  "pipeline_validation_messages": []
}
```

---
