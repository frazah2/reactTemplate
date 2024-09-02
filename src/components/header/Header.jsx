import './Header.css'

const Head = ({title, className}) => {
    return(
        <div className="container-fluid px-0">
            <div className={`about ${className}`}>{title}</div>
        </div>
    )
}

export default Head;