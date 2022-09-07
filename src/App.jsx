import './App.scss';
import Title from './components/Title/Title';
import Ticket from './components/Ticket/Ticket';
import team from './data/team.js';

function App() {
  
  return (
    <div className="app">
      <div className='container'>
        <Title mainTitle = "Ticket Tracker"/>
        <Ticket ticketInfoArr = {team} counterTitle = "Ticket Counter"/>
      </div>
    </div>
  );
}

export default App;
