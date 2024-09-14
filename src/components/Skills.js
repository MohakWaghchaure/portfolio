import { Fragment } from 'react';
import SkillsImage from '../images/icons/skills.png';
 
function Skills(){
    return(
        <Fragment>
            <div className='skills-wrapper' id="skills-section-anchor">
                <div className='container'>
                    <div className='skills-container'>
                        <div className='heading-wrap' data-aos="fade-up">
                            <div className='heading'>Skills</div>
                            <div className='heading-icon'>
                                <img src={SkillsImage}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs'>
                                <div className='skills-info-wrapper' data-aos="fade-up">
                                    <div className='title'>Languages / Technologies</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>HTML, CSS, SCSS, JavaScript, Typescript, NodeJS, ReactJS, NextJS, ExpressJS, C++, Python, R, SQL, Flexboxgrid, Bootstrap, Tailwind, MaterialUI, jQuery, GSAP, EJS, Pandas, NumPy</div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-12 col-xs'>
                                <div className='skills-info-wrapper' data-aos="fade-up">
                                    <div className='title'>Applications / Others</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>Vscode, WebStrom, Tableau, GitHub, Git, Firebase, SourceTree, FileZilla, Postman, Vercel, Docker, Figma, Canva, Agile development, Version control, CI/CD, SEO, User-centered design, CMS</div>
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