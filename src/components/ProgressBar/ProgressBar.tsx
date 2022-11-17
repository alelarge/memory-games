import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from "react";
import { RootState } from '../../store';
import { start, pause, loose } from '../../features/controls/controlsSlice';
import './ProgressBar.scss';

function ProgressBar(){
    const defaultTime = 100;
    const dispatch = useDispatch();
    const { gameState } = useSelector((state: RootState) => state.controls);
    const [timer, setTimer] = useState(defaultTime);
    const id = useRef<any>(null);
    const clear= () => {
        window.clearInterval(id.current);
    }

    useEffect(()=>{
        if (gameState === 'play') {
            id.current = window.setInterval(() => {
                setTimer((time) => time-1);
            }, 1000);
            return () => clear();
        }
        if (gameState === 'win') {
            setTimer(defaultTime);
            clear();
        }
    }, [gameState])

    useEffect(() => {
        if(timer === 0){
            dispatch(loose());
            setTimer(defaultTime);
            clear();
        }

    }, [timer]);

    const tooglePause = () => {
        if (gameState === 'play') {
            dispatch(pause());
        } else if (gameState === 'pause') {
            dispatch(start());
        }
    }
    
    return (
        <div className="ProgressBar">
            <div className="ProgressBar__controls">
                <button onClick={tooglePause}>
                    {gameState === 'play' && 'Pause'}
                    {gameState !== 'play' && 'Reprendre'}
                </button>
            </div>
            <div className="ProgressBar__timeline">
                <div className="ProgressBar__timeline__progress" style={{ width: `${timer}%` }}>
                    <span className="ProgressBar__timeline__label">{`${timer}s`}</span>
                    {timer === 0 &&
                        <h1>Rejouer?</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;