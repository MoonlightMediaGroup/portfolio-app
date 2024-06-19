//Main styles
import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Basic components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      
      <Router>
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
