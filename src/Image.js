import Photo from './UI/photo.jpg';
import './Image.css';

function Image(props)
{
    return(
        <div className="image">
            <img className="profile" src={Photo}></img> 
        </div>
    )
}

export default Image;