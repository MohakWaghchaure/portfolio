import { Fragment } from 'react';
import github from '../images/icons/github.png';
import linkedin from '../images/icons/linkedin.png';
import phone from '../images/icons/phone.png';
import email from '../images/icons/email.png';
 
function GetInTouch(){
    return(
        <Fragment>
            <div className='contact-wrapper'>
                <div className='container'>
                    <div className='row contact-container'>
                        <div className='col-6'>
                            <div className='heading'>GET IN TOUCH</div>
                            <div className='info-wrapper'>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={email} />
                                    </div>
                                    <a href="mailto:mohak11jan@gmail.com">
                                    <div className='link'>mohak11jan@gmail.com</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={linkedin} />
                                    </div>
                                    <a href="https://www.linkedin.com/in/mohak-waghchaure-410b0bb3/">
                                    <div className='link'>/in/mohak-waghchaure-410b0bb3/</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={github} />
                                    </div>
                                    <a href="https://github.com/MohakWaghchaure">
                                    <div className='link'>MohakWaghchaure</div>
                                    </a>
                                </div>
                                <div className='socials-wrapper'>
                                    <div className='icon'>
                                        <img src={phone} />
                                    </div>
                                    <a href="tel:973-583-1124">
                                    <div className='link'>+1-973-583-1124</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GetInTouch;