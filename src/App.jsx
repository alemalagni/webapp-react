import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { LoaderProvider } from './components/LoaderContext';
import Loader from './components/Loader';
import './App.css'

function App() {
    return (
        <LoaderProvider>
            <Loader />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='movies/:id' element={<Movie />} />
                </Routes>
            </BrowserRouter>
        </LoaderProvider>
    )
}

export default App;
