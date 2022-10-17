import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router className="app">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/empresa" element={<Empresa />}>
        </Route>
        <Route path="/contato" element={<Contato />}>
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
