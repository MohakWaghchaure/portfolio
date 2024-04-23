import { Fragment } from 'react';
import Profile from '../images/profile.jpeg';
 
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
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs info-wrapper' data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                            <div className='text-1'>Hi</div>
                            <div className='text-1'>I'm Mohak</div>
                            <div className='sm-screen-picture-wrapper'>
                                <div className='sm-picture-container'>
                                    <img src={Profile}/>
                                </div> 
                            </div>
                            <div className='text-2 pt-2'>A software developer specialized in frontend engineering</div>
                            <div className='text-2'>Based in New York City</div>
                            <div className='btn-wrapper'>
                                <button onClick={scrollToContact}>GET IN TOUCH</button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 picture-wrapper' data-aos="fade-left" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0" >
                            <div className='picture-container'>
                                <img src={Profile}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </Fragment>
    )
}

export default Home;