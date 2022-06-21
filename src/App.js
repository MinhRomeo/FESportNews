
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/scss/style.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Category from './pages/Category/Category';
import LastNews from './pages/LastNews/LastNews';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/category" element={<Category />}></Route>
                    <Route path="/lastnews" element={<LastNews />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/blogdetail" element={<BlogDetail />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
