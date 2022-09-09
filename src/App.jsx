import './App.scss';
import Tickets from './components/Tickets/Tickets';

function App() {
  
  return (
    <div className="app">
      <div className='container'>
        <Tickets counterTitle = "Ticket Counter"/>
      </div>
    </div>
  );
}

export default App;
