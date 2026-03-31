import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-coffee-dark text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1541167710-0fba22765275?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coffee shop interior"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-cream">
            Our Passion for Coffee
          </h2>
          <p className="text-lg md:text-xl mb-6 font-body leading-relaxed text-coffee-light">
            At Bean Haven, we believe coffee is more than just a drink—it's an experience, a ritual, and a moment of pure enjoyment.
            We meticulously source the finest beans from sustainable farms around the globe, ensuring every cup delivers exceptional flavor and aroma.
          </p>
          <p className="text-lg md:text-xl font-body leading-relaxed text-coffee-light">
            Our skilled baristas are artists, dedicated to crafting each beverage with precision and passion.
            From the perfect espresso shot to an intricate latte art design, we strive to make your visit unforgettable.
            Come and discover your favorite brew in our cozy, inviting space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;