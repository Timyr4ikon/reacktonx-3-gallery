import React, {useEffect} from 'react'
import  './Modal.css'
export const Modal = ({src,overlayClick,esc}) => {
    const closeModal=(e)=>{
        if(e.key === 'Escape'){
           esc()
        }
    }
    useEffect(()=>{
        window.addEventListener('keydown',closeModal);
        return ()=> {window.removeEventListener('keydown',closeModal)}
    },[])

    return (
        <div className="Overlay" onClick={overlayClick}>
            <div className="Modal">
                <img src={src} alt="" />
            </div>
        </div>
    )
}

