import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { ReservationPage } from './pages/ReservationPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
export function App() {
  return (
    <HashRouter>
      <CartProvider>
        <div className="min-h-screen bg-bg text-text-primary">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </HashRouter>);

}