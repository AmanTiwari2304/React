import { useState } from "react";
// import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3, winCondition}) {
    const [ticket, setTicket] = useState(() => genTicket(n));
    const isWinning = winCondition(ticket);

    const generateNewTicket = () => {
        setTicket(genTicket(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={generateNewTicket}>Generate New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
            
        </div>
    );
}