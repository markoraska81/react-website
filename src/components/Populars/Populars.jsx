import React, { useContext } from 'react';
import './Populars.scss';
import { GlobalContext } from '../../context/GlobalContext';
import Title from '../Title/Title';

const Populars = () => {
  const { tours, openModal, handleTravelDetail } = useContext(GlobalContext);

  const renderTours = () => {
    return (
      <>
        {tours.map((item) => (
          <div
            className={`popular bcg-${item.boxName}`}
            key={item.id}
            onClick={() => handleTravelDetail(item.id)}
          >
            <div className="popular-heading">
              <img
                src={item.img}
                alt="Image"
                onClick={() => openModal(item.id)}
              />
            </div>
            <div className="popular-body">
              <h4 className="box__title">{item.title}</h4>
              <div className="description">
                {item.desc.map((x, index) => (
                  <p key={index}>{x}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <section className="populars">
        <div className="populars__heading">
          <Title title="Most popular tours" />
        </div>
        <div className="populars__body">
          <div className="populars-box">{renderTours()}</div>
        </div>

        <div className="btn-box">
          <button className="btn-discovery">Discover all tours</button>
        </div>
      </section>
    </>
  );
};

export default Populars;
