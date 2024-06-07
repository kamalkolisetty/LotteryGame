import { useState } from "react"
import { genTicket,sum } from "./Helper"
import Ticket from './Ticket'
export default function Lottery({n,winningSum}){
   
    

    let [t,setTicket]=useState(genTicket(n))

    let isWinning = sum(t)===winningSum;

    let regenerate=()=>{
        setTicket(genTicket(n))
    }


    return (
        <>
        
        <Ticket  ticket={t} />
         <button onClick={regenerate} style={{marginTop:"1.5rem", backgroundColor:"#F8D210", padding:"1.5rem"}} >Buy New Ticket</button>
         <h3>{isWinning &&"Congrats!! u hav won d lottery.." } </h3>
        
        </>
    )
}