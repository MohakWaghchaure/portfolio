import { Fragment } from 'react';
import SkillsImage from '../images/skills.png'
 
function Skills(){
    return(
        <Fragment>
            <div className='edu-wrapper'>
                <div className='container'>
                    <div className='row edu-container'>
                        <div className='col-5'>
                            <div className='skills-image'>
                                <img src={SkillsImage}/>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className='heading'>SKILLS</div>
                            <div className='info-wrapper'>
                                <div className='title'>Languages/ Technologies</div>
                                <div className='border-line'></div>
                                <div className='description'>HTML, CSS, JavaScript, SCSS, jQuery, C++, Bootstrap, GSAP, Flexbox, React, Express, R, SQL, Python, SQL</div>
                            </div>
                            <div className='info-wrapper'>
                                <div className='title'>Applications/others</div>
                                <div className='border-line'></div>
                                <div className='description'>Vscode, WebStrom, Ms. Office, GitHub, Git, Firebase, SourceTree, Arduino, FileZilla, Agile Methodology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;