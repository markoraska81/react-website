import React, { useState, createContext } from 'react';
import {
  networkIcons,
  travelData,
  popularTours,
  modalTravelData,
} from '../services/Services';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalTours, setModalTours] = useState(modalTravelData);
  const [icons] = useState(networkIcons);
  const [travels] = useState(travelData);
  const [tours] = useState(popularTours);
  const [detailTours, setDetailTours] = useState(modalTravelData);

  // MENU TOOGLE
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // GET ITEM
  // CHANGE PRODUCT AND PRODUCTS
  const getItem = (id) => {
    const tour = tours.find((item) => item.id === id);
    return tour;
  };

  // OPEN, CLOSE MODAL
  const openModal = (id) => {
    const item = getItem(id);
    setModalTours(item);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // HANDLE TRAVEL DETAIL
  const handleTravelDetail = (id) => {
    const travel = getItem(id);
    setDetailTours(travel);
  };
  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        menuToggle,
        modal,
        modalTours,
        detailTours,
        handleTravelDetail,
        openModal,
        closeModal,
        icons,
        travels,
        tours,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
