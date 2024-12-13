import './App.css';
import Hello from './hello';
import EventDemoComponent from './EventsDemoComponents';
import StateDemoComponent from './StateDemo';
import Post from './Post';

function App() {
  let message = "Hello React Again...."
  return (
    <div className="App">
      
      <h2> Hello React</h2>
      <h3>{message}</h3>
      <Hello></Hello>
      <EventDemoComponent/>
      <hr/>
      <StateDemoComponent/>
      <Post/>
    </div>
  );
}

export default App;
