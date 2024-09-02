import Social from '../../common/socialIcons/Social';
import './MiddleIcons.css'

const MiddleIcons = ({iconName, myIcon}) => {
    return(
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row g-0">
            <div className="main_icon d-flex align-items-center justify-content-center">
                <ul>
                    <Social iconName="youtube" myIcon="main_social"/>
                    <Social iconName="facebook" myIcon="main_social"/>
                    <Social iconName="g" myIcon="main_social"/>
                    <Social iconName="linkedin" myIcon="main_social"/>
                    
                </ul>
            </div>
            </div>
        </div>
    )
}

export default MiddleIcons;