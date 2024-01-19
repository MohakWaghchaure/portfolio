import { Fragment } from 'react';
import Profile from '../images/profile.png'
 
function Home(){
    return(
        <Fragment>
            <div className='home-wrapper'>
                <div className='container'>
                    <div className='row home-container'>
                        <div className='col-6 info-wrapper'>
                            <div className='text-1'>Hi</div>
                            <div className='text-1'>I'm Mohak</div>
                            <div className='text-2 pt-2'>A Frontend / Application Developer</div>
                            <div className='text-2'>based in New Jersey</div>
                            <div className='btn-wrapper'>
                                <button>GET IN TOUCH</button>
                            </div>
                        </div>
                        <div className='col-6 picture-wrapper'>
                            <div className='picture-container'>
                                <img src={Profile}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
        </Fragment>
    )
}

export default Home;