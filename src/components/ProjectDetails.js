import { Fragment } from 'react';
 
function ProjectDetails({projectNumber}){
    // console.log('projectNumber', projectNumber);

    return(
        <Fragment>
            {(projectNumber == 'talkkAi') && 
            <div className='project-details-container'>
                <div className='p-headline'>Talkk.ai</div>
                <div className='p-description'>An AI-empowered humanoid robot that helps customers to self-serve with all the significant financial queries.</div>
                <div className='p-description'>Prepared initial setup with Node.js and Ejs. Wrote HTML, SCSS, use of React, bootstrap to increase code reusability. Implemented JavaScript, jQuery codes for dynamic UI, media queries for responsive design and mobile-first approach which increased the site performance. Wrote Express.js codes for page routing.</div>
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'feelingfab') && 
            <div className='project-details-container'>
                <div className='p-headline'>Feelingfab</div>
                <div className='p-description'>Website for a fitness program, which offers a sustainable lifestyle change for users.</div>
                <div className='p-description'>Used HTML, CSS, JavaScript, Bootstrap, React.js for for responsive design. Slick Slider, added scroll-triggered effects by AOS animation improving user experience.</div>
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'differentialCapital') && 
            <div className='project-details-container'>
                <div className='p-headline'>Differential Capital</div>
                <div className='p-description'>It offer various investment products, including a multi-strategy hedge fund and an SA equity unit trust, both aimed at optimizing returns while minimizing risk.</div>
                <div className='p-description'>Built user and admin modules with HTML, SCSS, used bootstrap and React components boosting code reusability. Implemented React animations along with JavaScript codes to enhance user interaction, responsive design and mobile-first approach, integrated webpack for faster development process.</div>
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'playingWithAnimations') && 
            <div className='project-details-container'>
                <div className='p-headline'>Playing with Animations</div>
                <div className='p-description'>This project focuses on implementing various animations and transitions to enhance the interactivity of the website to create a more engaging and effective user experience.</div>
                <div className='p-description'>Technologies used: HTML, CSS, JavaScript, Bootstrap grid, React.js, NPM, GSAP, React Slick</div>
                <div className='p-sub-headline'><a href='https://github.com/MohakWaghchaure/playing-with-animations'>View Code</a></div>
            </div>}
            {(projectNumber == 'SignLanguageTranslator') && 
            <div className='project-details-container'>
                <div className='p-headline'>Sign language Translator</div>
                <div className='p-description'>The glove consist of electronic assembly and sensors, which sense the hand movements and gestures, and controls the movement of robot. Easy, wireless and user friendly way to interact with the robots.
                Used Accelerometer to sense hand movement, Transmitter receiver module and Encoder, decoder for wireless signal transfer. Arduino as a microcontroller, Wheel attached motors for bot movement.</div>
                <div className='p-description'>Technologies used: Digital Circuit Design, Arduino</div>
                <div className='p-sub-headline'>Capstop Project - Undergraduate </div>
            </div>}
        </Fragment>
    )
}

export default ProjectDetails;