import { Fragment } from 'react';
 
function Education(){
    return(
        <Fragment>
            <div className='edu-wrapper mb-100'>
                <div className='edu-side-image'></div>
                <div className='container'>
                    <div className='row edu-container'>
                        <div className='col-5'></div>
                        <div className='col-7'>
                            <div className='heading'>EDUCATION</div>
                            <div className='info-wrapper'>
                                <div className='title'>Master of Information Technology and Analytics</div>
                                <div className='border-line'></div>
                                <div className='description'>Rutgers Business School - Newark and New Brunswick Rutgers University</div>
                                <div className='date'>June 2020 to Sept 2020</div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Bachelor of Electronics Engineering</div>
                                <div className='border-line'></div>
                                <div className='description'>Vidyalankar Institute of Technology Mumbai University</div>
                                <div className='date'>June 2020 to Sept 2020</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Education;