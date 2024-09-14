import { Fragment } from 'react';
 
function ExperienceDetails(){
    return(
        <Fragment>
            <div className='more-details-container expDetails'>
                {/* <div className='heading-wrap'>
                    <div className='heading'>WORK EXPERIENCE</div>
                    <div className='heading-icon'>
                        <img src={WorkIcon}/>
                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs'>
                        <div className='info-wrapper exp-details marking-arrow'>
                            <div className='title'>UX Design / Engineering Intern</div>
                            <div className='border-line'></div>
                            <div className='description'> Subconscious.ai, Inc.</div>
                            <div className='date'>June 2024 to Present</div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 col-xs'>
                        <div className='role-description'>
                            <ul>
                                <li>Collaborated with designer and managers to create prototypes and UI specifications in Figma, in Agile methodology.</li>
                                <li>Worked closely with a development team to design, build, and maintain high-performance web applications using Vercel, Next.js and React.js, increasing code usability by 40%. Used tailwind and GSAP animation library to enhance UI interactivity.</li>
                                <li>Wrote clean, maintainable code in TypeScript and JavaScript, enhancing application stability by 20%. Utilized Docker for efficiency</li>
                                <li>Troubleshot and resolved bugs promptly, Efficiently wrote API routes and seamlessly integrated with backend. Used git for version control. Explored and implemented open-source AI projects and libraries, driving innovation and enhancing application features</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs'>
                        <div className='info-wrapper exp-details marking-arrow'>
                            <div className='title'>Assistant Frontend Developer</div>
                            <div className='border-line'></div>
                            <div className='description'>Gray Matrix Solutions Pvt. Ltd.</div>
                            <div className='date'>Oct 2021 to June 2022</div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 col-xs'>
                        <div className='role-description'>
                            <ul>
                                <li>Collaborated with UI/UX professionals in an Agile framework to conceptualize layouts, prototypes, and UI specifications.</li>
                                <li>Coordinated in an 8-member team to develop responsive front-end solutions. Employed HTML, CSS, SCSS, Bootstrap, and media queries for 5 websites and 2 web apps. Utilized JavaScript, jQuery, and animation libraries to increase UI interactivity by 20%.</li>
                                <li>Established project foundations using Node.js, creating EJS templates and 10+ reusable components with React and React hooks.</li>
                                <li>Worked closely with backend and network engineers to implement robust routing and controllers using Express.js while utilizing Git for version control. supervised and mentored intern and junior developers, boosting productivity by 18%.</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs'>
                        <div className='info-wrapper marking-arrow'>
                            <div className='title'>Associate Developer - FEE</div>
                            <div className='border-line'></div>
                            <div className='description'>Indigo Consulting - Publicis Groupe</div>
                            <div className='date'>June 2019 to Sept 2020</div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 col-xs'>
                        <div className='role-description'>
                            <ul>
                                <li>Interacted with the team of designers, CSMs, and clients to grasp UI and project requirements within the Agile methodology.</li>
                                <li>Associated in a 10-member frontend team to develop and maintain websites using HTML, CSS, SCSS, media queries, JavaScript, and jQuery. Worked closely with backend developers, the QA team, handled validations, troubleshooting, and FTP tasks.</li>
                                <li>Handled Content Management System for 5 websites consist of Umbraco, Sitefinity, Drupal, and Backbase.</li>
                                <li>Improved website performance by implementing Search Engine Optimization techniques, resulting in a 22% enhancement.</li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 col-xs'>
                        <div className='info-wrapper marking-arrow'>
                            <div className='title'>Frontend Developer</div>
                            <div className='border-line'></div>
                            <div className='description'>Bysness Inc, Pinsaar Software <br/>Technologies Pvt. Ltd. </div>
                            <div className='date'>Sept 2018 to June 2019</div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 col-xs'>
                        <div className='role-description'>
                            <ul>
                                <li>Synchronized with a team of 2 designers and 5 developers to brainstorm and establish UI requirements and layout designs.</li>
                                <li>Developed responsive web interfaces using HTML, CSS/SCSS for 5+ web applications, incorporated media queries for cross-device compatibility. Conducted manual testing for websites, utilized Git for version control.</li>
                                <li>Improved user experience by 20% with dynamic functionality and animations using JavaScript and the GreenSock Library.</li>
                                <li>Managed Node.js backend operations with MongoDB, including input fields, extensions, CRUD operations, and validations.</li>
                            </ul>
                        </div>


                    </div>
                </div>
                
                
                
            </div>
        </Fragment>
    )
}

export default ExperienceDetails;