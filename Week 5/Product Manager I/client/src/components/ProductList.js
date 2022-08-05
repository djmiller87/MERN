import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './ProductList';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log("There is an error with axios");
                console.log(err);
            })
    }, [])

    const deleteProduct = (productId) =>{
        axios.delete(`http://localhost:8000/api/products/${productId}`).then(res =>{
            setProducts(products.filter(product => product._id !== productId));
        })
        .catch(err => console.log(err));
    }

    return (
        <div style={{width: 500}} >
            <h3 className='fs-3 d-flex justify-content-center'>All Products:</h3>
            {products.map((product) => (
                <h4 className='fs-4 d-flex justify-content-between border border-3 border-secondary rounded p-2'>
                    <Link to={`/product/${product._id}`} ><p className='text-secondary'>{product.title}</p></Link>
                    <div>
                        <Link to={`/product/edit/${product._id}`} ><button className='btn btn-primary text-light me-2'>Edit Product</button></Link>
                        <span><button onClick={() => deleteProduct(product._id)} className='btn btn-danger'>Delete Product</button></span>
                    </div>
                </h4>
            ))}
        </div>
    )
}

export default ProductList