import { Fragment } from 'react';
 
function ExperienceDetails(){
    return(
        <Fragment>
            <div className='more-details-container eduDetails'>
                <div className='heading-wrap'>
                    <div className='heading'>WORK EXPERIENCE</div>
                    <div className='heading-icon'>
                        {/* <img src={WorkIcon}/> */}
                    </div>
                </div>
                <div className='info-wrapper'>
                    <div className='title'>Assistant Frontend Developer</div>
                    <div className='border-line'></div>
                    <div className='description'>Gray Matrix Solutions Pvt. Ltd.</div>
                    <div className='date'>June 2021 to Sept 2022</div>
                </div>
                <div className='info-wrapper'>
                    <div className='title'>Associate Developer - FEE</div>
                    <div className='border-line'></div>
                    <div className='description'>Indigo Consulting - Publicis Groupe</div>
                    <div className='date'>June 2019 to Sept 2020</div>
                </div>
                <div className='info-wrapper'>
                    <div className='title'>Frontend Developer</div>
                    <div className='border-line'></div>
                    <div className='description'>Bysness Inc, Pinsaar Software Technologies Pvt. Ltd. </div>
                    <div className='date'>June 2018 to Sept 2019</div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExperienceDetails;