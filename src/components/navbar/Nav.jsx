

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
            </div>
            <div className='rightnav'></div>
        </div>
    )
}

export default Nav;