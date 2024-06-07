import TicketNum from './TicketNum'

export default function Ticket({ticket}){
   // console.log(a[0],a[1])
return(
   
    <div  style={ {padding:"2rem", fontSize:"30px", border:"1px solid black" ,borderRadius:"2rem", width:"20rem", backgroundColor:"pink"}}>
    
    <h4>Ticket</h4>

{        ticket.map((num,idx)=>(
            <TicketNum num={num} key={idx}  />
        ) )}
    
    </div>
)
}