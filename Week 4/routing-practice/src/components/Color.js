import {Link, useParams} from 'react-router-dom';

const Color = (props) => {
    const {word, color, bgColor} = useParams();

    return(
        <div>
            <h1 style={{color:color, backgroundColor: bgColor}}>The word is: {word}</h1>
        </div>
    )

}

export default Color