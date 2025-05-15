import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movies/:id' element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
