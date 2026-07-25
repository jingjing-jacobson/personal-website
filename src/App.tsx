import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
