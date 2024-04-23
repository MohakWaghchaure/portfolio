import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GetInTouch from './components/GetInTouch';
import About from './components/About';
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    // top: '0',
    // left: '0',
    // right: '0',
    // bottom: '0',
    border: '2px solid #F4DFC8',
    backgroundColor: '#000000',
  },
};

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    
  } 
  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div className="body-container">
      <Header setIsOpen={setIsOpen} setModalContent={setModalContent}></Header>
      <Home></Home>
      <Education setIsOpen={setIsOpen} setModalContent={setModalContent}></Education>
      <Experience setIsOpen={setIsOpen} setModalContent={setModalContent}></Experience>
      <Skills></Skills>
      <GetInTouch></GetInTouch>
      <Footer></Footer>     

      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles}>
        <div className='modal-container'>
          <div className='modal-body'>
          {modalContent === 'about' && <About></About>}
          {modalContent === 'education' && <EducationDetails></EducationDetails>}
          {modalContent === 'experience' && <ExperienceDetails></ExperienceDetails>}
          </div>
          <span className='modal-close' onClick={closeModal}></span>
        </div>
        
      </Modal>
      
    </div>
  );
}

export default App;
