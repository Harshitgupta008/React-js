import './Navbar.css'
import newsimage from './image/newsimg.jpg'
function Newscard({ title, description, url, src }) {

    return (
        <>
            <div className="card">
                <img src={src ? src : newsimage} alt="Card Image" className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-description">{description}</p>
                    <a href={url} className="read-more-button">Read More</a>
                </div>
            </div>
        </>
    )
}
export default Newscard;