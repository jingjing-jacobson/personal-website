import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
