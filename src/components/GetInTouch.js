import { Fragment } from 'react';
import github from '../images/icons/github.png';
import linkedin from '../images/icons/linkedin.png';
import phone from '../images/icons/phone.png';
import email from '../images/icons/email.png';
import resumePdf from '../docs/Mohak_Sunil_Waghchaure_Resume.pdf'
 
function GetInTouch(){
    return(
        <Fragment>
            <div className='contact-wrapper' id="contact-section-anchor">
                <div className='container'>
                    <div className='row contact-container' data-aos="fade-up">
                        <div className='heading'>GET IN TOUCH</div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs'>
                            <div className='info-wrapper'>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={email} />
                                    </div>
                                    <a href="mailto:mohak11jan@gmail.com" target="_blank">
                                    <div className='link'>mohak11jan@gmail.com</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={linkedin} />
                                    </div>
                                    <a href="https://www.linkedin.com/in/mohak-waghchaure-410b0bb3/" target="_blank">
                                    <div className='link'>/in/mohakwaghchaure/</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={github} />
                                    </div>
                                    <a href="https://github.com/MohakWaghchaure" target="_blank">
                                    <div className='link'>MohakWaghchaure</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={phone} />
                                    </div>
                                    <a href="tel:973-583-1124" target="_blank">
                                    <div className='link'>+1-973-583-1124</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs'>
                            <div className='resume-wrapper'>    
                                <a href={resumePdf} download='Mohak_Waghchaure_resume' className='download-resume'>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GetInTouch;