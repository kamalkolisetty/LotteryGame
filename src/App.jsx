import React, { useState } from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  const [n, setN] = useState(); // Default value is 2
  const [winningSum, setWinningSum] = useState(); // Default value is 10

  return (
   
      <div style={{paddingLeft:"8rem",paddingRight:"8rem",paddingTop:"1.6rem",paddingBottom:"1.8rem", backgroundColor:"#82FDC4" ,fontSize:"1rem",borderRadius:"20px" , marginTop:"2px" }}>
         <h1 style={{marginBottom:""}} >Lottery Game!</h1>
       <div style={{fontSize:"1.1rem"}} >
        <label>
        Enter the value of n: 
          <input
            type="number"
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
           
          />
       </label>
    <br />
    <br />
        <label>
          Enter the value of winningSum:   <input
            type="number"
            value={winningSum}
            onChange={(e) => setWinningSum(parseInt(e.target.value))}
          />
        </label>
        </div>
     <br />
     <br />
      <Lottery n={n} winningSum={winningSum} />
    </div>
  );
}

export default App;
