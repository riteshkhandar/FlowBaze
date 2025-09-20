# FlowBlaze

FlowBlaze is a modern frontend React application allowing users to visually design and manage data flow pipelines using an intuitive node-based interface. It integrates with a Python/FastAPI backend for validating the pipeline structure.

---

## About The Project

- **Frontend:** Built using React with ReactFlow for the drag-and-drop node graph visualization and interaction.
- **Backend:** Python with FastAPI used for validating pipelines by checking nodes, edges, and DAG integrity.
- **Database:** No direct database connection in this app; backend is limited to validation endpoint.
- **Features:**  
  - Create nodes/edges representing workflow components.  
  - Submit pipelines to backend for validation.  
  - Receive alerts showing number of nodes, edges, and DAG validation status.  

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)
- Python 3.x (for running backend)
- Uvicorn (ASGI server for FastAPI backend)

### Installation & Running

#### Frontend
Navigate to the `/frontend` directory and run: npm start command


Open [http://localhost:3000] in your browser to view the app. The page will reload on code changes.

#### Backend
Navigate to the `/backend` directory and run: uvicorn main:app --reload


This launches the backend API server with live reload for changes.

---

## Usage

1. Create your pipeline using the node-based interface on the frontend.
2. Click the submit button which sends the pipeline data (nodes and edges) to the backend.
3. Receive an alert showing the number of nodes, edges, and whether the pipeline forms a Directed Acyclic Graph (DAG).

---

## Available Scripts

In the `/frontend` directory:

- `npm start` - Start the frontend development server.
- `npm run build` - Build the frontend for production.
- `npm test` - Run tests.

---

## Learn More

- [React documentation](https://reactjs.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [FastAPI documentation](https://fastapi.tiangolo.com/)

---



---



