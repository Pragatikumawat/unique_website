// // src/App.jsx
// import Header from './sections/Header';
// import Hero from './sections/Hero.jsx';
// import About from './sections/About';
// import Portfolio from './sections/Portfolio';
// import Contact from './sections/Contact';
 import Footer from './sections/Footer';

// src/App.jsx (Revised Imports)
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx"; // <-- Fix this one
import About from "./sections/About.jsx";
import Portfolio from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx"; 
// ... and any others you have ...



function App() {
  return (
    <>
      <Header />
      <main>
        {/* Each component is a full-width section */}
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;