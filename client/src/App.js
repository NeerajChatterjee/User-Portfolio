import './App.css';
import Landing from './Components/Landing/Landing';
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education';
import Experience from './Components/Experiences/Experience';
import MyProjects from './Components/MyProjects/MyProjects';
import MyWorks from './Components/MyWorks/MyWorks';

function App() {
  return (
    <div className='overflow-hidden select-none'>
      <Landing />
      <Skills />
      <Education />
      <Experience />
      <MyProjects />
      <MyWorks />
    </div>
  );
}

export default App;
