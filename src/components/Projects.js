import { Fragment } from 'react';
import React from "react";
import Slider from "react-slick";
import ProjectsImage from '../images/icons/projects.png';

function Projects({setIsOpen, setModalContent}){
    var sliderSettings = {
        // dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        arrows: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                }
              },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
      };
    return(
        <Fragment>
           <div className='projects-wrapper' id="project-section-anchor">
                <div className='container'>
                    <div className='projects-container'>
                        <div className='heading-wrap' data-aos="fade-up">
                            <div className='heading'>Projects</div>
                            <div className='heading-icon'>
                                <img src={ProjectsImage}/>
                            </div>
                        </div>
                        <div className='slider-wrapper'>
                            <div className='row'>
                                <Slider {...sliderSettings}>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Talkk.ai</div>
                                            <div className='description'>An AI-empowered humanoid robot that helps customers to self-serve..</div>
                                            <div className='sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn' onClick={() => {setIsOpen(true); setModalContent('talkkAi')}}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Feelingfab</div>
                                            <div className='description'>Website for a fitness program, which offers a sustainable lifestyle change for users..</div>
                                            <div className='sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn' onClick={() => {setIsOpen(true); setModalContent('feelingfab')}}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Playing with Animations</div>
                                            <div className='description'>This project focuses on implementing various animations and transitions to enhance the interactivity of the website..</div>
                                            <div className='sub-headline'></div>
                                            <div className='btn-wrapper'>
                                                <button className='btn' onClick={() => {setIsOpen(true); setModalContent('playingWithAnimations')}}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Sign language Translator</div>
                                            <div className='description'>The glove converts ASL into english alphabets as per the hand gestures..</div>
                                            <div className='sub-headline'>Capstone Project - Undergrad</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn' onClick={() => {setIsOpen(true); setModalContent('SignLanguageTranslator')}}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Differential Capital</div>
                                            <div className='description'>It offer various investment products, including a multi-strategy hedge fund..</div>
                                            <div className='sub-headline'>Associated with Gray matrix Pvt. Ltd.</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn' onClick={() => {setIsOpen(true); setModalContent('differentialCapital')}}>Know More</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </Slider>
                                {/* <div className='slider-arrows'>
                                    <div className='arrow left'>
                                        <img src={arrowImage}/>
                                    </div>
                                    <div className='arrow right'>
                                        <img src={arrowImage}/>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects;