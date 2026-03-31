import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import AboutUs from '@/components/AboutUs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

// Placeholder pages for routing
const HomePage = () => (
  <>
    <Hero />
    <MenuPreview />
    <AboutUs />
    <CallToAction />
  </>
);
const MenuPage = () => (
  <div className="py-20 text-center text-text-primary min-h-[50vh] bg-cream">
    <h1 className="text-5xl font-display font-bold">Our Full Menu</h1>
    <p className="mt-4 text-lg">Coming soon! For now, please enjoy our preview.</p>
  </div>
);
const AboutPage = () => (
  <div className="py-20 text-center text-text-primary min-h-[50vh] bg-cream">
    <h1 className="text-5xl font-display font-bold">More About Us</h1>
    <p className="mt-4 text-lg">Detailed story of Bean Haven.</p>
  </div>
);
const ContactPage = () => (
  <div className="py-20 text-center text-text-primary min-h-[50vh] bg-cream">
    <h1 className="text-5xl font-display font-bold">Contact Us</h1>
    <p className="mt-4 text-lg">Get in touch with the Bean Haven team.</p>
  </div>
);
const OrderPage = () => (
  <div className="py-20 text-center text-text-primary min-h-[50vh] bg-cream">
    <h1 className="text-5xl font-display font-bold">Order Online</h1>
    <p className="mt-4 text-lg">Browse and order your favorite coffee.</p>
  </div>
);


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}