import React from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import { connectImg } from '../../services/Services';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h3>Our World Deserves More You</h3>
          <h2>Whatever Your Style, See It Your Way</h2>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            asperiores eum quam ab magnam! Iusto rem harum nisi ad molestias?
            Maxime autem possimus hic ipsa nisi eum sint optio, eos deleniti
            sequi suscipit, distinctio est, quo amet iste alias laborum.
          </p>
          <Link to="#">
            <Button type="started">Get started</Button>
          </Link>
        </div>
        <div className="hero-right">
          <img src={connectImg} alt="Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
