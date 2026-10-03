# 🚀 PathWise Minimum Route Optimizer

A lightweight JavaScript project demonstrating how **bottom-up Dynamic Programming** can efficiently determine the minimum-cost path through a layered decision structure while using only linear extra memory.

---

## 📖 Project Overview

Many real-world planning problems involve moving through multiple stages while minimizing overall cost.

This project models those situations using a layered structure where every decision connects to only two possible choices in the next stage. The optimizer computes the cheapest complete route from the starting point to the destination.

---

## 🌍 Real-World Concept

Imagine a company planning a multi-stage logistics process.

Each warehouse level contains different transportation costs.

At every stage, a shipment may continue to one of two nearby distribution centers.

The objective is to determine the overall least expensive delivery route.

Instead of evaluating every possible path, this optimizer calculates the answer efficiently using Dynamic Programming.

---

## 💡 Core Concept

The project uses **Bottom-Up Dynamic Programming**.

Rather than exploring every possible route recursively, it starts from the final stage and gradually builds the optimal solution upward.

Each position stores:

> Current Cost + Minimum Cost of Reachable Next Positions

Eventually only one value remains—the globally optimal route cost.

---

## ⚙️ How the System Works

1. Copy the final layer into a working array.
2. Move upward one layer at a time.
3. For every position:
   - Compare the two reachable child paths.
   - Select the smaller one.
   - Add the current cost.
4. Continue until the first layer.
5. Return the minimum total cost.

---

## 🧠 Algorithm Used

| Algorithm | Purpose |
|------------|---------|
| Bottom-Up Dynamic Programming | Computes optimal path efficiently |
| Array | Stores rolling minimum costs |

---

## 🔄 Step-by-Step Logic

```text
Bottom Layer
↓
Initialize DP array

Move Up
↓
Choose smaller adjacent child
↓
Update current cost

Repeat
↓
Reach Top
↓
Return Minimum Path
```

---

## ✨ Key Features

- 📈 Bottom-up optimization
- ⚡ Linear extra memory
- 🧩 Layer-by-layer computation
- 📊 Efficient path evaluation
- 🧠 Dynamic Programming example
- ✅ Clean JavaScript implementation

---

## 📌 Example

### Input

```javascript
[
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]
```

### Output

```text
11
```

### Explanation

Optimal path:

```text
2
↓
3
↓
5
↓
1

Total = 11
```

---

## ⏱ Complexity

| Metric | Complexity |
|---------|------------|
| Time | O(n²) |
| Extra Space | O(n) |

---

## 🛠 Technologies Used

- JavaScript (ES6)
- Dynamic Programming
- Arrays
- Node.js

---

## 📂 Project Structure

```text
PathWise-Minimum-Route-Optimizer
│
├── README.md
├── optimizer.js
└── examples.md
```

---

## ▶️ How to Run

Clone the repository

```bash
git clone https://github.com/mirhamzarahman/PathWise-Minimum-Route-Optimizer.git
```

Go into the project

```bash
cd PathWise-Minimum-Route-Optimizer
```

Run

```bash
node optimizer.js
```

---

## 🎯 Learning Outcomes

This project demonstrates:

- Bottom-Up Dynamic Programming
- Rolling Array Optimization
- Memory-efficient computation
- Layered graph optimization
- Path minimization techniques
- Algorithmic problem decomposition

---

## 🚀 Possible Future Improvements

- Multiple destination support
- Route visualization
- Weighted graph extension
- Interactive web interface
- Performance benchmarking
- JSON input support

---

## 📄 License

This project is released under the MIT License.

Feel free to use, modify, and learn from it.
