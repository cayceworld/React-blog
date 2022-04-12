import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import PostAdd from './components/pages/PostAdd/PostAdd'
import PostEdit from './components/pages/PostEdit/PostEdit';
import SinglePost from './components/pages/SinglePost/SinglePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container >
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
