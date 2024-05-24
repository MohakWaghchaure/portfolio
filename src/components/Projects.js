import { Fragment } from 'react';
import React from "react";
import Slider from "react-slick";
import ProjectsImage from '../images/icons/projects.png';

 
function Projects(){
    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // initialSlide: 2
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
                            <div className='heading'>PROJECTS</div>
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
                                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                            <div className='sub-headline'>Associated with Gray Matrix Pvt Ltd</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>View</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Differential capital </div>
                                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                            <div className='sub-headline'>Associated with Gray Matrix Pvt Ltd</div>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>View</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Playing with Animations</div>
                                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                            <div className='sub-headline'></div>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>View</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='card-wrapper'>
                                        <div className='card'>
                                            <div className='headline'>Playing with Animations</div>
                                            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                                            <div className='sub-headline'></div>
                                            <div className='btn-wrapper'>
                                                <button className='btn'>View</button>
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