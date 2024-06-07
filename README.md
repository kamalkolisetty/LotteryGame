# React Lottery App

This is a simple React application that allows users to input values for `n` and `winningSum`, and displays a `Lottery` component based on these inputs. The project demonstrates how to handle user inputs and apply padding dimension-wise using both inline styles and CSS classes.



## Project Structure

```
react-lottery-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── Lottery.js
│   ├── Ticket.js
│   ├── Helper.js
│   └── ...
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kamalkolisetty/LotteryGame.git
cd LotteryGame
```

2. Install the dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:5173/` to see the application in action.

## Project Details

### App Component

The `App` component manages the state for `n` and `winningSum` and renders the `Lottery` component with these values. It also includes input fields for the user to change the values of `n` and `winningSum`.

```javascript
import React, { useState } from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  const [n, setN] = useState(); 
  const [winningSum, setWinningSum] = useState(); 

  return (
    <div className="padding-container">
      <div className="padding-dimension">
        <label>
          Enter the value of n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            style={{ padding: '5px' }} // Inline padding for the input
          />
        </label>
      </div>
      <div className="padding-dimension">
        <label>
          Enter the value of winningSum:
          <input
            type="number"
            value={winningSum}
            onChange={(e) => setWinningSum(parseInt(e.target.value))}
            style={{ padding: '5px' }} // Inline padding for the input
          />
        </label>
      </div>
      <Lottery n={n} winningSum={winningSum} />
    </div>
  );
}

export default App;
```

### Lottery Component

The `Lottery` component generates a lottery ticket and checks if it is a winning ticket. It includes a button to regenerate a new ticket.

```javascript
import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from './Ticket';

export default function Lottery({ n, winningSum }) {
    let [t, setTicket] = useState(genTicket(n));
    let isWinning = sum(t) === winningSum;

    let regenerate = () => {
        setTicket(genTicket(n));
    };

    return (
        <>
            <Ticket ticket={t} />
            <button onClick={regenerate} style={{ marginTop: "1.5rem", backgroundColor: "#F8D210", padding: "1.5rem" }}>
                Buy New Ticket
            </button>
            <h3>{isWinning && "Congrats!! You have won the lottery.."}</h3>
        </>
    );
}
```

### Helper Functions

The `Helper.js` file contains functions to generate a lottery ticket and calculate the sum of the ticket numbers.

```javascript
// Helper.js
export function genTicket(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10) + 1);
}

export function sum(ticket) {
    return ticket.reduce((acc, num) => acc + num, 0);
}
```

### Ticket Component

The `Ticket` component displays the generated lottery ticket.

```javascript
import React from 'react';

export default function Ticket({ ticket }) {
    return (
        <div>
            <h2>Your Ticket:</h2>
            <div>{ticket.join(', ')}</div>
        </div>
    );
}
```

### CSS Styling

The CSS file defines classes for applying padding to the components:

```css
/* App.css */
.padding-container {
  padding: 20px;
}

.padding-dimension {
  padding: 10px 15px 20px 25px; /* top right bottom left */
}
```
