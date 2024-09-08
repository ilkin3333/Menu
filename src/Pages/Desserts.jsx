import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count'

const dessertsData = [
  {
    id: 1,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '/desertImage/stravbery.jpg',
    description: 'Lezzetli cheesecake.',
    info:'Dessert'
  },
  {
    id: 2,
    name: 'Strawberry Cheesecake',
    price: '₼ 25.00',
    image: '/desertImage/stravbery2.png',
    description: 'Kremalı tiramisu.',
    info:'Dessert'
  },
  {
    id: 3,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '../../public/desertImage/stravbery3.jpg',
    description: 'Çikolatalı brownie.',
    info:'Dessert'
  },
  {
    id: 4,
    name: 'Strawberry Cheesecake',
    price: '₼ 25.00',
    image: '../../public/desertImage/stravbery2.png',
    description: 'Kremalı profiterol.',
    info:'Dessert'
  },
  {
    id: 5,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '../../public/desertImage/stravbery5.webp',
    description: 'Sıcak çikolatalı sufle.',
    info:'Dessert'
  },
  {
    id: 6,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '../../public/desertImage/cikolata.webp',
    description: 'Muzlu magnolia tatlısı.',
    info:'Dessert'
  },
  {
    id: 7,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '../../public/desertImage/stravbery5.webp',
    description: 'Kremalı pasta.',
    info:'Dessert'
  },
  {
    id: 8,
    name: 'Strawberry Cheesecake with Chocolate Syrup',
    price: '₼ 25.00',
    image: '../../public/desertImage/cikolata.webp',
    description: 'Soğuk dondurma.',
    info:'Dessert'
  }
];

const Desserts = () => {
  const [selectedDessert, setSelectedDessert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (dessert, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedDessert(dessert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDessert(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Desserts</h1>
      <div className="desserts-flex">
        {dessertsData.map((dessert) => (
          <div 
            key={dessert.id}
            onClick={(event) => openModal(dessert, event)}
            className="dessert-card"
          >
            <p>{dessert.price}</p>
            <img src={dessert.image} alt={dessert.name} className="dessert-image" />
            <h3 className='dessertName'>{dessert.name}</h3>
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
  {selectedDessert && (
    <div className="modal-content">
      <img src={selectedDessert.image} alt={selectedDessert.name} className="modal-image" />
      <div className='alt-model'>
        <h2>{selectedDessert.description}</h2>
        <p>{selectedDessert.info}</p>
        <p>Price: {selectedDessert.price}</p>
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

export default Desserts;
