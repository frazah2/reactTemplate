import Social from '../../common/socialIcons/Social';
import './Icons.css'

const Icons = ({iconName, myIcon}) => {
    return(
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="row g-0">
            <div className="social_n d-flex align-items-center justify-content-center">
                <ul>
                    <Social iconName="youtube" myIcon="nav_social"/>
                    <Social iconName="facebook" myIcon="nav_social"/>
                    <Social iconName="g" myIcon="nav_social"/>
                    <Social iconName="linkedin" myIcon="nav_social"/>
                    <Social iconName="pinterest" myIcon="nav_social"/>
                    <Social iconName="instagram" myIcon="nav_social"/>
                    <Social iconName="twitter" myIcon="nav_social"/>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Icons;