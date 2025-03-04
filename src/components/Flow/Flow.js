"use client"


import { useCallback, useState } from 'react';
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls, 
  Background
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TextNode from './TextNode';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaFloppyDisk } from 'react-icons/fa6';
 
 
const rfStyle = {
  backgroundColor: '#B8CEFF',
};
 
const initialNodes = [
    {
      id: 'node-1',
      type: 'textUpdater',
      position: { x: 0, y: 0 },
      data: { value: 123 },
    },
    {
      id: 'node-2',
      type: 'output',
      targetPosition: 'top',
      position: { x: 0, y: 200 },
      data: { label: 'node 2' },
    },
    {
      id: 'node-3',
      type: 'output',
      targetPosition: 'top',
      position: { x: 200, y: 200 },
      data: { label: 'node 3' },
    },
  ];

const initialEdges = [
    { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
    { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
  ];


// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextNode };
 
export default function Flow ({}) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );
 
  return (
    <div className="flex-grow h-screen">
        <div className="flex items-center h-12 p-8 gap-2">
          <Link href="/workflows" className="block p-2"><FaChevronLeft /></Link>
          <Button href="/dashboard/reports" className="block p-2">Add action</Button>
          <Button 
          onPress={() => handleAddFlowcondition()} 
          className="p-2"
          >
            Add condition
          </Button>
          <Button 
          onPress={() => handleSaveFlow()} 
          className="p-2"
          startContent={<FaFloppyDisk />}
          >
            Save
            </Button>
        </div>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            selectionOnDrag={true}
            panOnScroll={true}
            panOnScrollSpeed={0.3}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            style={rfStyle}
        >
            <Background />
            <Controls />
        </ReactFlow>
    </div>
  );
}