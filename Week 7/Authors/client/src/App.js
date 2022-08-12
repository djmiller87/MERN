import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AuthorList from './components/AuthorList';
import NewAuthor from './components/NewAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="d-flex justify-content-center">
          <Routes>
            <Route path="/" element={<AuthorList/>}/>
            <Route path="/new" element={<NewAuthor/>}/>
            <Route path="/author/edit/:id" element={<UpdateAuthor/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
