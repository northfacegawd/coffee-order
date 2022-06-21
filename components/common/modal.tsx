import React, { CSSProperties, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  backDropStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  enterDuration?: number;
  exitDuration?: number;
  disableClose?: boolean;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = function Modal({
  children,
  open,
  onClose,
  backDropStyle,
  contentStyle,
  enterDuration,
  exitDuration,
  disableClose,
}) {
  return (
    <div className="fixed z-[1000] pointer-events-none top-0 left-0 h-full w-full">
      <CSSTransition
        in={open}
        timeout={{ enter: enterDuration, exit: exitDuration }}
        classNames="modal-backdrop"
        unmountOnExit
      >
        <div
          style={backDropStyle}
          className="absolute top-0 bottom-0 left-0 right-0 z-[1000] pointer-events-auto transition-all ease-out duration-150 bg-modal opacity-0"
          onClick={disableClose ? undefined : onClose}
          id="modalBackdrop"
        />
      </CSSTransition>
      <div className="flex absolute z-[1000] justify-center items-center w-full h-full">
        <CSSTransition
          in={open}
          timeout={{ enter: enterDuration, exit: exitDuration }}
          classNames="modal"
          unmountOnExit
        >
          <div
            style={contentStyle}
            className="max-h-full pointer-events-auto z-[1000] bg-white p-5 transition-all duration-150 ease-out scale-[0.8] opacity-0 shadow-modal"
            id="modalContent"
          >
            {children}
          </div>
        </CSSTransition>
      </div>
      <style jsx>{`
        #modalBackdrop,
        #modalContent {
          transition-duration: ${open ? enterDuration : exitDuration}ms;
        }
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
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Modal;

Modal.defaultProps = {
  contentStyle: {},
  backDropStyle: {},
  enterDuration: 150,
  exitDuration: 150,
  disableClose: false,
};
