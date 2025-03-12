import {React} from 'react';
import { useState, useRef } from 'react';

const ModalButton = ({ 
  icon,
  title, 
  modalContent, 
  buttonClassName = "", 
  backgroundColor =backgroundColor,
  modalTitle = title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Clic fuera del modal
  const handleOverlayClick = (e) => {
    // Si el clic fue en el overlay (no en el contenido del modal)
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <>
      {/* Botón con icono y título */}
      <button
        onClick={openModal}
        style={{backgroundColor:backgroundColor}}
        className={`flex items-center gap-2 px-4 py-2 text-black rounded-md hover:bg-blue-700 transition-colors ${buttonClassName}`}
        type="button"
      >
        {icon && <span className="flex items-center w-10 h-10">{icon}</span>} {/*Estilos del Botón*/}
        <span>{title}</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleOverlayClick} 
        >
          <div 
            ref={modalRef} 
            className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto overflow-hidden"
          >
            {/* Modal header */}
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {modalTitle || title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Modal body */}
            <div className="px-6 py-4 modal-content">
              {modalContent}
            </div>
            
            {/* Modal footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export {ModalButton};