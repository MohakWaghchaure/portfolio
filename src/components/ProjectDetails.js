import { Fragment } from 'react';
 
function ProjectDetails({projectNumber}){
    // console.log('projectNumber', projectNumber);

    return(
        <Fragment>
            {(projectNumber == 'talkkAi') && 
            <div className='project-details-container'>
                <div className='p-headline'>Talkk.ai</div>
                <div className='p-description'>An AI-empowered humanoid robot that helps customers to self-serve with all the significant financial queries</div>
                <div className='p-description'>Prepared initial setup with Node.js and Ejs. Wrote HTML, SCSS, use of React, bootstrap to increase code reusability by 40%. Implemented JavaScript, jQuery codes for dynamic UI, media queries for responsive design and mobile-first approach which increased the site performance by 27%. Wrote Express.js codes for page routing.</div>
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'feelingfab') && 
            <div className='project-details-container'>
                <div className='p-headline'>Feelingfab</div>
                <div className='p-description'>Website for a fitness program, which offers a sustainable lifestyle change for users.</div>
                {/* <div className='p-description'>React.js, NPM, HTML, CSS, SCSS, GSAP</div> */}
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'playingWithAnimations') && 
            <div className='project-details-container'>
                <div className='p-headline'>Playing with Animations</div>
                <div className='p-description'>This project focuses on implementing various animations and transitions to enhance the interactivity of the website to create a more engaging and effective user experience.</div>
                {/* <div className='p-description'>React.js, NPM, HTML, CSS, SCSS, GSAP</div> */}
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'SignLanguageTranslator') && 
            <div className='project-details-container'>
                <div className='p-headline'>Sign language Translator</div>
                <div className='p-description'>The hand glove consists of sensors and electronic assembly, which gathers the data according to the position</div>
                {/* <div className='p-description'>React.js, NPM, HTML, CSS, SCSS, GSAP</div> */}
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
        </Fragment>
    )
}

export default ProjectDetails;