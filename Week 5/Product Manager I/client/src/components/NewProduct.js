import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const NewProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', { title, price, description })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    };

    return (
        <div>
            <h1>New Product</h1>
            <form onSubmit={handleSubmit} style={{ width: 500 }}>
                <label className='col-sm-2 col-form-label'>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
                {errors.title ? <p>{errors.title.message}</p> : null}
                <label className='col-sm-2 col-form-label' >Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' />
                {errors.price ? <p>{errors.price.message}</p> : null}
                <label className='col-sm-2 col-form-label'>Description:</label>
                <input type="textbox" value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' />
                {errors.description ? <p>{errors.description.message}</p> : null}
                <button type="submit" className="btn btn-primary mt-3">Add Product</button>
            </form>
        </div>
    );
};

export default NewProduct;