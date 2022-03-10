import './App.css';
import Landing from './Components/Landing/Landing';
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education';
import Experience from './Components/Experiences/Experience';
import MyProjects from './Components/MyProjects/MyProjects';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='select-none'>
      <Landing />
      <Skills />
      <Education />
      <Experience />
      <MyProjects />
      <Projects />
    </div>
  );
}

export default App;
