import React from 'react';

interface ModalProps {
  children: React.ReactNode,
  onClose: () => void
}

export function Modal({children, onClose}: ModalProps) {
  return (
    <>
      <div
        className="shadow-overlay" id="overlay" onClick={onClose}
      />
      <div className="popup-container" id="popup">
        { children }
      </div>
    </> 
  );
}