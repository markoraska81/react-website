import React, { useContext } from 'react';
import './Modal.scss';
import { GlobalContext } from '../../context/GlobalContext';
import ReactDom from 'react-dom';

const Modal = () => {
  const { modal, closeModal, detailTours, ref } = useContext(GlobalContext);
  const { img, title } = detailTours;
  return (
    <>
      {!modal ? null : (
        <div className="modal" ref={ref}>
          <div className="modal-overlay">
            {/* <div className="modal-close">
              
            </div> */}
            <div className="modal-box">
              <div className="modal-box__heading">
                <img src={img} alt={title} />
              </div>
              <div className="modal-box__body">
                <h3 style={{ color: '#fff' }}>{title}</h3>
                <i
                  className="far fa-window-close"
                  style={{ cursor: 'pointer', fontSize: '2rem', color: '#fff' }}
                  onClick={closeModal}
                ></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
