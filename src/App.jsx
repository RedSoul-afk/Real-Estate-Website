import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Estates from "./Estates";
import Narratives from "./Narratives";
import Concierge from "./Concierge";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-dark font-sans text-gray-200 selection:bg-brand-gold/30 selection:text-brand-gold flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estates" element={<Estates />} />
            <Route path="/narratives" element={<Narratives />} />
            <Route path="/concierge" element={<Concierge />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
