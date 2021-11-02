import React from 'react';
import './App.scss';

// COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Modal from './components/Modal/Modal';

// PAGES
import HomePage from './pages/HomePages/HomePage';

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <header className="header bcg-header">
          <Navbar />
        </header>
        <Sidebar />
        <main>
          <HomePage />
        </main>
        <footer className="bcg-footer">
          <Footer />
        </footer>
        <Modal />
      </div>
    </>
  );
}

export default App;
