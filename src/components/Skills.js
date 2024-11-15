import { Fragment } from 'react';
import SkillsImage from '../images/icons/skills.png';
 
function Skills(){
    return(
        <Fragment>
            <div className='skills-wrapper' id="skills-section-anchor">
                <div className='container'>
                    <div className='skills-container'>
                        <div className='heading-wrap'>
                            <div className='heading'>Skills</div>
                            <div className='heading-icon'>
                                <img src={SkillsImage}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs pb-4'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Technologies</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>HTML, CSS, SCSS, JavaScript, Typescript, JSON, Node, React, Next, Angular, Express, C++, Java, Python, SQL, MongoDB, FastAPI</div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs pb-4'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Frameworks</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>Flexboxgrid, Bootstrap, Tailwind, MaterialUI, jQuery, GSAP, EJS, Pandas, NumPy, Jest, D3js, ReactFlow, Spring, Spring Boot, Mocha</div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs pb-4'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Tools</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>Vscode, WebStrom, Tableau, GitHub, Git, Firebase, SourceTree, Redux, Postman, Swagger, Vercel, Docker, GCP, Jira, Npm, Webpack, Pygwalker</div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs pb-4'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Methodologies</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>Agile development, Version control, CI/CD, SEO, CMS, RESTAPI, Data Structures & Algorithms, Object Oriented Programming, User-centered design</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;