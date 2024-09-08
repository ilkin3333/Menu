import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const saladsData = [
  {
    id: 1,
    name: 'Caesar Salad',
    price: '₼ 20.00',
    image: "../../public/salad/salad1.jpg",
    description: 'Taze marul, parmesan ve krutonla hazırlanan Caesar salatası.',
    info: 'Salad'
  },
  {
    id: 2,
    name: 'Greek Salad',
    price: '₼ 22.00',
    image: "../../public/salad/salad2.jpg",
    description: 'Zeytin, feta peyniri ve taze sebzelerle yapılan Yunan salatası.',
    info: 'Salad'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    price: '₼ 20.00',
    image: "../../public/salad/salad1.jpg",
    description: 'Taze marul, parmesan ve krutonla hazırlanan Caesar salatası.',
    info: 'Salad'
  },
  {
    id: 4,
    name: 'Greek Salad',
    price: '₼ 22.00',
    image: "../../public/salad/salad2.jpg",
    description: 'Zeytin, feta peyniri ve taze sebzelerle yapılan Yunan salatası.',
    info: 'Salad'
  },
  {
    id: 5,
    name: 'Caesar Salad',
    price: '₼ 20.00',
    image: "../../public/salad/salad1.jpg",
    description: 'Taze marul, parmesan ve krutonla hazırlanan Caesar salatası.',
    info: 'Salad'
  },
  {
    id: 6,
    name: 'Greek Salad',
    price: '₼ 22.00',
    image: "../../public/salad/salad2.jpg",
    description: 'Zeytin, feta peyniri ve taze sebzelerle yapılan Yunan salatası.',
    info: 'Salad'
  },
  {
    id: 7,
    name: 'Caesar Salad',
    price: '₼ 20.00',
    image: "../../public/salad/salad1.jpg",
    description: 'Taze marul, parmesan ve krutonla hazırlanan Caesar salatası.',
    info: 'Salad'
  },
  {
    id: 8,
    name: 'Greek Salad',
    price: '₼ 22.00',
    image: "../../public/salad/salad2.jpg",
    description: 'Zeytin, feta peyniri ve taze sebzelerle yapılan Yunan salatası.',
    info: 'Salad'
  },
];

const Salads = () => {
  const [selectedSalad, setSelectedSalad] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (salad, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedSalad(salad);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSalad(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Salads</h1>
      <div className="desserts-flex">
        {saladsData.map((salad) => (
          <div 
            key={salad.id}
            onClick={(event) => openModal(salad, event)}
            className="dessert-card"
          >
            <p>{salad.price}</p>
            <img src={salad.image} alt={salad.name} className="dessert-image" />
            <h3 className='dessertName'>{salad.name}</h3>
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
        {selectedSalad && (
          <div className="modal-content">
            <img src={selectedSalad.image} alt={selectedSalad.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedSalad.description}</h2>
              <p>{selectedSalad.info}</p>
              <p>Price: {selectedSalad.price}</p>
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

export default Salads;
