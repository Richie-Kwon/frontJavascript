import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import MainheaderP from './components/Props';
import { useState } from "react"


function App() {
  const [text, setText] = UseState("Hidden");
  const buttonClick = () => {
    text === "Hidden" ? setText("Show") : setText("Hidden")
  }
  return (
    <div className="App">
      {text === "show" && <MainHeaderP text="Facing"></MainHeaderP>}

      {text === "show"
      ? <MainHeaderP text="Facing"></MainHeaderP>
      : <MainHeaderP text="Facing"></MainHeaderP>}
      <button>{text}</button>

    </div>
  );
}

export default App;
