import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Lottery from './Lottery'
import LudoBoard from './LudoBoard'
import Ticket from './Ticket'
import TodoList from './TodoList'


function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
