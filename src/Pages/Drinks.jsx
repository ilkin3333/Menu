import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const drinksData = [
  {
    id: 1,
    name: 'Coca-Cola',
    price: '₼ 8.00',
    image: "../../public/drinks/cola.jpg",
    description: 'Klasik Coca-Cola.',
    info: 'Drink'
  },
  {
    id: 2,
    name: 'Sprite',
    price: '₼ 8.00',
    image: "../../public/drinks/fanta.webp",
    description: 'Tazeleyici Sprite.',
    info: 'Drink'
  },
  {
    id: 3,
    name: 'Orange Juice',
    price: '₼ 10.00',
    image: "../../public/drinks/spite.jpg",
    description: 'Taze sıkılmış portakal suyu.',
    info: 'Drink'
  },
  {
    id: 4,
    name: 'Coca-Cola',
    price: '₼ 8.00',
    image: "../../public/drinks/cola.jpg",
    description: 'Klasik Coca-Cola.',
    info: 'Drink'
  },
  {
    id: 5,
    name: 'Sprite',
    price: '₼ 8.00',
    image: "../../public/drinks/fanta.webp",
    description: 'Tazeleyici Sprite.',
    info: 'Drink'
  },
  {
    id: 6,
    name: 'Orange Juice',
    price: '₼ 10.00',
    image: "../../public/drinks/spite.jpg",
    description: 'Taze sıkılmış portakal suyu.',
    info: 'Drink'
  },
  {
    id: 7,
    name: 'Coca-Cola',
    price: '₼ 8.00',
    image: "../../public/drinks/cola.jpg",
    description: 'Klasik Coca-Cola.',
    info: 'Drink'
  },
  {
    id: 8,
    name: 'Sprite',
    price: '₼ 8.00',
    image: "../../public/drinks/fanta.webp",
    description: 'Tazeleyici Sprite.',
    info: 'Drink'
  },
  {
    id: 9,
    name: 'Orange Juice',
    price: '₼ 10.00',
    image: "../../public/drinks/spite.jpg",
    description: 'Taze sıkılmış portakal suyu.',
    info: 'Drink'
  },
];

const Drinks = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (drink, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedDrink(drink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDrink(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Drinks</h1>
      <div className="desserts-flex">
        {drinksData.map((drink) => (
          <div 
            key={drink.id}
            onClick={(event) => openModal(drink, event)}
            className="dessert-card"
          >
            <p>{drink.price}</p>
            <img src={drink.image} alt={drink.name} className="dessert-image" />
            <h3 className='dessertName'>{drink.name}</h3>
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
        {selectedDrink && (
          <div className="modal-content">
            <img src={selectedDrink.image} alt={selectedDrink.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedDrink.description}</h2>
              <p>{selectedDrink.info}</p>
              <p>Price: {selectedDrink.price}</p>
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

export default Drinks;
