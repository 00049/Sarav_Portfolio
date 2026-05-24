import { Node, Edge } from "@xyflow/react";

export const initialNodes: Node[] = [
  // Client layer
  { id: 'client', type: 'service', position: { x: 340, y: 20 },
    data: { label: 'Client', sublabel: 'Next.js 14 Frontend', icon: 'User', variant: 'client' } },

  // API layer  
  { id: 'fastapi', type: 'service', position: { x: 340, y: 140 },
    data: { label: 'FastAPI', sublabel: 'Async REST API', icon: 'Zap', variant: 'api' } },

  // Auth layer (left branch)
  { id: 'jwt', type: 'service', position: { x: 100, y: 260 },
    data: { label: 'JWT Auth', sublabel: 'Access Control', icon: 'Shield', variant: 'auth' } },

  // Payment layer (right branch)
  { id: 'razorpay', type: 'service', position: { x: 580, y: 260 },
    data: { label: 'Razorpay', sublabel: 'HMAC Verified', icon: 'CreditCard', variant: 'external' } },

  // Task queue layer
  { id: 'celery', type: 'service', position: { x: 220, y: 380 },
    data: { label: 'Celery Workers', sublabel: 'Distributed Queue', icon: 'Layers', variant: 'worker' } },

  { id: 'redis', type: 'service', position: { x: 460, y: 380 },
    data: { label: 'Redis', sublabel: 'Broker + Cache', icon: 'Server', variant: 'worker' } },

  // Scan engines (below celery, spread horizontally)
  { id: 'scan-ssl', type: 'service', position: { x: 60, y: 500 },
    data: { label: 'SSL/TLS Scanner', sublabel: 'Cipher analysis', icon: 'Shield', variant: 'worker' } },

  { id: 'scan-dns', type: 'service', position: { x: 220, y: 500 },
    data: { label: 'DNS Scanner', sublabel: 'SPF/DMARC', icon: 'Globe', variant: 'worker' } },

  { id: 'scan-port', type: 'service', position: { x: 380, y: 500 },
    data: { label: 'Port Scanner', sublabel: 'Open port intel', icon: 'Zap', variant: 'worker' } },

  // Storage layer
  { id: 'postgres', type: 'service', position: { x: 220, y: 620 },
    data: { label: 'PostgreSQL', sublabel: 'Alembic migrations', icon: 'Database', variant: 'storage' } },

  // AI layer
  { id: 'claude', type: 'service', position: { x: 460, y: 620 },
    data: { label: 'Claude API', sublabel: 'LLM report gen', icon: 'Brain', variant: 'external' } },

  // Output layer
  { id: 'report', type: 'service', position: { x: 340, y: 740 },
    data: { label: 'Report Delivery', sublabel: 'Gated by subscription', icon: 'Layers', variant: 'api' } },

  // Group labels
  { id: 'label-auth', type: 'groupLabel', position: { x: 60, y: 240 },
    data: { label: 'Auth Layer' } },
  { id: 'label-scan', type: 'groupLabel', position: { x: 60, y: 480 },
    data: { label: 'Scan Engines (Concurrent)' } },
  { id: 'label-data', type: 'groupLabel', position: { x: 60, y: 600 },
    data: { label: 'Data + AI Layer' } }
];

