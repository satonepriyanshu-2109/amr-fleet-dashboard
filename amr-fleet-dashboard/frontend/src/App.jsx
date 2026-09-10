import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [robots, setRobots] = useState([]);


  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [taskMessage, setTaskMessage] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/fleet");

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "robot_update") {
        setRobots(message.data);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, []);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, []);

  const movingRobots = robots.filter(
    (robot) => robot.status === "MOVING"
  ).length;

  const idleRobots = robots.filter(
    (robot) => robot.status === "IDLE"
  ).length;

  return (
    <div className="dashboard">

      <header className="header">
        <div>
          <h1>AMR Fleet Dashboard</h1>
          <p>Smart Warehouse Fleet Monitoring</p>
        </div>

        <div className="connection">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>


      <section className="overview">

        <div className="overview-card">
          <h3>Total Robots</h3>
          <strong>{robots.length}</strong>
        </div>

        <div className="overview-card">
          <h3>Moving</h3>
          <strong>{movingRobots}</strong>
        </div>

        <div className="overview-card">
          <h3>Idle</h3>
          <strong>{idleRobots}</strong>
        </div>

      </section>


      {/* WAREHOUSE MAP */}

      <section className="warehouse-section">

        <h2>Warehouse Map</h2>

        <div className="warehouse-map">

          {/* Warehouse shelves */}

          <div className="shelf shelf-1"></div>
          <div className="shelf shelf-2"></div>
          <div className="shelf shelf-3"></div>
          <div className="shelf shelf-4"></div>

          {/* Robots */}

          {robots.map((robot) => (

            <div
              key={robot.robot_id}
              className="robot-marker"
              style={{
                left: `${robot.x * 5}%`,
                bottom: `${robot.y * 5}%`
              }}
              title={robot.robot_id}
            >
              <div className="robot-icon">
                🤖
              </div>

              <span>{robot.robot_id}</span>
            </div>

          ))}

        </div>

      </section>


      {/* ROBOT DETAILS */}



      <section className="manager-section">
        <h2>Manager Task Control</h2>

        <div className="manager-card">

          <div className="form-group">
            <label>Pickup Location</label>

            <input
              type="text"
              placeholder="Example: A1"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Destination</label>

            <input
              type="text"
              placeholder="Example: B3"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Priority</label>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </select>
          </div>

          <button
  className="create-task-button"
  onClick={async () => {

    if (!pickup || !destination) {
      setTaskMessage("Please enter pickup and destination.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pickup: pickup,
          destination: destination,
          priority: priority
        })
      });

      const data = await response.json();

      setTaskMessage(
        `${data.task_id} created successfully`
      );

      setPickup("");
      setDestination("");

    } catch (error) {
      console.error(error);
      setTaskMessage("Failed to create task.");
    }
  }}
>
  Create Task
</button>

{taskMessage && (
  <p className="task-message">
    {taskMessage}
  </p>
)}

        </div>
      </section>

      <section className="task-history-section">
        <h2>Task History</h2>

        <div className="task-table">

          <div className="task-row task-header">
            <span>Task ID</span>
            <span>Pickup</span>
            <span>Destination</span>
            <span>Priority</span>
            <span>Status</span>
          </div>

          {tasks.length === 0 ? (
            <div className="no-tasks">
              No tasks created yet
            </div>
          ) : (
            tasks.map((task) => (
              <div className="task-row" key={task.task_id}>
                <span>{task.task_id}</span>
                <span>{task.pickup}</span>
                <span>{task.destination}</span>
                <span>{task.priority}</span>
                <span>{task.status}</span>
              </div>
            ))
          )}

        </div>
      </section>



      <section>

        <h2>Robot Fleet</h2>

        <div className="robot-grid">

          {robots.map((robot) => (

            <div className="robot-card" key={robot.robot_id}>

              <div className="robot-header">

                <h3>{robot.robot_id}</h3>

                <span
                  className={
                    robot.status === "MOVING"
                      ? "status moving"
                      : "status idle"
                  }
                >
                  {robot.status}
                </span>

              </div>


              <div className="robot-info">

                <div>
                  <span>Position</span>

                  <strong>
                    X: {robot.x.toFixed(2)}
                    <br />
                    Y: {robot.y.toFixed(2)}
                  </strong>
                </div>


                <div>
                  <span>Battery</span>

                  <strong>
                    {robot.battery.toFixed(0)}%
                  </strong>
                </div>

              </div>


              <div className="battery-container">

                <div
                  className="battery-bar"
                  style={{
                    width: `${robot.battery}%`
                  }}
                ></div>

              </div>


              <div className="robot-footer">

                <span>Live Telemetry</span>

                <span className="live-dot"></span>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default App;