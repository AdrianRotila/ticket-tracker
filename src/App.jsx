import './App.scss';
import Title from './components/Title/Title';
import Ticket from './components/Ticket/Ticket';
import team from './data/team.js';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <Title />
        <div className='all-tickets'>
          <Ticket ticketInfoArr = {team}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
