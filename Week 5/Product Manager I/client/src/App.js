
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import NewProduct from './components/NewProduct';
import Product from './components/Product';
import Header from './components/Header';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Header/>
        <div className="d-flex justify-content-center">
          <Routes >
            <Route path="/" element={<ProductList/>}/>
            <Route path="/new" element={<NewProduct/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/product/edit/:id" element={<UpdateProduct/>}/>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
