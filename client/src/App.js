import './App.css';
import Landing from './Components/Landing/Landing';
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education';
import Experience from './Components/Experiences/Experience';
import MyProjects from './Components/MyProjects/MyProjects';
import MyWorks from './Components/MyWorks/MyWorks';
import TextAnim from './Components/TextAnim/TextAnim';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='overflow-hidden select-none'>
      <Landing />
      <TextAnim />
      <Skills />
      <Education />
      <Experience />
      <MyProjects />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
