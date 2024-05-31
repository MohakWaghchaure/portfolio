import { Fragment } from 'react';
import Profile from '../images/profile.jpeg';
import resumePdf from '../docs/Mohak_Sunil_Waghchaure_Resume.pdf';
import './animations.js';
 
function Home(){
    
    function scrollToContact(){
        const divElement = document.getElementById('contact-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }

    return(
        <Fragment>
            <div className='home-wrapper' id='home-section-anchor'>
                <div className='container'>
                    <div className='row home-container'>
                        {/* <div className='col-lg-6 col-md-6 col-sm-6 col-xs info-wrapper' data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                            <div className='text-1'>Hi</div>
                            <div className='text-1'>I'm Mohak</div>
                            <div className='sm-screen-picture-wrapper'>
                                <div className='sm-picture-container'>
                                    <img src={Profile} style={{filter: 'grayscale(0.5)'}}/>
                                </div> 
                            </div>
                            <div className='text-2 pt-2'>A software developer specialized in frontend engineering</div>
                            <div className='text-2'>Based in New York City</div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 picture-wrapper' data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" >
                            <div className='picture-container'>
                                <img src={Profile} style={{filter: 'grayscale(0.5)'}}/>
                            </div>
                        </div> */}

                        <div className='col-lg-4 col-md-4' data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" >
                            <div className='picture-wrapper'>
                                <div className='picture-container'>
                                    <img src={Profile} style={{filter: 'grayscale(0.5)'}}/>
                                </div>
                            </div>
                            <div className='buttons-container'>
                                <div className='btn-wrapper'>
                                    <button onClick={scrollToContact}>Get In Touch</button>
                                </div>
                                <div className='resume-wrap'>
                                    <a href={resumePdf} download='Mohak_Waghchaure_resume' className='resume'>Download Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-12 col-xs info-wrapper' data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                            <div className='text-1'>Hi, I'm Mohak</div>
                            <div className='sm-screen-picture-wrapper'>
                                <div className='sm-picture-container'>
                                    <img src={Profile} style={{filter: 'grayscale(0.5)'}}/>
                                </div> 
                            </div>
                            <div className='text-2'>A software developer specialized in <span className='highlight'>Frontend Engineering</span>, Based in New York City</div>
                            <div className='text-4'>
                                <ul>
                                    <li>Worked with <span className='highlight'>Web Technologies and Animation</span> libraries</li>
                                    <li>Proficient in <span className='highlight'>React and Node</span> stack</li>
                                    <li>Familiar with design tools like <span className='highlight'>Photoshop, Figma, and Adobe XD</span></li>
                                    <li>Experienced with <span className='highlight'>CMS technologies</span></li>
                                </ul>
                            </div>
                            <div className='text-3'>Beyond tech I'm proficient in client interactions, successful in team and solo projects, eager to learn new technologies</div>
                            
                            <div className='text-2 highlight'>Let's create something amazing together!</div>
                            <div className='sm-buttons-container'>
                                <div className='btn-wrapper'>
                                    <button onClick={scrollToContact}>Get In Touch</button>
                                </div>
                                <div className='resume-wrap'>
                                    <a href={resumePdf} download='Mohak_Waghchaure_resume' className='resume'>Download Resume</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
           
        </Fragment>
    )
}

export default Home;