import './App.css';
import Hello from './hello';
// import EventDemoComponent from './EventsDemoComponents';
import StateDemoComponent from './StateDemo';
import AxiosGetDemo from './components/AxiosDemo/AxiosGetDemo'
import ToDoList from './components/TodoList/ToDoList'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 



function App() {
  let message = "Hello React Again...."
  return (
   <Router>
    <div className='app'>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/hello' element={<Hello/>}/>
      <Route path='/sdc' element={<StateDemoComponent/>}/>
      <Route path='/getposts' element={<AxiosGetDemo/>}/>
       <Route path ='/todoList' element = {<ToDoList/>}/>
    </Routes>
   </Router>
  );
}

export default App;
