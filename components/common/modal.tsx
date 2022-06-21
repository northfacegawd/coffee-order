import React, { CSSProperties, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  backDropStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = function Modal({
  children,
  open,
  onClose,
  backDropStyle,
  contentStyle,
}) {
  const enterTime = 150;
  const exitTime = 150;

  return (
    <div className="fixed z-[1000] pointer-events-none top-0 left-0 h-full w-full">
      <CSSTransition
        in={open}
        timeout={{ enter: enterTime, exit: exitTime }}
        classNames="modal-backdrop"
        unmountOnExit
      >
        <div
          style={backDropStyle}
          className="absolute top-0 bottom-0 left-0 right-0 z-[1000] pointer-events-auto transition-all ease-out duration-150 bg-modal opacity-0"
          onClick={onClose}
        />
      </CSSTransition>
      <div className="flex absolute z-[1000] justify-center items-center w-full h-full">
        <CSSTransition
          in={open}
          timeout={{ enter: enterTime, exit: exitTime }}
          classNames="modal"
          unmountOnExit
        >
          <div
            style={contentStyle}
            className="max-h-full pointer-events-auto z-[1000] bg-white p-5 transition-all duration-150 ease-out scale-[0.8] opacity-0 shadow-modal"
          >
            {children}
          </div>
        </CSSTransition>
      </div>
      <style jsx>{`
        .modal-enter-active,
        .modal-enter-done {
          transform: scale(1);
          opacity: 1;
        }
        .modal-exit {
          transform: scale(1);
        }
        .modal-backdrop-enter-active,
        .modal-backdrop-enter-done {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Modal;

Modal.defaultProps = {
  contentStyle: {},
  backDropStyle: {},
};
