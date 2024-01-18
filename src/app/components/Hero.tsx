import React from 'react';

//import styles from '../styles/style';
const Hero: React.FC = () => (
  <section id="home">
    <div className="z-[2]  p-5 text-white">
      <div className="flex h-screen flex-col items-center justify-center text-center font-serif text-4xl text-white">
        <div>
          We are what we repeat in our lives.
          <br /> Excellence is not a one-time act, but a habit.
        </div>
        <p className="mr-96 mt-4">Aristotle</p>
      </div>
    </div>
  </section>
);

export default Hero;
