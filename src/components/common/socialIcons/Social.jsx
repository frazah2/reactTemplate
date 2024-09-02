import './Social.css'

const Social = ({iconName, myIcon}) => {
    return(
        <li>
            <i class={`fa-brands fa-${iconName} ${myIcon}`}></i>
        </li>
    )
}

export default Social;