import { Fragment } from 'react';
 
function Experience(){
    return(
        <Fragment>
            <div className='edu-wrapper '>
                <div className='exp-side-image'></div>
                <div className='container'>
                    <div className='row edu-container'>
                        <div className='col-7'>
                            <div className='heading'>WORK EXPERIENCE</div>
                            <div className='info-wrapper'>
                                <div className='title'>Assistant Frontend Developer</div>
                                <div className='border-line'></div>
                                <div className='description'>Gray Matrix Solutions Pvt. Ltd.</div>
                                <div className='date'>June 2020 to Sept 2020</div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Associate Developer - FEE</div>
                                <div className='border-line'></div>
                                <div className='description'>Indigo Consulting - Publicis Groupe</div>
                                <div className='date'>June 2020 to Sept 2020</div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Frontend Developer</div>
                                <div className='border-line'></div>
                                <div className='description'>Bysness Inc, Pinsaar Software Technologies Pvt. Ltd. </div>
                                <div className='date'>June 2020 to Sept 2020</div>
                            </div>
                        </div>
                        <div className='col-5'></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Experience;