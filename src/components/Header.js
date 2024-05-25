import { useState, Fragment } from 'react';
import HamburgerMenu from '../images/icons/menu-bar.png'
 
function Header({setIsOpen, setModalContent}){
    const [mobileMenu, setMobileMenu] = useState(false);

    window.onscroll = function() {
        let scrollVal = 100;
        if (window.scrollY >= scrollVal) {
            document.querySelector(".header-wrapper").classList.add("inverted");
        } else {
            document.querySelector(".header-wrapper").classList.remove("inverted");
        }
    };

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
    function scrollToProjects(){
        const divElement = document.getElementById('project-section-anchor').offsetTop;
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
            <div className='header-wrapper fixed-top' data-aos="fade-down">
                <div className='container header-container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-5 col-6 logo-wrapper'>
                            <div className='logo' onClick={scrollToHome}>Mohak Sunil Waghchaure</div>
                            <div className='logo-small' onClick={scrollToHome}>MSW</div>
                        </div>
                        <div className='col-lg-7 col-md-7 col-sm-7 col-6 nav-wrapper'>
                            <div className='row nav-container'>
                                <div className='nav' onClick={scrollToEdu}>Education</div>
                                <div className='nav' onClick={scrollToExp}>Experience</div>
                                <div className='nav' onClick={scrollToProjects}>Projects</div>
                                <div className='nav' onClick={scrollToskills}>Skills</div>
                                <div className='nav' onClick={scrollToContact}>Contact</div>
                            </div>
                            <div className='hamburger' onClick={() => setMobileMenu(!mobileMenu)}>
                                <img src={HamburgerMenu}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mobileMenu ? 'mobile-navigation active': 'mobile-navigation'}>
                    <div className='row nav-container'>
                        <div className='nav' onClick={scrollToEdu}>Education</div>
                        <div className='nav' onClick={scrollToExp}>Experience</div>
                        <div className='nav' onClick={scrollToProjects}>Projects</div>
                        <div className='nav' onClick={scrollToskills}>Skills</div>
                        <div className='nav' onClick={scrollToContact}>Contact</div>
                        <span className='menu-close' onClick={() => setMobileMenu(!mobileMenu)}></span>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Header;