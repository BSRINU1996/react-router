import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Notfound from './components/Notfound.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>React Router </h1>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<div>this is HomePage</div>} />
          <Route exact path="about" element={<div>this is About PAge</div>} />
          <Route exact path="contact" element={<div> this is ContactPage</div>} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route component={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
