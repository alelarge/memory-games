import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { start, win, loose } from '../../features/controls/controlsSlice';
import Modal from './Modal';

function ModalContainer(){
    const dispatch = useDispatch();
    const { gameState } = useSelector((state: RootState) => state.controls);
    const onStart = () => dispatch(start());

    return(
        <div className="ModalContainer">
            <Modal 
                content="Bienvenue sur le jeu du Memory" 
                isVisible={(gameState === 'ready')}
                ctaText="Démarrer la partie"
                ctaOnClick={onStart}
            />
            <Modal 
                content="Pas de chance" 
                isVisible={(gameState === 'loose')}
                ctaText="Rejouer ?"
                ctaOnClick={onStart}
            />
            <Modal 
                content="Félicitations !" 
                isVisible={(gameState === 'win')}
                ctaText="Rejouer ?"
                ctaOnClick={onStart}
            />
        </div>
    )
}

export default ModalContainer;