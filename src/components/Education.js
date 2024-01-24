import { Fragment } from 'react';
import EducationIcon from '../images/icons/graduation-cap.png'
 
function Education({ setIsOpen, setModalContent }){
    return(
        <Fragment>
            <div className='edu-wrapper mb-100' id="edu-section-anchor">
                <div className='edu-side-image'></div>
                <div className='container'>
                    <div className='row edu-container'>
                        <div className='col-5'></div>
                        <div className='col-7'>
                            <div className='heading-wrap'>
                                <div className='heading'>EDUCATION</div>
                                <div className='heading-icon'>
                                    <img src={EducationIcon}/>
                                </div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Master of Science - Information Technology & Analytics</div>
                                <div className='border-line'></div>
                                <div className='description'>Rutgers Business School - Newark & New Brunswick, Rutgers University</div>
                                <div className='date'>June 2022 to Sept 2023</div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Bachelor of Engineering - Electronics</div>
                                <div className='border-line'></div>
                                <div className='description'>Vidyalankar Institute of Technology, Mumbai University</div>
                                <div className='date'>June 2013 to Sept 2017</div>
                            </div>
                            <div className='details-btn' onClick={() => {setIsOpen(true); setModalContent('education')}}>View Details</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Education;