import './Modal.scss';

type ModalType = {
    content: string;
    isVisible: boolean;
    ctaText: string;
    ctaOnClick: Function;
}

function Modal(props:ModalType){
    return(
        <div className="Modal" style={{display: props.isVisible ? 'block' : 'none' }}>
            <div className="Modal__content">
                <p>{props.content}</p>
                <button onClick={() => { props.ctaOnClick() }}>{props.ctaText}</button>
            </div>
        </div>
    )
}

export default Modal;