import NewsDetail from 'pages/Home/components/NewsDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Category from './pages/Category/Category';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import LastNews from './pages/LastNews/LastNews';
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
                    <Route path="/:newsId" element={<NewsDetail />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    {/* <Route path="/login" element={<Login/>}></Route> */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
