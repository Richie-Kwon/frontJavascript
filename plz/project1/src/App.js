import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Board from './Board';
import {Route, Router, Routes} from 'react-router-dom';



function App() {     
  
  return (
    <div className="App">
      <nav> 
        <ul>
          <li>
          <a href="/">Home</a> |
          </li>
          <li>
          <a href="profile">Profile</a> |
          </li>
          <li>
          <a href="board">Board</a>
          </li>
        </ul> 
        
      </nav>
      <Routes>

          <Route path= "/profile" component = {Profile} />
          <Route path= "/board" component = {Board} />
 
      </Routes>
        
    </div>

  );
}

export default App;
