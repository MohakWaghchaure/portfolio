import { Fragment } from 'react';
 
function Header({setIsOpen, setModalContent}){

    function scrollToHome(){
        const divElement = document.getElementById('home-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }
    function scrollToEdu(){
        const divElement = document.getElementById('edu-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }
    function scrollToExp(){
        const divElement = document.getElementById('exp-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }
    function scrollToskills(){
        const divElement = document.getElementById('skills-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }
    function scrollToContact(){
        const divElement = document.getElementById('contact-section-anchor').offsetTop;
        window.scrollTo({ top: divElement - 50, behavior: 'smooth' });
    }

    return(
        <Fragment>
            <div className='header-wrapper fixed-top'>
                <div className='container header-container'>
                    <div className='row'>
                        <div className='col-5 logo-wrapper'>
                            <div className='logo' onClick={scrollToHome}>Mohak Sunil Waghchaure</div>
                        </div>
                        <div className='col-7 nav-wrapper'>
                            <div className='row nav-container'>
                                <div className='nav' onClick={() => {setIsOpen(true); setModalContent('about')}}>About</div>
                                <div className='nav' onClick={scrollToEdu}>Education</div>
                                <div className='nav' onClick={scrollToExp}>Experience</div>
                                <div className='nav' onClick={scrollToskills}>Skills</div>
                                <div className='nav' onClick={scrollToContact}>Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Header;