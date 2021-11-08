 // functional components

//  const rootContainer = document.getElementById('react-root');
//  const rootContainer2 = document.querySelector('#react-root');

 function hellobutton(){
     const [isClick, setClickState] =React.useState(false);
     const text = isClick ? 'Bye world' : 'Hello world';
     return(
         <button onClick={()=>setClickState(!isClick)}>{text}</button>
     );

 }
const rootContainer = document.getElementById('react-root');
ReactDOM.render(React.createElement(hellobutton), rootContainer)