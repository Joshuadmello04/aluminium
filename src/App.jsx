import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Visuals from './Components/Visual1';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 w-full h-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Navbar />
      <Hero id="hero" />  {/* Pass id as prop */}
      <Visuals id="visuals" />  {/* Pass id as prop */}
      <Footer />
    </div>
  );
}

export default App;
