import { Fragment } from 'react';
 
function ProjectDetails({projectNumber}){
    // console.log('projectNumber', projectNumber);

    return(
        <Fragment>
            {(projectNumber == 'lordOfTheDrinks') && 
            <div className='project-details-container'>
                <div className='p-headline'>Lord of the Drinks</div>
                <div className='p-description'>Lord of the Drinks provides drink information and recipes, and users can search for their favorite drinks by name or ingredient.</div>
                <div className='p-description'>Utilized Next.js for server-side rendering, SCSS for modular styling, Bootstrap Grid for responsive layouts, Vercel for deployment, and API handling for dynamic data fetching in the project.</div>
                <div className='p-sub-headline'><a href='https://github.com/MohakWaghchaure/drinks-information' target='_blank'>View code</a></div>
            </div>}
            {(projectNumber == 'playingWithAnimations') && 
            <div className='project-details-container'>
                <div className='p-headline'>Playing with Animations</div>
                <div className='p-description'>This project focuses on implementing various animations and transitions to enhance the interactivity of the website to create a more engaging and effective user experience.</div>
                <div className='p-description'>Technologies used: HTML, CSS, JavaScript, Bootstrap grid, React.js, NPM, GSAP, React Slick</div>
                <div className='p-sub-headline'><a href='https://github.com/MohakWaghchaure/playing-with-animations' target='_blank'>View code</a></div>
            </div>}
            {(projectNumber == 'interiorPage') && 
            <div className='project-details-container'>
                <div className='p-headline'>Interior landing page</div>
                <div className='p-description'>Developed a visually appealing landing page for an interior design business using React.js, SCSS for modular styling, and Bootstrap for responsive design. The page highlights projects, services, and client testimonials to deliver a seamless user experience.</div>
                <div className='p-sub-headline'><a href='https://github.com/MohakWaghchaure/interior' target='_blank'>View code</a></div>
            </div>}
            {(projectNumber == 'pricingPage') && 
            <div className='project-details-container'>
                <div className='p-headline'>Pricing mockup page</div>
                <div className='p-description'>Responsive pricing page showcasing various subscription plans, using a clean design with React.js and CSS for styling. The page features clear, interactive pricing cards, highlighting key benefits and details for each plan, making it easy for users to compare options and make informed decisions.</div>
                <div className='p-sub-headline'><a href='https://github.com/MohakWaghchaure/pricing-page' target='_blank'>View code</a></div>
            </div>}
            {(projectNumber == 'subconsciousAI') && 
            <div className='project-details-container'>
                <div className='p-headline'>Subconscious AI</div>
                <div className='p-description'>Subconscious.ai leverages machine learning and natural language processing to analyze user behavior, preferences, and interactions, offering personalized insights, recommendations, and predictions to enhance user experiences and decision-making.</div>
                <div className='p-description'>Utilized Next.js for server-side rendering, PyGWalker for data visualization, React Hooks for state management, Tailwind for responsive design, and Vercel for seamless deployment in the development of Subconscious.ai.</div>
                <div className='p-sub-headline'>Associated with Subconscious.ai Inc.</div>
            </div>}
            {(projectNumber == 'talkkAi') && 
            <div className='project-details-container'>
                <div className='p-headline'>Talkk.ai</div>
                <div className='p-description'>An AI-empowered humanoid robot that helps customers to self-serve with all the significant financial queries.</div>
                <div className='p-description'>Prepared initial setup with Node.js and Ejs. Wrote HTML, SCSS, use of React, bootstrap to increase code reusability. Implemented JavaScript, jQuery codes for dynamic UI, media queries for responsive design and mobile-first approach which increased the site performance. Wrote Express.js codes for page routing.</div>
                <div className='p-sub-headline'>Associated with Gray Matrix Pvt. Ltd.</div>
            </div>}
            {(projectNumber == 'feelingfab') && 
            <div className='project-details-container'>
                <div className='p-headline'>Feeling Fabulous</div>
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
        </Fragment>
    )
}

export default ProjectDetails;