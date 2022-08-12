import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const NewAuthor = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log("Errors")
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <h1>New Author</h1>
            <form onSubmit={handleSubmit} style={{ width: 500 }}>
                <label className='col-sm-2 col-form-label'>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' />
                {errors.name ? <p>{errors.name.message}</p> : null}
                <Link to={'/'}><button className="btn btn-primary mt-3 me-3">Cancel</button></Link>
                <button type="submit" className="btn btn-primary mt-3 ">Add Author</button>
            </form>
        </div>
    );
};

export default NewAuthor;
