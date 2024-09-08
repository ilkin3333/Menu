import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const hotDrinksData = [
  {
    id: 1,
    name: 'Hot Chocolate',
    price: '₼ 10.00',
    image: "../../public/hotdrinksimage/hot1.jpg",
    description: 'Zengin kakao ve sütle hazırlanan sıcak çikolata.',
    info: 'Hot Drink'
  },
  {
    id: 2,
    name: 'Latte',
    price: '₼ 12.00',
    image: "../../public/hotdrinksimage/hot2.jpg",
    description: 'Kremalı ve yoğun espresso ile yapılan latte.',
    info: 'Hot Drink'
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: '₼ 11.00',
    image: "../../public/hotdrinksimage/hot1.jpg",
    description: 'Köpüklü sütle hazırlanan cappuccino.',
    info: 'Hot Drink'
  },
  {
    id: 4,
    name: 'Hot Chocolate',
    price: '₼ 10.00',
    image: "../../public/hotdrinksimage/hot1.jpg",
    description: 'Zengin kakao ve sütle hazırlanan sıcak çikolata.',
    info: 'Hot Drink'
  },
  {
    id: 5,
    name: 'Latte',
    price: '₼ 12.00',
    image: "../../public/hotdrinksimage/hot2.jpg",
    description: 'Kremalı ve yoğun espresso ile yapılan latte.',
    info: 'Hot Drink'
  },
  {
    id: 6,
    name: 'Cappuccino',
    price: '₼ 11.00',
    image: "../../public/hotdrinksimage/hot1.jpg",
    description: 'Köpüklü sütle hazırlanan cappuccino.',
    info: 'Hot Drink'
  },
  {
    id: 7,
    name: 'Hot Chocolate',
    price: '₼ 10.00',
    image: "../../public/hotdrinksimage/hot1.jpg",
    description: 'Zengin kakao ve sütle hazırlanan sıcak çikolata.',
    info: 'Hot Drink'
  },
  {
    id: 8,
    name: 'Latte',
    price: '₼ 12.00',
    image: "../../public/hotdrinksimage/hot2.jpg",
    description: 'Kremalı ve yoğun espresso ile yapılan latte.',
    info: 'Hot Drink'
  }
];

const HotDrinks = () => {
  const [selectedHotDrink, setSelectedHotDrink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (drink, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedHotDrink(drink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHotDrink(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Hot Drinks</h1>
      <div className="desserts-flex">
        {hotDrinksData.map((drink) => (
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
        {selectedHotDrink && (
          <div className="modal-content">
            <img src={selectedHotDrink.image} alt={selectedHotDrink.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedHotDrink.description}</h2>
              <p>{selectedHotDrink.info}</p>
              <p>Price: {selectedHotDrink.price}</p>
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

export default HotDrinks;
