# Rob The Bobber

A 2D stealth platformer game built with [p5.js](https://p5js.org/). Play as Rob, a robber infiltrating a house full of guards, cameras, and laser gates. Avoid detection, pick locks to open doors, and reach the exit before your score runs out.

---

## Game Overview

**Rob The Bobber** is a browser-based stealth game where you navigate multi-floor levels while avoiding security systems. Your score decreases over time, so speed and strategy matter. The game features 4 progressively challenging levels, plus support for custom player-made levels.

### Core Characters & Elements

| Element | Description |
|---------|-------------|
| **Rob** | The main character you control. Must avoid cameras, guards, and lasers. |
| **Cameras** | Stationary security cameras with a rotating light cone. If Rob enters the light, the level resets. |
| **Guards** | Patrolling enemies that shoot bullets. They cannot pass through locked doors but will traverse open ones. |
| **Lasers** | Laser gates that alternate between yellow (active/dangerous) and green (safe). Cross only when green. |
| **Doors** | Locked doors block progress until lockpicked. Guards and bullets cannot pass through locked doors. |
| **Ladders** | Allow Rob to move between floors vertically. |
| **Finish Line** | The exit point. Reach it to complete the level. |

---

## Features

- **4 built-in levels** with increasing difficulty
- **Lockpick minigame** — time your pick to unlock doors
- **Custom level builder** — create and play your own levels
- **Score system** — score decreases over time; finish quickly for higher scores
- **High score tracking** — top 5 scores saved in `localStorage`
- **Multiple game states** — Play, Pause, Lockpick, Climbing, Caught, Game Over

---

## Tech Stack

- **p5.js** (v1.9.0) — graphics and game loop
- **p5.sound** — audio support
- **Vanilla JavaScript** — game logic and utilities
- **HTML/CSS** — structure and styling

---

## Project Structure

```
Rob_The_Bobber_CS2/
├── index.html              # Main game entry point
├── sketch.js               # Core game logic, level loading, game loop
├── p5.js                   # p5.js library (local)
├── p5.sound.min.js         # p5.sound library (local)
├── styles.css              # Shared styles (referenced from html_files/)
├── txt_files/              # Level map definitions
│   ├── 1.txt               # Level 1
│   ├── 2.txt               # Level 2
│   ├── 3.txt               # Level 3
│   └── 4.txt               # Level 4
├── utils/                  # Game object classes
│   ├── Rob.js              # Player character
│   ├── guard.js            # Guard enemy (patrol + shooting)
│   ├── bullet.js           # Guard projectiles
│   ├── camera.js           # Security cameras with light cone
│   ├── laser.js            # Laser gates
│   ├── door.js             # Lockable doors
│   ├── lockpick.js         # Lockpick minigame
│   ├── ladders.js          # Ladders between floors
│   ├── floor.js            # Floor/platform objects
│   ├── FinishLine.js       # Level exit
│   ├── playermadelevel.js  # Level builder logic
│   └── towerofhell.js      # Additional utilities
└── html_files/             # Additional pages
    ├── index.html          # Home screen
    ├── Instructions.html   # Game instructions
    ├── designprocess.html # Design process & milestones
    ├── playermadelevel_page.html  # Level builder UI
    ├── sample_level.txt    # Sample level format reference
    └── styles.css          # Page styles
```

---

## Installation & Running

No build step is required. The game runs entirely in the browser.

1. **Clone or download** this repository.
2. **Serve the project** via a local web server (required for loading level files):
   - **VS Code:** Use the "Live Server" extension and open `index.html`.
   - **Python:** `python -m http.server 8000` from the project root, then open `http://localhost:8000`.
   - **Node.js:** `npx serve` from the project root.
3. **Open** `index.html` in your browser (or the URL provided by your server).

> **Note:** Opening `index.html` directly as a file (`file://`) may cause level loading to fail due to CORS restrictions. Use a local server for best results.

---

## How to Play

1. **Start** — Press **Space** to begin the level.
2. **Move** — Use WASD or arrow keys to move Rob.
3. **Avoid detection** — Stay out of camera light cones and guard line of sight.
4. **Avoid lasers** — Cross laser gates only when they are **green** (inactive).
5. **Pick locks** — Stand at a locked door and press **Q** to start lockpicking. Press **P** when the moving lock aligns with the pick to unlock.
6. **Use ladders** — Stand on a ladder and press **W** to climb up or **S** to climb down.
7. **Reach the exit** — Touch the finish line to complete the level and advance.

---

## Controls

| Action | Key |
|--------|-----|
| Move left | `A` or `←` |
| Move right | `D` or `→` |
| Climb up ladder | `W` |
| Climb down ladder | `S` |
| Start lockpick | `Q` |
| Pick lock (during minigame) | `P` |
| Start / Resume level | `Space` |

---

## Level Format

Levels are defined in `.txt` files. Each line represents a floor; each character is a 100×200 pixel cell.

| Symbol | Meaning |
|--------|---------|
| `+` | Player spawn |
| `=` | Level exit (finish line) |
| `-` or `_` | Floor (walkable) |
| `.` | Ladder (stairs) |
| `\|` | Door |
| `#` | Camera |
| `$` | Laser gate |
| `@` | Guard |

### Example (Level 1)

```
-+--------
---.--|---
---=-|--.-
```

- Row 1: Spawn on left, floor, exit on right.
- Row 2: Ladder in middle, doors.
- Row 3: Ladder, exit, doors, ladder.

---

## Level Builder

The **Player-Made Level** page (`html_files/playermadelevel_page.html`) lets you design custom levels:

1. Open the Level Builder page.
2. Press **C** to cycle items: Door → Camera → Guard → Stair → Laser.
3. Click grid cells to place the selected item.
4. Press **S** to save. The level is stored in `sessionStorage` and the game redirects to the main game.
5. Your custom level loads as the first level when you start.

---

## Game States

| State | Description |
|-------|-------------|
| `PAUSE` | Level not started. Press Space to begin. |
| `PLAY` | Normal gameplay. |
| `LOCKPICK` | Lockpick minigame active. |
| `CLIMBING` | Rob is climbing a ladder. |
| `CAUGHT` | Rob was detected (camera, laser, or guard). Score set to 0. Press Space to retry. |
| `GAMEOVER` | All levels completed. |

---

## High Scores

The game stores the top 5 scores in `localStorage`. Functions `saveHighScore(score)` and `getHighScores()` handle persistence. High scores are intended to be saved when the game ends (e.g., on `GAMEOVER`).

---

## Development Notes

- **Design Process:** See `html_files/designprocess.html` for milestones and team roles.
- **Instructions:** See `html_files/Instructions.html` for the full instructions sheet.
- **Styles:** `html_files/styles.css` is linked from both the main game and sub-pages.

---

## License

This project appears to be an academic/educational project (CS2). Check with the project authors for licensing terms.
