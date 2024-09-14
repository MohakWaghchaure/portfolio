import { Fragment } from 'react';
import WorkIcon from '../images/icons/experience.png';
 
function Experience({ setIsOpen, setModalContent }){
    return(
        <Fragment>
            <div className='edu-wrapper experiece-wrapper' id="exp-section-anchor">
                <div className='exp-side-image' data-aos="fade-left"></div>
                <div className='container'>
                    <div className='row edu-container'>
                        <div className='col-lg-7 col-md-7 col-sm-9 col-xs'>
                            <div className='heading-wrap' data-aos="fade-up">
                                <div className='heading'>Work Experiece</div>
                                <div className='heading-icon'>
                                    <img src={WorkIcon}/>
                                </div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>UX Design / Engineering Intern</div>
                                <div className='border-line'></div>
                                <div className='description'>Subconscious.ai, Inc.</div>
                                <div className='date'>June 2024 to Present</div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>Assistant Frontend Developer</div>
                                <div className='border-line'></div>
                                <div className='description'>Gray Matrix Solutions Pvt. Ltd.</div>
                                <div className='date'>Oct 2021 to June 2022</div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>Associate Developer - FEE</div>
                                <div className='border-line'></div>
                                <div className='description'>Indigo Consulting - Publicis Groupe</div>
                                <div className='date'>June 2019 to Sept 2020</div>
                            </div>
                            <div className='info-wrapper' data-aos="fade-up">
                                <div className='title'>Frontend Developer</div>
                                <div className='border-line'></div>
                                <div className='description'>Bysness Inc, Pinsaar Software Technologies Pvt. Ltd. </div>
                                <div className='date'>Sept 2018 to June 2019</div>
                            </div>
                            <div className='details-btn-wrap' data-aos="fade-up">
                                <div className='details-btn exp' onClick={() => {setIsOpen(true); setModalContent('experience')}}>Know More</div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-5 col-sm-3'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience;