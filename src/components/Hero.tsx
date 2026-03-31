import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396922c668?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-coffee-dark opacity-50"></div> {/* Overlay for text readability */}
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-cream leading-tight mb-4 drop-shadow-md">
          Crafting Your Perfect Cup
        </h1>
        <p className="text-lg sm:text-xl text-cream max-w-2xl mb-8 font-body drop-shadow-sm">
          Experience the art of coffee in every sip. Freshly roasted beans, expertly brewed, just for you.
        </p>
        <Link to="/menu">
          <Button variant="coffee" size="lg" className="text-lg px-8 py-3 transform transition-transform duration-300 hover:scale-105">
            View Our Menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;