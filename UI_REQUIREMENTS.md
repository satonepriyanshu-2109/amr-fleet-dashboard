
---

# 2. `UI_REQUIREMENTS.md`

```md
# AMR Fleet Dashboard — UI Requirements

## 1. Design Goal

Create a clean, lightweight and professional AMR fleet monitoring dashboard.

The UI should feel like a real industrial fleet monitoring/control interface.

The design should prioritize:

1. Fleet status
2. Warehouse/map visualization
3. Robot information
4. Clear navigation
5. Operational usability

---

# 2. Overall Visual Style

Use the original/basic dashboard style as the primary visual direction.

The interface should be:

- Dark
- Minimal
- Professional
- Industrial
- Technical
- Clean
- Lightweight

Use:

- Dark charcoal/blue-gray backgrounds
- Light text
- Muted secondary text
- Green for healthy/moving states
- Amber/yellow for idle/warning states
- Red only for errors/emergency
- Thin borders
- Moderate corner radius
- Consistent spacing

---

# 3. Typography

Use:

    Manrope

Suggested weights:

    400 — normal text
    500 — secondary information
    600 — headings
    700/800 — important metrics

Typography should remain clean and readable.

---

# 4. DO NOT USE THESE DESIGN DIRECTIONS

Do NOT redesign the dashboard into:

- Burgundy/red-heavy design
- Neon cyberpunk design
- Sci-fi gaming interface
- Excessive glassmorphism
- Excessive gradients
- Excessive glowing effects
- Huge rounded cards
- Excessive shadows
- Overly animated UI
- Generic "AI dashboard" appearance

The interface should look like a serious industrial application.

---

# 5. Navigation

Main navigation:

    Overview
    Fleet
    Map
    Emergency
    History
    Settings

Navigation should be available through a sidebar.

The active page should be clearly indicated.

---

# 6. Sidebar

The sidebar must be collapsible.

Expanded state:

    Logo / Project name

    Overview
    Fleet
    Map
    Emergency
    History
    Settings

Collapsed state:

    Icons only

When collapsed:

- Main content must expand
- Map must become wider
- Available screen space must be used
- Navigation must remain usable
- Tooltips may be used for icons

The transition should be simple and smooth.

---

# 7. Overview Page

Overview is the most important page.

It should provide a quick fleet summary.

Preferred structure:

    ┌──────────────────────────────────────────────┐
    │ Fleet Statistics                             │
    ├──────────────────────────────────────────────┤
    │                                              │
    │              Warehouse Map                  │
    │                                              │
    │                                              │
    ├──────────────────────────────────────────────┤
    │ Fleet Status / Robot Information             │
    └──────────────────────────────────────────────┘

The map should occupy a significant portion of the page.

---

# 8. Overview Statistics

Display compact statistics:

    Total Robots
    Moving
    Idle
    Charging
    Active Tasks
    System Status

Example:

    Total Robots     3
    Moving           2
    Idle             1
    Charging         0
    Active Tasks     2
    System           Online

Statistics should be compact.

Avoid oversized dashboard cards.

---

# 9. Overview — No Task Creation

Do NOT put a large task creation form on the Overview page.

Task/emergency creation belongs on:

    Emergency

The Overview page is primarily for monitoring.

---

# 10. Warehouse Map

The warehouse map should be one of the largest elements on the Overview page.

The map should contain:

- Dark background
- Grid
- Warehouse boundary
- Shelves/obstacles
- Open paths
- AMR markers
- Robot identifiers

Example conceptual layout:

    ┌───────────────────────────────────────┐
    │                                       │
    │  ████        ████                     │
    │  ████   ●01 ████       ●02            │
    │                                       │
    │          open path                    │
    │                                       │
    │  ████              ████               │
    │  ████     ●03      ████               │
    │                                       │
    └───────────────────────────────────────┘

The map should look operational rather than decorative.

---

# 11. Robot Markers

Each AMR should have a clear marker.

Example:

    ● AMR_01

Marker colors may represent:

    MOVING     → Green
    IDLE       → Amber
    CHARGING   → Appropriate neutral/charging indicator
    ERROR      → Red
    OFFLINE    → Gray/Red

Do not rely only on color where possible.

---

# 12. Robot Hover Tooltip

Hovering over a robot should show compact information.

Example:

    AMR_01

    Status: MOVING
    Battery: 85%
    Speed: 1.2 m/s
    Position: 10.2, 5.7
    Task: TASK_102
    AI: ACTIVE

The tooltip should:

- Be compact
- Be readable
- Have clear labels
- Not cover a large part of the map
- Disappear when the pointer leaves the robot

If information is unavailable:

    Speed: --

Do not invent values.

---

# 13. Fleet Page

The Fleet page should provide detailed robot information.

Possible layout:

    AMR_01
    Status: MOVING
    Battery: 85%
    Speed: 1.2 m/s
    Position: 10.2, 5.7
    Task: TASK_102

    AMR_02
    Status: IDLE
    Battery: 72%
    ...

The page should remain usable with more robots.

Prefer compact cards or a clean table/list.

---

# 14. Map Page

The Map page should provide a larger version of the warehouse map.

Priorities:

1. Map
2. Robot positions
3. Robot status
4. Map legend
5. Optional filters

The map should use most of the available screen.

Do not create a 3D map.

Do not add unnecessary mapping libraries.

---

# 15. Emergency Page

The Emergency page is for supervisory/exception tasks.

Possible form:

    Emergency Task

    Pickup Location
    [____________]

    Destination
    [____________]

    Priority
    [____________]

    [ Create Emergency Task ]

Keep the form compact.

The UI should make it clear that this is an emergency/supervisory interface.

It should NOT imply that the dashboard performs fleet coordination.

---

# 16. History Page

Display task/event history.

Possible columns:

    Task ID
    Pickup
    Destination
    Priority
    Status
    Time

Example:

    TASK_001
    A1
    B4
    HIGH
    COMPLETED
    10:42

Use only data actually provided by the backend.

---

# 17. Settings Page

Keep Settings simple.

Possible sections:

    Connection
    Display
    Application

Example:

    Backend
    Connected

    WebSocket
    Connected

    Application
    AMR Fleet Dashboard

Do not create unnecessary settings.

---

# 18. Connection Status

Show the actual connection state.

Connected:

    ● System Online

Connecting:

    ● Connecting...

Disconnected:

    ● Connection Lost

Use green for healthy connection.

Use red only when there is an actual connection/error state.

Do not hardcode an online state.

---

# 19. Loading States

Use simple loading indicators/messages.

Examples:

    Loading fleet...

    Loading tasks...

    Connecting to fleet...

Avoid large loading animations.

---

# 20. Empty States

Examples:

    No robots connected

    No active tasks

    No history available

Keep empty states simple.

---

# 21. Error States

Examples:

    Unable to connect to backend.

    Failed to load fleet data.

    Failed to create emergency task.

Errors should be visible but not visually overwhelming.

---

# 22. Responsive Behavior

Desktop is the primary target.

At smaller widths:

- Sidebar can collapse
- Cards can stack
- Tables can scroll
- Statistics can wrap
- Map should remain usable

Do not allow the UI to break because of smaller screen sizes.

---

# 23. Animation

Use only useful animation.

Allowed:

- Sidebar collapse
- Hover effects
- Small transitions
- Robot movement transitions
- Status transitions

Avoid:

- Constant background animations
- Excessive glow
- Floating decorations
- Large transitions
- Unnecessary motion

---

# 24. Performance

Keep the UI lightweight.

Prefer:

- React state
- CSS
- Small reusable components
- Existing functionality
- Minimal dependencies

Avoid adding heavy libraries without a clear reason.

---

# 25. Component Reuse

Reusable components may include:

    Sidebar
    StatCard
    WarehouseMap
    RobotMarker
    RobotTooltip
    RobotCard
    FleetStatus
    ConnectionStatus
    TaskTable

Reuse components where it improves consistency.

Do not create components unnecessarily for every small element.

---

# 26. Data Handling

The UI should consume real data.

Do not hardcode values such as:

    Battery: 95%
    Status: MOVING
    AI: ACTIVE

unless those values are actually provided by the application.

When optional data is missing:

    Battery: --
    Speed: --
    Task: No active task

---

# 27. Frontend/Backend Boundary

The UI may consume:

    REST API
    WebSocket

The UI must NOT implement:

    ROS 2
    rclpy
    SLAM
    Navigation
    Path planning
    Collision avoidance
    Fleet coordination
    AI decision-making

The frontend displays system information.

---

# 28. Existing Functionality

When modifying the UI, preserve existing working functionality such as:

- WebSocket connection
- Robot updates
- Robot movement
- Warehouse map
- Robot information
- Task fetching
- Task creation
- Task history

Do not rewrite working functionality unnecessarily.

---

# 29. Code Change Philosophy

For every UI request:

1. Inspect the existing implementation.
2. Identify the relevant component/file.
3. Make the smallest required change.
4. Preserve existing functionality.
5. Test the change.
6. Check for console/build errors.

Do not rewrite the whole application for a small UI request.

---

# 30. Visual Priority

The visual hierarchy should generally be:

    1. Fleet status
    2. Warehouse map
    3. Robot status/details
    4. Tasks/events
    5. Secondary information

The dashboard should communicate the state of the fleet within a few seconds.

---

# 31. Final UI Goal

The finished dashboard should look like:

    A clean industrial AMR fleet monitoring system

not:

    A gaming interface
    A cyberpunk interface
    A generic AI dashboard
    A decorative website

The UI should be simple enough to understand quickly during an SIH presentation while still looking professional.

---

# 32. Final Rule

Keep the UI:

    Minimal
    Professional
    Dark
    Lightweight
    Fleet-focused
    Map-focused
    Functional

Preserve the original/basic UI direction.

Do not introduce major visual changes unless explicitly requested.
