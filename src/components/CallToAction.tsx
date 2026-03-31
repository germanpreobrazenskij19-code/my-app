import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-coffee-light text-cream text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold mb-6 text-coffee-dark">
          Ready for Your Coffee Break?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-body text-text-primary">
          Whether you're looking for a quiet spot to work, a lively place to meet friends, or just a quick, delicious pick-me-up, Bean Haven is your destination.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button variant="coffee-dark" size="lg" className="text-lg px-8 py-3">
              Find Our Location
            </Button>
          </Link>
          <Link to="/order">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-cream">
              Order Online
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;