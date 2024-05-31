import React, { useState, useEffect } from 'react';
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
import BackgroundCircles from './components/BackgroundCircles.js'
import Projects from './components/Projects.js';
import ProjectDetails from './components/ProjectDetails.js';

Modal.setAppElement('#root');

const customStyles = {
  content: {
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
      <Header></Header>
      <Home></Home>
      <Education setIsOpen={setIsOpen} setModalContent={setModalContent}></Education>
      <Experience setIsOpen={setIsOpen} setModalContent={setModalContent}></Experience>
      <Projects setIsOpen={setIsOpen} setModalContent={setModalContent}></Projects>
      <Skills></Skills>
      <GetInTouch></GetInTouch>
      <Footer></Footer>     
      <BackgroundCircles></BackgroundCircles>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} style={customStyles}>
        <div className='modal-container'>
          <div className='modal-body'>
          {modalContent === 'about' && <About></About>}
          {modalContent === 'education' && <EducationDetails></EducationDetails>}
          {modalContent === 'experience' && <ExperienceDetails></ExperienceDetails>}
          {modalContent === 'talkkAi' && <ProjectDetails projectNumber={'talkkAi'}></ProjectDetails>}
          {modalContent === 'feelingfab' && <ProjectDetails projectNumber={'feelingfab'}></ProjectDetails>}
          {modalContent === 'playingWithAnimations' && <ProjectDetails projectNumber={'playingWithAnimations'}></ProjectDetails>}
          {modalContent === 'SignLanguageTranslator' && <ProjectDetails projectNumber={'SignLanguageTranslator'}></ProjectDetails>}
          {modalContent === 'differentialCapital' && <ProjectDetails projectNumber={'differentialCapital'}></ProjectDetails>}
          
          </div>
          <span className='modal-close' onClick={closeModal}></span>
        </div>
        
      </Modal>
      
      
    </div>
  );
}

export default App;
