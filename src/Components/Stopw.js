import { useEffect, useRef, useState } from "react";
import './Style.css';

function Stopw(){

    const [times , setTimes] = useState(0);
    const [works , setWorks] = useState(false); 
    let intref = useRef();
    useEffect(() => {

        if(works){
            intref.current = setInterval(() => {
                setTimes(times + 1)
            },1000);
        }
        return() => {
            clearInterval(intref.current);
        }

    },[works , times]);

    function format(times){
        let minutes = Math.floor((times /60 ) % 60);
        let time = Math.floor((times) % 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        time = time < 10 ? '0' + time : time;

        return `${minutes} : ${time}`
    }


    return(
        <div className="Watch-container">
            <div className="displays"> {format(times)} </div>
            <div className="controll">
                <button onClick={() => {setWorks(true)}} className="start-button">start</button>
                <button onClick={() =>{setWorks(false); clearInterval(intref.current);}} className="stop-button">stop</button>
                <button onClick={() => {setTimes(0); setWorks(false);} } className="reset-button">reset</button>
            </div>

        </div>
    )
}

export default Stopw;