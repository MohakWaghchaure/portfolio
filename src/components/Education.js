import { Fragment } from 'react';
import EducationIcon from '../images/icons/graduation-cap.png'
 
function Education({ setIsOpen, setModalContent }){
    return(
        <Fragment>
            <div className='edu-wrapper mbottom-100' id="edu-section-anchor">
                <div className='edu-side-image' data-aos="fade-right"></div>
                <div className='container'>
                    <div className='row edu-container padding-extra'>
                        <div className='col-lg-5 col-md-5 col-sm-3'></div>
                        <div className='col-lg-7 col-md-7 col-sm-9 col-xs'>
                            <div className='heading-wrap' data-aos="fade-up">
                                <div className='heading'>EDUCATION</div>
                                <div className='heading-icon'>
                                    <img src={EducationIcon}/>
                                </div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>Master of Science - Information Technology & Analytics</div>
                                <div className='border-line'></div>
                                <div className='description'>Rutgers Business School - Newark & New Brunswick, Rutgers University</div>
                                <div className='date'>June 2022 to Sept 2023</div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>Bachelor of Engineering - Electronics</div>
                                <div className='border-line'></div>
                                <div className='description'>Vidyalankar Institute of Technology, Mumbai University</div>
                                <div className='date'>June 2013 to Sept 2017</div>
                            </div>
                            <div className='details-btn-wrap' data-aos="fade-up">
                                <div className='details-btn' onClick={() => {setIsOpen(true); setModalContent('education')}}>View Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Education;