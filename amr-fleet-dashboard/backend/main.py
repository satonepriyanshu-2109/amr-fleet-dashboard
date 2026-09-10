from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


robots = [
    {
        "robot_id": "AMR_01",
        "x": 10.2,
        "y": 5.7,
        "battery": 85,
        "status": "MOVING"
    },
    {
        "robot_id": "AMR_02",
        "x": 4.5,
        "y": 8.1,
        "battery": 72,
        "status": "IDLE"
    },
    {
        "robot_id": "AMR_03",
        "x": 12.3,
        "y": 3.2,
        "battery": 91,
        "status": "MOVING"
    }
]


tasks = []


@app.get("/")
def home():
    return {
        "message": "AMR Fleet Dashboard Backend is running"
    }


@app.get("/api/robots")
def get_robots():
    return robots


@app.get("/api/tasks")
def get_tasks():
    return tasks


@app.post("/api/tasks")
def create_task(task: dict):

    task_id = f"TASK_{len(tasks) + 1:03d}"

    new_task = {
        "task_id": task_id,
        "pickup": task["pickup"],
        "destination": task["destination"],
        "priority": task["priority"],
        "status": "PENDING"
    }

    tasks.append(new_task)

    return new_task


@app.websocket("/ws/fleet")
async def fleet_websocket(websocket: WebSocket):
    await websocket.accept()

    while True:
        # Move robots
        robots[0]["x"] += 0.2
        robots[1]["y"] += 0.1
        robots[2]["x"] -= 0.15

        # Keep robots inside warehouse
        if robots[0]["x"] > 18:
            robots[0]["x"] = 2

        if robots[1]["y"] > 18:
            robots[1]["y"] = 2

        if robots[2]["x"] < 2:
            robots[2]["x"] = 18

        # Slowly decrease battery
        robots[0]["battery"] -= 0.01
        robots[1]["battery"] -= 0.01
        robots[2]["battery"] -= 0.01

        # Send updated data
        await websocket.send_json({
            "type": "robot_update",
            "data": robots
        })

        await asyncio.sleep(1)