export const initialEdges: Edge[] = [
  { id: 'e1', source: 'client', target: 'fastapi', type: 'animatedData', data: { label: 'HTTP Request', speed: 'normal' } },
  { id: 'e2', source: 'fastapi', target: 'jwt', type: 'animatedData', data: { label: 'Verify token', speed: 'fast' } },
  { id: 'e3', source: 'fastapi', target: 'razorpay', type: 'animatedData', data: { label: 'Payment hook', speed: 'slow' } },
  { id: 'e4', source: 'fastapi', target: 'celery', type: 'animatedData', data: { label: 'Dispatch jobs', speed: 'normal' } },
  { id: 'e5', source: 'celery', target: 'redis', type: 'animatedData', data: { label: 'Queue broker', speed: 'fast' } },
  { id: 'e6', source: 'celery', target: 'scan-ssl', type: 'animatedData', data: { speed: 'normal' } },
  { id: 'e7', source: 'celery', target: 'scan-dns', type: 'animatedData', data: { speed: 'normal' } },
  { id: 'e8', source: 'celery', target: 'scan-port', type: 'animatedData', data: { speed: 'normal' } },
  { id: 'e9', source: 'scan-ssl', target: 'postgres', type: 'animatedData', data: { label: 'Persist results', speed: 'slow' } },
  { id: 'e10', source: 'scan-dns', target: 'postgres', type: 'animatedData', data: { speed: 'slow' } },
  { id: 'e11', source: 'scan-port', target: 'postgres', type: 'animatedData', data: { speed: 'slow' } },
  { id: 'e12', source: 'postgres', target: 'claude', type: 'animatedData', data: { label: 'Raw findings', speed: 'slow' } },
  { id: 'e13', source: 'claude', target: 'report', type: 'animatedData', data: { label: 'Business report', speed: 'normal' } },
  { id: 'e14', source: 'postgres', target: 'report', type: 'animatedData', data: { speed: 'slow' } },
];

export const phishSimNodes: Node[] = [
  // Client layer
  { id: 'client', type: 'service', position: { x: 340, y: 20 },
    data: { label: 'Vite Frontend', sublabel: 'React Dashboard', icon: 'LayoutTemplate', variant: 'client' } },

  // API layer  
  { id: 'fastapi', type: 'service', position: { x: 340, y: 140 },
    data: { label: 'FastAPI Gateway', sublabel: 'Async REST API', icon: 'Zap', variant: 'api' } },

  // Task queue layer
  { id: 'redis', type: 'service', position: { x: 180, y: 260 },
    data: { label: 'Redis', sublabel: 'Message Broker', icon: 'Server', variant: 'worker' } },
    
  { id: 'celery', type: 'service', position: { x: 180, y: 380 },
    data: { label: 'Celery Worker', sublabel: 'Async Execution', icon: 'Layers', variant: 'worker' } },

  // External / Target Layer
  { id: 'smtp', type: 'service', position: { x: 180, y: 500 },
    data: { label: 'SMTP Service', sublabel: 'Email Dispatch', icon: 'Mail', variant: 'external' } },

  { id: 'target', type: 'service', position: { x: 340, y: 500 },
    data: { label: 'Target Inbox', sublabel: 'Victim', icon: 'User', variant: 'external' } },

  // Storage layer
  { id: 'postgres', type: 'service', position: { x: 500, y: 260 },
    data: { label: 'PostgreSQL', sublabel: 'Campaign Data & Telemetry', icon: 'Database', variant: 'storage' } },

  // Group labels
  { id: 'label-async', type: 'groupLabel', position: { x: 40, y: 240 },
    data: { label: 'Async Queue System' } },
  { id: 'label-ext', type: 'groupLabel', position: { x: 40, y: 480 },
    data: { label: 'External Services' } }
];

export const phishSimEdges: Edge[] = [
  { id: 'e1', source: 'client', target: 'fastapi', type: 'animatedData', data: { label: 'Launch Campaign', speed: 'normal' } },
  { id: 'e2', source: 'fastapi', target: 'postgres', type: 'animatedData', data: { label: 'Save details', speed: 'fast' } },
  { id: 'e3', source: 'fastapi', target: 'redis', type: 'animatedData', data: { label: 'Enqueue tasks', speed: 'fast' } },
  { id: 'e4', source: 'redis', target: 'celery', type: 'animatedData', data: { label: 'Consume tasks', speed: 'fast' } },
  { id: 'e5', source: 'celery', target: 'smtp', type: 'animatedData', data: { label: 'Send emails', speed: 'normal' } },
  { id: 'e6', source: 'smtp', target: 'target', type: 'animatedData', data: { label: 'Spoofed email', speed: 'normal' } },
  { id: 'e7', source: 'target', target: 'fastapi', type: 'animatedData', data: { label: '1x1 Pixel Tracker', speed: 'fast' } },
  { id: 'e8', source: 'celery', target: 'postgres', type: 'animatedData', data: { label: 'Update progress', speed: 'slow' } },
];
