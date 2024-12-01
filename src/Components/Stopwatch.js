import { useEffect, useRef, useState } from "react";
import './Style.css';

function Stopwatch(){

    const [time , setTime] = useState(0);
    const [working , setWorking] = useState(false);
    const intervalref = useRef(null);
    const startref = useRef(0);
    
    useEffect(() => {
        if (working) {
            intervalref.current = setInterval(() => {
                setTime(Date.now() - startref.current);
            }, 10);
            
        }
        return() => {
            clearInterval(intervalref.current);
        }

    },[working]);


    function start() {
        setWorking(true);
        startref.current = Date.now() - time ; 

    }
    function stop() {
        setWorking(false);
        
    }
    function reset() {
        setTime(0);
        setWorking(false);
        
    }
    function format() {
        
        // let hours = Math.floor(time / (1000 * 60 *60));
        let minutes = Math.floor(time / (1000 *60) % 60);
        let seconds = Math.floor(time / (1000) % 60);
        let millisec = Math.floor((time % 1000) / 10);
        
        // hours = String(hours).padStart(2 , "0");
        minutes = String(minutes).padStart(2 , "0");
        seconds = String(seconds).padStart(2 , "0");
        millisec = String(millisec).padStart(2 , "0");


        return `${minutes} : ${seconds} : ${millisec}`;
    }

    return(
        <div className="Watch-container">
            <div className="displays">
                {format()}
            </div>
            <div className="controll">
                <button onClick={start} className="start-button" >start</button>
                <button onClick={stop} className="stop-button" >stop</button>
                <button onClick={reset} className="reset-button" >reset</button>

            </div>
        </div>
    )


}
export default Stopwatch;