import './App.scss';
import Header from './components/Header/Header';
import Tickets from './components/Tickets/Tickets';
import team from './data/team.js';

function App() {
  
  return (
    <div className="app">
      <div className='container'>
        <Header mainTitle = "Ticket Tracker"/>
        <Tickets ticketInfoArr = {team} counterTitle = "Ticket Counter"/>
      </div>
    </div>
  );
}

export default App;
