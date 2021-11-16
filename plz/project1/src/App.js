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
  const onChange = (e) =>{
    const inputText = e.target.value;
    setText(inputText);
  }
  return (
    // <div className="App">
    //   {text === "show" && <MainHeaderP text="Facing"></MainHeaderP>}

    //   {text === "show"
    //   ? <MainHeaderP text="Facing"></MainHeaderP>
    //   : <MainHeaderP text="Facing"></MainHeaderP>}
    //   <button>{text}</button>

    // </div>

    <div className="App">

      <h1>{text}</h1>

      <input onChange= {onChange}> </input>
      {/* <input onChange= {(e)=> {onChange(e)}}> </input> */}



    </div>



  );
}

export default App;
