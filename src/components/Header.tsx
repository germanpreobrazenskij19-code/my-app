import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Assuming you have Button component

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-coffee-light/20 bg-cream/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-black text-coffee-dark">
          Bean Haven
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <NavLink to="/" className="text-text-secondary hover:text-coffee-dark transition-colors duration-200">Home</NavLink>
          <NavLink to="/menu" className="text-text-secondary hover:text-coffee-dark transition-colors duration-200">Menu</NavLink>
          <NavLink to="/about" className="text-text-secondary hover:text-coffee-dark transition-colors duration-200">About</NavLink>
          <NavLink to="/contact" className="text-text-secondary hover:text-coffee-dark transition-colors duration-200">Contact</NavLink>
        </nav>

        {/* Order Now Button */}
        <Button variant="coffee" className="hidden md:inline-flex">
          Order Now
        </Button>

        {/* Mobile Menu Icon (Placeholder) */}
        <button className="md:hidden text-coffee-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

// Simple NavLink mock for demonstration. In a full app, use react-router-dom's NavLink
const NavLink: React.FC<{ to: string; className: string; children: React.ReactNode }> = ({ to, className, children }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export default Header;