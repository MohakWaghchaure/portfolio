import { Fragment } from 'react';
import SkillsImage from '../images/skills.png'

 
function Skills(){
    return(
        <Fragment>
            <div className='skills-wrapper' id="skills-section-anchor">
                <div className='container'>
                    <div className='skills-container'>
                        <div className='heading-wrap'>
                            <div className='heading'>SKILLS</div>
                            <div className='heading-icon'>
                                <img src={SkillsImage}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Languages/ Technologies</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>HTML, CSS, JavaScript, SCSS, jQuery, C++, Bootstrap, GSAP, Flexbox, React, Express, R, Python, SQL</div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='skills-info-wrapper'>
                                    <div className='title'>Applications/others</div>
                                    {/* <div className='border-line'></div> */}
                                    <div className='description'>Vscode, WebStrom, Ms. Office, GitHub, Git, Firebase, SourceTree, Arduino, FileZilla, Agile Methodology</div>
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