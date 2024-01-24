import { Fragment, useRef } from 'react';
 
function Header({setIsOpen, setModalContent}){
    const scollToRef = useRef();
    return(
        <Fragment>
            <div className='header-wrapper fixed-top'>
                <div className='container header-container'>
                    <div className='row'>
                        <div className='col-5 logo-wrapper'>
                            <div className='logo'>Mohak Sunil Waghchaure</div>
                        </div>
                        <div className='col-7 nav-wrapper'>
                            <div className='row nav-container'>
                                <div className='nav' onClick={() => {setIsOpen(true); setModalContent('about')}}>About</div>
                                <div className='nav'>Education</div>
                                <div className='nav'>Experience</div>
                                <div className='nav'>Skills</div>
                                <div className='nav'>Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Header;