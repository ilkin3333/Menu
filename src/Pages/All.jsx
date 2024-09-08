import React from 'react';
import { useSelector } from 'react-redux';
import Desserts from '../Pages/Desserts'; 
import Burgers from '../Pages/Burgers'; 
import Pizzas from '../Pages/Pizzas'; 
import Soup from '../Pages/Soup'; 
import HotDrinks from '../Pages/HotDrinks'; 
import ColdDrinks from '../Pages/ColdDrinks'; 
import Drinks from '../Pages/Drinks'; 
import Salads from '../Pages/Salads'; 
import Starter from '../Pages/Starter';

const All = () => {
  const menu = useSelector((state) => state.menu.data);

  return (
    <div>
      <Desserts/>
      <Burgers/>
      <Pizzas/>
      <Soup/>
      <HotDrinks/>
      <ColdDrinks/>
      <Drinks/>
      <Salads />
      <Starter />
    </div>
  );
};

export default All;
