import './App.css';

// layout
import BasicLayout from './layouts/BasicLayout';

// page
import Home from './pages/home/Home';
import About from './pages/about/About';
import RecentPost from './pages/recent-posts/RecentPost';

// packages
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='recent-posts' element={<RecentPost />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
