import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from './ReduxStore/menuSlice';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import All from './Pages/All';
import Desserts from './Pages/Desserts';
import Burgers from './Pages/Burgers';
import Pizzas from './Pages/Pizzas';
import Soup from './Pages/Soup';
import HotDrinks from './Pages/HotDrinks';
import ColdDrinks from './Pages/ColdDrinks';
import Drinks from './Pages/Drinks';
import Salads from './Pages/Salads';
import Starter from './Pages/Starter';

const App = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.data);
  const status = useSelector((state) => state.menu.status);
  const error = useSelector((state) => state.menu.error);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
        <h1>Menu</h1>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/burgers" element={<Burgers />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/hot-drinks" element={<HotDrinks />} />
          <Route path="/cold-drinks" element={<ColdDrinks />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/salads" element={<Salads />} />
          <Route path="/starter" element={<Starter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
