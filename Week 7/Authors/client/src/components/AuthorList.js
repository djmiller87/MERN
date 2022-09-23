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
    // Following function accredited to: 
    //https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
    const sortAuthors = (value) => {
        return (a,b) => 
                a[value].localeCompare(b[value]);
        }



    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`).then(res => {
            setAuthors(authors.filter(author => author._id !== authorId));
        })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ width: 1000, height: 500}} className="overflow-auto" >
            <h3 className='fs-3 d-flex justify-content-center'>All Authors:</h3>
            <table className="table table-bordered border-secondary border border-3 rounded p-2">
                <thead className='border border-3 border-secondary'>
                    <tr>
                        <th scope="col" className='border border-3 border-secondary'>Author</th>
                        <th scope="col" className='border border-3 border-secondary'>Options</th>
                    </tr>
                </thead>
                <tbody >
                    {authors.sort(sortAuthors("name")).map((author) => (
                    <tr className='border border-3 border-secondary'>
                        <td className='fs-4 d-flex justify-content-between'>
                            {author.name}
                        </td>
                        <td className='border border-3 border-secondary'>
                            <div>
                                <Link to={`/author/edit/${author._id}`} ><button className='btn btn-primary text-light me-2'>Edit Author</button></Link>
                                <span><button onClick={() => deleteAuthor(author._id)} className='btn btn-danger'>Delete Author</button></span>
                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList
