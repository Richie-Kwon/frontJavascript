import React, { useEffect } from "react";
import "./../style/Mainheader.css";

function Mainheader(){
    // 상태처리 함수
    // [상태데이터, 상태를위한세터함수]
    const [text, setClickState] = React.useState('Hello world');
    return (
        <h1 onClick={()=>{setClickState('Goodbye')}}>{text}</h1>
    )
}

export default Mainheader;   



// class type 

// class MainheaderClass extends React.Component{
//     render(h) {
//         return (
//             <h1>
//                 {this.props.text}
//             </h1>
//         )
//     }
     
// }
// export default MainheaderClass;  

useEffect();