import React, { useContext } from 'react';
import './Adventures.scss';
import Title from '../Title/Title';
import { GlobalContext } from '../../context/GlobalContext';
import { imgBcg } from '../../services/Services';

const Adventures = () => {
  const { travels } = useContext(GlobalContext);

  // RENDER TRAVELS CARD
  const renderTravelsCard = () => {
    return (
      <>
        {travels.map((item) => (
          <article
            className="adventures-box__article bcg-adventures spacing-top"
            key={item.id}
          >
            <i class={`fas ${item.class}`}></i>
            <h4 className="box__title">{item.title}</h4>
            <p className="desc">{item.desc}</p>
          </article>
        ))}
      </>
    );
  };

  return (
    <>
      <section
        className="adventures"
        style={{ backgroundImage: `url(${imgBcg})` }}
      >
        <div className="adventures-heading">
          <Title title="Why adventure travel" />
        </div>
        <div className="adventures-body">
          <div className="adventures-box">{renderTravelsCard()}</div>
        </div>
      </section>
    </>
  );
};

export default Adventures;
