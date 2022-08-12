import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const UpdateAuthor = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err));
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => setErrors(err.response.data.errors));
    };

    return (
        <div>
            <h1>Update Author</h1>
            <form onSubmit={updateAuthor} style={{ width: 500 }}>
                <label className='col-sm-2 col-form-label'>Name:</label>
                <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} className='form-control' />
                {errors.name ? <p>{errors.name.message}</p> : null}
                <Link to={'/'}><button className="btn btn-primary mt-3 me-3">Cancel</button></Link>
                <button type="submit" className="btn btn-primary mt-3">Update Author</button>
            </form>
        </div>
    );
};

export default UpdateAuthor;
