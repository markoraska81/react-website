import React from 'react';
import './HomePage.scss';
import Title from '../../components/Title/Title';
import Hero from '../../components/Hero/Hero';
import Populars from '../../components/Populars/Populars';
import Adventures from '../../components/Adventures/Adventures';

const HomePage = () => {
  return (
    <>
      <section className="home-page bcg-home">
        <div className="home-page__heading">
          <Title title="Connect the world" />
        </div>
        <div className="home-page__body">
          <Hero />
          <Adventures />
          <Populars />
        </div>
      </section>
    </>
  );
};

export default HomePage;
