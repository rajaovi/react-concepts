import React from 'react';
import { createPortal } from 'react-dom';
import './index.css'

const Modal = ({isOpened, children, onClose}) => {
    if(!isOpened) {
        return null
    }
  return createPortal (
    <div>
        <div className="overlay">
            <div className="modal">
                <div>
                <span className='closeButton' onClick={onClose}>X</span>
                <div className='modalContent'>{children}</div>
                </div>

            </div>
        </div>
    </div>,
    document.getElementById('modal')
  )

}

export default Modal