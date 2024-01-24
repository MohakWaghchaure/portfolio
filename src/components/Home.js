import { Fragment } from 'react';
import Profile from '../images/profile.jpeg'
 
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
                        <div className='col-6 info-wrapper'>
                            <div className='text-1'>Hi</div>
                            <div className='text-1'>I'm Mohak</div>
                            <div className='text-2 pt-2'>A Frontend / Application Developer</div>
                            <div className='text-2'>based in New York City</div>
                            <div className='btn-wrapper'>
                                <button onClick={scrollToContact}>GET IN TOUCH</button>
                            </div>
                        </div>
                        <div className='col-6 picture-wrapper'>
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