import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../../features/home/page/HomePage.lazy';

const AppLayout: FC = () => (
  <main>
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="services" element={ <HomePage/> } />
      <Route path="contact" element={ <HomePage/> } />
    </Routes>
  </main>
);

export default AppLayout;
