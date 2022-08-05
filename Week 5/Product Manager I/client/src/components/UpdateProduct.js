import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, { title, price, description })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => setErrors(err.response.data.errors));
    };

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct} style={{ width: 500 }}>
                <label className='col-sm-2 col-form-label'>Title:</label>
                <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} className='form-control' />
                {errors.title ? <p>{errors.title.message}</p> : null}
                <label className='col-sm-2 col-form-label' >Price:</label>
                <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} className='form-control' />
                {errors.price ? <p>{errors.price.message}</p> : null}
                <label className='col-sm-2 col-form-label'>Description:</label>
                <input type="textbox" value={description} name="description" onChange={(e) => setDescription(e.target.value)} className='form-control' />
                {errors.description ? <p>{errors.description.message}</p> : null}
                <button type="submit" className="btn btn-primary mt-3">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;