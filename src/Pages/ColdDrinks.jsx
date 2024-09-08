import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const coldDrinksData = [
  {
    id: 1,
    name: 'Iced Coffee',
    price: '₼ 14.00',
    image: "../../public/coldimages/cold1.jpg",
    description: 'Soğuk ve buzlu kahve.',
    info: 'Cold Drink'
  },
  {
    id: 2,
    name: 'Lemonade',
    price: '₼ 12.00',
    image: "../../public/coldimages/cold2.webp",
    description: 'Taze sıkılmış limon suyu ile yapılan serinletici içecek.',
    info: 'Cold Drink'
  },
  {
    id: 3,
    name: 'Iced Coffee',
    price: '₼ 14.00',
    image: "../../public/coldimages/cold1.jpg",
    description: 'Soğuk ve buzlu kahve.',
    info: 'Cold Drink'
  },
  {
    id: 4,
    name: 'Lemonade',
    price: '₼ 12.00',
    image: "../../public/coldimages/cold2.webp",
    description: 'Taze sıkılmış limon suyu ile yapılan serinletici içecek.',
    info: 'Cold Drink'
  },
  {
    id: 5,
    name: 'Iced Coffee',
    price: '₼ 14.00',
    image: "../../public/coldimages/cold1.jpg",
    description: 'Soğuk ve buzlu kahve.',
    info: 'Cold Drink'
  },
  {
    id: 6,
    name: 'Lemonade',
    price: '₼ 12.00',
    image: "../../public/coldimages/cold2.webp",
    description: 'Taze sıkılmış limon suyu ile yapılan serinletici içecek.',
    info: 'Cold Drink'
  },
  {
    id: 7,
    name: 'Iced Coffee',
    price: '₼ 14.00',
    image: "../../public/coldimages/cold1.jpg",
    description: 'Soğuk ve buzlu kahve.',
    info: 'Cold Drink'
  },
  {
    id: 8,
    name: 'Lemonade',
    price: '₼ 12.00',
    image: "../../public/coldimages/cold2.webp",
    description: 'Taze sıkılmış limon suyu ile yapılan serinletici içecek.',
    info: 'Cold Drink'
  },
];

const ColdDrinks = () => {
  const [selectedColdDrink, setSelectedColdDrink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (drink, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedColdDrink(drink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedColdDrink(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Cold Drinks</h1>
      <div className="desserts-flex">
        {coldDrinksData.map((drink) => (
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
        {selectedColdDrink && (
          <div className="modal-content">
            <img src={selectedColdDrink.image} alt={selectedColdDrink.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedColdDrink.description}</h2>
              <p>{selectedColdDrink.info}</p>
              <p>Price: {selectedColdDrink.price}</p>
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

export default ColdDrinks;
