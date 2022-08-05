import {useEffect, useState} from 'react'
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const Product = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log("Error getting the Product ID", err))
    }, [id])


    //Temp deleteProduct to make app work
    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res =>{
            navigate('/');
            
        })
    }

    return (
        <div className='card mt-5'>
            <div className='card-body'>
                <h2 className='card-title'> Title: {product.title}</h2>
                <h4 className='card-text'> Price: {product.price}</h4>
                <h3 className='card-text'> Description: {product.description}</h3>
                <button onClick={deleteProduct} className='btn btn-danger'>Delete Product</button>
            </div>
        </div>
    )
}

export default Product;