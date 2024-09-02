

import Icons from './icons/Icons';
import './Nav.css'

const Nav = () => {
    return (
        <div className='navi'>
            <div className='logo'>
                <img src="https://clipart-library.com/img/770192.png" alt="" />
            </div>
            <div className='middle'>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                </ul>
                <button>DOWNLOAD NOW!</button>
                <Icons/>
            </div>
            {/* <div className='rightnav'>
                <Icons/>
            </div> */}
        </div>
    )
}

export default Nav;