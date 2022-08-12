import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AuthorList';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch((err) => {
                console.log("There is an error with axios");
                console.log(err);
            })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`).then(res => {
            setAuthors(authors.filter(author => author._id !== authorId));
        })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ width: 1000 }} >
            <h3 className='fs-3 d-flex justify-content-center'>All Authors:</h3>
            {authors.map((author) => (
                <h4 className='fs-4 d-flex justify-content-between border border-3 border-secondary rounded p-2'>
                        <p className='text-secondary'>{author.name}</p>
                    <div>
                        <Link to={`/author/edit/${author._id}`} ><button className='btn btn-primary text-light me-2'>Edit Author</button></Link>
                        <span><button onClick={() => deleteAuthor(author._id)} className='btn btn-danger'>Delete Author</button></span>
                    </div>
                </h4>
            ))}
        </div>
    )
}

export default AuthorList
