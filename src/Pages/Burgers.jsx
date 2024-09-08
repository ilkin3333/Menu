import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count'

const burgersData = [
  {
    id: 1,
    name: 'Classic Cheeseburger',
    price: '₼ 30.00',
    image: '../../public/burgerimage/burger1.jpg',
    description: 'İçinde cheddar peyniri ve marullarla klasik bir cheeseburger.',
    info: 'Burger'
  },
  {
    id: 2,
    name: 'Bacon Burger',
    price: '₼ 35.00',
    image: "../../public/burgerimage/burger2.webp",
    description: 'Kızarmış bacon ve barbekü soslu bir burger.',
    info: 'Burger'
  },
  {
    id: 3,
    name: 'Veggie Burger',
    price: '₼ 28.00',
    image: '../../public/burgerimage/burger1.jpg',
    description: 'Sebzelerle hazırlanan hafif bir burger.',
    info: 'Burger'
  },
  {
    id: 4,
    name: 'BBQ Chicken Burger',
    price: '₼ 32.00',
    image: "../../public/burgerimage/burger2.webp",
    description: 'Barbekü soslu tavuk göğsü ile hazırlanan burger.',
    info: 'Burger'
  },
  {
    id: 5,
    name: 'Double Cheeseburger',
    price: '₼ 40.00',
    image: '../../public/burgerimage/burger1.jpg',
    description: 'İki katlı cheddar peyniri ile lezzetli bir burger.',
    info: 'Burger'
  },
  {
    id: 6,
    name: 'Spicy Burger',
    price: '₼ 33.00',
    image: "../../public/burgerimage/burger2.webp",
    description: 'Acı sos ve jalapeno biberleriyle hazırlanan burger.',
    info: 'Burger'
  },
  {
    id: 7,
    name: 'Mushroom Swiss Burger',
    price: '₼ 36.00',
    image: '../../public/burgerimage/burger1.jpg',
    description: 'Swiss peyniri ve mantarlarla hazırlanan burger.',
    info: 'Burger'
  },
  {
    id: 8,
    name: 'Chicken Burger',
    price: '₼ 30.00',
    image: "../../public/burgerimage/burger2.webp",
    description: 'Izgara tavuk göğsü ile hazırlanan burger.',
    info: 'Burger'
  }
];

const Burgers = () => {
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (burger, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedBurger(burger);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Burgers</h1>
      <div className="desserts-flex">
        {burgersData.map((burger) => (
          <div 
            key={burger.id}
            onClick={(event) => openModal(burger, event)}
            className="dessert-card"
          >
            <p>{burger.price}</p>
            <img src={burger.image} alt={burger.name} className="dessert-image" />
            <h3 className='dessertName'>{burger.name}</h3>
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
        {selectedBurger && (
          <div className="modal-content">
            <img src={selectedBurger.image} alt={selectedBurger.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedBurger.description}</h2>
              <p>{selectedBurger.info}</p>
              <p>Price: {selectedBurger.price}</p>
              <span>
                <Count/>
              </span>
              <button onClick={closeModal} className="close-button">X</button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default Burgers;
