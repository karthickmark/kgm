import { useState } from "react";

export function Input(){
    const [val,setval] = useState('');

    return(
        <>
       <div className="container"> <br/>
        <h2>input field</h2>
        <input type="text"
        placeholder="enter charecters..."
        onChange={e => {setval(e.target.value)}}
         /> 
        <h4>{val}</h4></div>
        </>
    )
}

export function Toggle(){
    const [togg,setTogg] = useState(false);
    const Change = () =>{
        setTogg(e => (!e));
    }

    return(
        <>
        <h3>toggle button</h3>
        <button onClick={Change}>{togg ?'On': 'Off'}</button>
        </>
    )


}
