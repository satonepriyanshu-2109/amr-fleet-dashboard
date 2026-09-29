# AMR Fleet Dashboard — Project Context

## 1. Project Overview

Project Name:

AMR Fleet Dashboard

Repository:

https://github.com/satonepriyanshu-2109/amr-fleet-dashboard

Hackathon:

Smart India Hackathon (SIH) 2026

Problem Statement:

SIH26123 — Edge-AI Based Distributed Fleet Coordination for Autonomous Mobile Robots (AMRs) in Smart Warehouses

Organization:

Bharat Electronics Limited (BEL)

Theme:

Software / Robotics & Drones

---

## 2. Purpose of This Repository

This repository contains the web-based dashboard for monitoring and supervising a fleet of Autonomous Mobile Robots (AMRs).

The dashboard is intended to provide a clear interface for:

- Monitoring AMR fleet status
- Visualizing AMR positions
- Viewing warehouse/map information
- Viewing robot telemetry
- Viewing task information
- Viewing task/event history
- Providing an emergency/supervisory task interface
- Monitoring system/backend connection status

The dashboard should be suitable for an SIH demonstration and presentation.

---

# 3. IMPORTANT — MY RESPONSIBILITY

My responsibility in this project is ONLY:

## Frontend UI / Dashboard

I am responsible for:

- React frontend
- Dashboard layout
- Navigation
- Sidebar
- Overview page
- Fleet page
- Warehouse/map visualization
- Robot visualization
- Robot information
- Fleet status
- Telemetry display
- Emergency page/interface
- History page
- Settings page
- UI interactions
- Frontend state required for the UI
- Consuming existing backend REST/WebSocket data
- Frontend error/loading/connection states
- UI/UX improvements

The main goal is to create a clean, professional and functional AMR fleet dashboard.

---

# 4. OUT OF SCOPE

The following are NOT my responsibility.

Do not implement or modify these unless I explicitly request it:

- ROS 2
- rclpy
- ROS 2 nodes
- ROS 2 topics
- ROS 2 bridge
- Gazebo
- Isaac Sim
- AMR simulation
- Robot hardware
- Robot sensors
- Motor control
- SLAM
- Localization algorithms
- Navigation
- Path planning
- Collision avoidance
- Fleet coordination algorithms
- Distributed task allocation
- Edge-AI algorithms
- AI agents
- Robot control logic
- Physical robot communication
- Robotics backend architecture

These belong to other parts of the overall SIH project.

---

# 5. MY ROLE IN THE OVERALL SYSTEM

The overall SIH project may contain robotics, AI, simulation and backend components.

My role is the frontend dashboard layer.

Conceptually:

    Robotics / Backend System
              |
              | API / WebSocket data
              v
    ┌─────────────────────────┐
    │    AMR Fleet Dashboard  │
    │                         │
    │       React UI          │
    └─────────────────────────┘
              |
              v
        User / Judge / Operator

The dashboard consumes information from the existing system.

The dashboard does NOT implement the robotics intelligence that generates this information.

---

# 6. Frontend Technology

The frontend uses:

- React
- Vite
- JavaScript
- CSS

Preferred font:

- Manrope

The frontend should remain lightweight.

Avoid unnecessary libraries and complex architecture.

---

# 7. Current Backend Dependency

A FastAPI backend currently exists as the data source for the prototype.

The frontend may communicate with it using:

- REST API
- WebSocket

Current WebSocket:

    ws://127.0.0.1:8000/ws/fleet

Current REST endpoints:

    GET  /api/robots
    GET  /api/tasks
    POST /api/tasks

These endpoints are part of the current prototype and may change later.

---

# 8. Backend Boundary

The frontend communicates with the backend.

Correct:

    React
      ↓
    Backend API / WebSocket
      ↓
    Data

The frontend should NOT directly communicate with:

    React
      ↓
    ROS 2 / rclpy / robot hardware

The dashboard should remain independent of robotics implementation details.

---

# 9. Important API Rule

Do not invent backend endpoints just to make a UI feature work.

If a requested UI feature requires backend data that does not currently exist:

1. Identify the required data.
2. Use an existing data source if possible.
3. Clearly identify any missing backend requirement.
4. Do not silently create unrelated backend architecture.

---

# 10. Current Frontend Functionality

The existing prototype may already contain:

- React dashboard
- WebSocket connection
- Robot data
- Robot movement visualization
- Warehouse grid map
- Robot cards
- Fleet information
- Task fetching
- Task creation
- Task history

When improving the UI:

- Preserve working functionality.
- Reuse existing code where practical.
- Avoid unnecessary rewrites.
- Do not remove working functionality accidentally.

---

# 11. Dashboard Navigation

The preferred navigation is:

    Overview
    Fleet
    Map
    Emergency
    History
    Settings

Each section should have a clear purpose.

---

# 12. Overview

The Overview page is the primary dashboard.

It should provide an immediate understanding of the fleet.

Main elements:

- Fleet statistics
- Large warehouse/grid map
- Fleet status
- Robot positions
- Connection/system status

The Overview page should NOT contain a large task-creation form.

---

# 13. Fleet

The Fleet page provides detailed information about AMRs.

Possible information:

- Robot ID
- Status
- Battery
- Position
- Speed
- Current task
- AI status
- Connection state

Only display information that is actually available.

---

# 14. Map

The Map page focuses primarily on the warehouse visualization.

It may display:

- Warehouse boundary
- Grid
- Shelves/obstacles
- Open paths
- AMR positions
- Robot IDs
- Map legend
- Selected robot information

The map should remain a simple operational visualization.

---

# 15. Emergency

The Emergency page is a separate supervisory interface.

It may allow a manager/operator to provide an emergency task such as:

- Pickup location
- Destination
- Priority

The dashboard sends the request to the available backend.

The dashboard does NOT perform fleet coordination itself.

---

# 16. History

The History page displays available task/event history.

Possible information:

- Task ID
- Pickup
- Destination
- Priority
- Status
- Timestamp if available

Only display data that exists.

Do not invent historical records.

---

# 17. Settings

The Settings page should remain lightweight.

Possible information:

- Backend connection
- WebSocket connection
- Application information
- Display preferences

Do not create a complicated configuration system unless explicitly requested.

---

# 18. Robot Data

The UI may receive robot data similar to:

```json
{
  "robot_id": "AMR_01",
  "x": 10.2,
  "y": 5.7,
  "battery": 85,
  "speed": 1.2,
  "status": "MOVING",
  "current_task": "TASK_102",
  "ai_status": "ACTIVE"
}
