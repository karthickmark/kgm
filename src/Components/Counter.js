import { useState } from "react";

function Counter(){
    const [value, setValue] = useState(0);

    function Increment(){
        setValue(value+1)
    }
    function Decrement(){
        setValue(value-1)
    }

    return( 
    <>
    <h2>Simple Counter</h2>
    <button onClick={Increment}>Increment</button>
    <h3>{value}</h3>
    <button onClick={Decrement}>Decrement</button>
    </>
        )      
    
}

export default Counter;

export function Visibletext(){
    const [text,setText] = useState(true);
    const show = () => {
        setText(val => !val)
    }
    return(
        <>
        <br/>
        <button onClick={show}>click here</button>
        {text && <h3>help me hide</h3>}
        </>
    )
}