import { Fragment } from 'react';
import EducationIcon from '../images/icons/graduation-cap.png'
 
function EducationDetails(){
    return(
        <Fragment>
            <div className='more-details-container eduDetails'>
                {/* <div className='heading-wrap'>
                    <div className='heading'>EDUCATION</div>
                    <div className='heading-icon'>
                        <img src={EducationIcon}/>
                    </div>
                </div> */}
                <div className='info-wrapper'>
                    <div className='title'>Master of Science - Information Technology & Analytics</div>
                    <div className='border-line'></div>
                    <div className='description pb-2'>Rutgers Business School - Newark & New Brunswick, Rutgers University</div>
                    <div className='subjects'>Related Courses: Information Security, Business Data Management, Software Development, Analytics Business Intelligence,<br />
                        Project Management, Business Analytics Programming, Data Mining, Algorithmic Machine Learning, Data Visualization</div>
                    <div className='date pt-2'>June 2022 to Sept 2023</div>
                </div>
                <div className='info-wrapper'>
                    <div className='title'>Bachelor of Engineering - Electronics</div>
                    <div className='border-line'></div>
                    <div className='description pb-2'>Vidyalankar Institute of Technology, Mumbai University</div>
                    <div className='subjects'>Related Courses: Electronic Devices, Digital Circuit Design, Structured programming, Integrated Circuits, Signals and Systems</div>
                    <div className='date pt-2'>June 2013 to Sept 2017</div>
                </div>
            </div>
        </Fragment>
    )
}

export default EducationDetails;