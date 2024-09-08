import React, { useState } from 'react';
import Modal from 'react-modal'; 
import '../Styles/desserts.scss';
import Count from './Count';

const soupsData = [
  {
    id: 1,
    name: 'Tomato Soup',
    price: '₼ 15.00',
    image: '../../public/soupimage/sup1.webp',
    description: 'Taze domatesle hazırlanan lezzetli çorba.',
    info: 'Soup'
  },
  {
    id: 2,
    name: 'Chicken Soup',
    price: '₼ 18.00',
    image: '../../public/soupimage/sup2.jpg',
    description: 'Tavuk ve sebzelerle hazırlanan sıcak çorba.',
    info: 'Soup'
  },
  {
    id: 3,
    name: 'Mushroom Soup',
    price: '₼ 17.00',
    image: '../../public/soupimage/sup1.webp',
    description: 'Kremalı mantar çorbası.',
    info: 'Soup'
  },
  {
    id: 4,
    name: 'Chicken Soup',
    price: '₼ 18.00',
    image: '../../public/soupimage/sup2.jpg',
    description: 'Tavuk ve sebzelerle hazırlanan sıcak çorba.',
    info: 'Soup'
  },
  {
    id: 5,
    name: 'Mushroom Soup',
    price: '₼ 17.00',
    image: '../../public/soupimage/sup1.webp',
    description: 'Kremalı mantar çorbası.',
    info: 'Soup'
  },
  {
    id: 6,
    name: 'Chicken Soup',
    price: '₼ 18.00',
    image: '../../public/soupimage/sup2.jpg',
    description: 'Tavuk ve sebzelerle hazırlanan sıcak çorba.',
    info: 'Soup'
  },
  {
    id: 7,
    name: 'Mushroom Soup',
    price: '₼ 17.00',
    image: '../../public/soupimage/sup1.webp',
    description: 'Kremalı mantar çorbası.',
    info: 'Soup'
  },
  {
    id: 8,
    name: 'Chicken Soup',
    price: '₼ 18.00',
    image: '../../public/soupimage/sup2.jpg',
    description: 'Tavuk ve sebzelerle hazırlanan sıcak çorba.',
    info: 'Soup'
  },
];

const Soups = () => {
  const [selectedSoup, setSelectedSoup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const openModal = (soup, event) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setModalPosition({ top, left });
    setSelectedSoup(soup);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSoup(null);
  };

  return (
    <div className="desserts-container">
      <h1 className='menu-title'>Soups</h1>
      <div className="desserts-flex">
        {soupsData.map((soup) => (
          <div 
            key={soup.id}
            onClick={(event) => openModal(soup, event)}
            className="dessert-card"
          >
            <p>{soup.price}</p>
            <img src={soup.image} alt={soup.name} className="dessert-image" />
            <h3 className='dessertName'>{soup.name}</h3>
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
        {selectedSoup && (
          <div className="modal-content">
            <img src={selectedSoup.image} alt={selectedSoup.name} className="modal-image" />
            <div className='alt-model'>
              <h2>{selectedSoup.description}</h2>
              <p>{selectedSoup.info}</p>
              <p>Price: {selectedSoup.price}</p>
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

export default Soups;
