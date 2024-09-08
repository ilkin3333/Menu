import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const pizzasData = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: '₼ 40.00',
    image: "../../public/pizzaimage/pizza1.jpg",
    description: 'Taze mozzarella ve fesleğenle hazırlanan klasik pizza.',
    info: 'Pizza'
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    price: '₼ 45.00',
    image: '../../public/pizzaimage/pizza2.jpg',
    description: 'Sosu ve bol pepperoni dilimleriyle lezzetli pizza.',
    info: 'Pizza'
  },
  {
    id: 3,
    name: 'Vegetarian Pizza',
    price: '₼ 42.00',
    image: "../../public/pizzaimage/pizza1.jpg",
    description: 'Taze sebzelerle hazırlanan ve vejetaryenler için ideal pizza.',
    info: 'Pizza'
  },
  {
    id: 4,
    name: 'BBQ Chicken Pizza',
    price: '₼ 47.00',
    image: '../../public/pizzaimage/pizza2.jpg',
    description: 'Barbekü sosu ve ızgara tavuk ile hazırlanmış pizza.',
    info: 'Pizza'
  },
  {
    id: 5,
    name: 'Hawaiian Pizza',
    price: '₼ 43.00',
    image: "../../public/pizzaimage/pizza1.jpg",
    description: 'Ananas ve jambonla hazırlanan tatlı ve tuzlu pizza.',
    info: 'Pizza'
  },
  {
    id: 6,
    name: 'Mushroom Pizza',
    price: '₼ 44.00',
    image: '../../public/pizzaimage/pizza2.jpg',
    description: 'Mantar ve peynirle hazırlanan lezzetli pizza.',
    info: 'Pizza'
  },
  {
    id: 7,
    name: 'Four Cheese Pizza',
    price: '₼ 50.00',
    image: "../../public/pizzaimage/pizza1.jpg",
    description: 'Mozzarella, cheddar, parmesan ve gorgonzola peynirleriyle hazırlanan pizza.',
    info: 'Pizza'
  },
  {
    id: 8,
    name: 'Seafood Pizza',
    price: '₼ 55.00',
    image: '../../public/pizzaimage/pizza2.jpg',
    description: 'Karides, midye ve kalamarla hazırlanan deniz mahsulleri pizza.',
    info: 'Pizza'
  }
];

const Pizzas = () => {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (pizza, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Pizzas</h1>
      <div className="desserts-flex">
        {pizzasData.map((pizza) => (
          <div 
            key={pizza.id}
            onClick={(event) => openModal(pizza, event)}
            className="dessert-card"
          >
            <p>{pizza.price}</p>
            <img src={pizza.image} alt={pizza.name} className="dessert-image" />
            <h3 className='dessertName'>{pizza.name}</h3>
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
        {selectedPizza && (
          <div className="modal-content">
            <img src={selectedPizza.image} alt={selectedPizza.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedPizza.description}</h2>
              <p>{selectedPizza.info}</p>
              <p>Price: {selectedPizza.price}</p>
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

export default Pizzas;
