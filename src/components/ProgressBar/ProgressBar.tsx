import { useState, useEffect, useRef } from "react";
import './ProgressBar.scss';

function ProgressBar(){
    const [timer, setTimer] = useState(100);
    const id = useRef<any>(null);
    const clear= () => {
        window.clearInterval(id.current);
    }

    useEffect(()=>{
        id.current = window.setInterval(() => {
            setTimer((time) => time-1);
        }, 1000);
        return () => clear();
    }, [])

    useEffect(() => {
        if(timer === 0){
            clear();
        }

    }, [timer]);
    
    return (
        <div className="ProgressBar">
            <div className="ProgressBar__progress" style={{ width: `${timer}%` }}>
                <span className="ProgressBar__label">{`${timer}s`}</span>
                {timer === 0 &&
                    <h1>Rejouer?</h1>
                }
            </div>
        </div>
    )
}

export default ProgressBar;