import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const startersData = [
  {
    id: 1,
    name: 'Bruschetta',
    price: '₼ 12.00',
    image: "../../public/starter/start1.jpg",
    description: 'Tost ekmeği üzerine domates ve fesleğenle yapılan başlangıç.',
    info: 'Starter'
  },
  {
    id: 2,
    name: 'Stuffed Mushrooms',
    price: '₼ 14.00',
    image: "../../public/starter/start2.webp",
    description: 'Peynirle doldurulmuş mantarlar.',
    info: 'Starter'
  },
  {
    id: 3,
    name: 'Bruschetta',
    price: '₼ 12.00',
    image: "../../public/starter/start1.jpg",
    description: 'Tost ekmeği üzerine domates ve fesleğenle yapılan başlangıç.',
    info: 'Starter'
  },
  {
    id: 4,
    name: 'Stuffed Mushrooms',
    price: '₼ 14.00',
    image: "../../public/starter/start2.webp",
    description: 'Peynirle doldurulmuş mantarlar.',
    info: 'Starter'
  },
  {
    id: 5,
    name: 'Bruschetta',
    price: '₼ 12.00',
    image: "../../public/starter/start1.jpg",
    description: 'Tost ekmeği üzerine domates ve fesleğenle yapılan başlangıç.',
    info: 'Starter'
  },
  {
    id: 6,
    name: 'Stuffed Mushrooms',
    price: '₼ 14.00',
    image: "../../public/starter/start2.webp",
    description: 'Peynirle doldurulmuş mantarlar.',
    info: 'Starter'
  },
  {
    id: 7,
    name: 'Bruschetta',
    price: '₼ 12.00',
    image: "../../public/starter/start1.jpg",
    description: 'Tost ekmeği üzerine domates ve fesleğenle yapılan başlangıç.',
    info: 'Starter'
  },
  {
    id: 8,
    name: 'Stuffed Mushrooms',
    price: '₼ 14.00',
    image: "../../public/starter/start2.webp",
    description: 'Peynirle doldurulmuş mantarlar.',
    info: 'Starter'
  },
];

const Starters = () => {
  const [selectedStarter, setSelectedStarter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (starter, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedStarter(starter);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStarter(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Starters</h1>
      <div className="desserts-flex">
        {startersData.map((starter) => (
          <div 
            key={starter.id}
            onClick={(event) => openModal(starter, event)}
            className="dessert-card"
          >
            <p>{starter.price}</p>
            <img src={starter.image} alt={starter.name} className="dessert-image" />
            <h3 className='dessertName'>{starter.name}</h3>
          </div>
        ))}
      </div>

      <Modal 
        className="mainmodal" 
        isOpen={isModalOpen} 
        onRequestClose={closeModal}
        style={{
          content: {
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
            transform: 'translate(0, -50%)',
            zIndex: 999 
          }
        }}
      >
        {selectedStarter && (
          <div className="modal-content">
            <img src={selectedStarter.image} alt={selectedStarter.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedStarter.description}</h2>
              <p>{selectedStarter.info}</p>
              <p>Price: {selectedStarter.price}</p>
              <span>
                <Count/>
              </span>
              <button onClick={closeModal} className="close-button">X</button> {/* Close butonu */}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Starters;
