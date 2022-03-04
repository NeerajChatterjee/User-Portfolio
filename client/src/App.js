import './App.css';
import Landing from './Components/Landing/Landing';
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education';
import Experience from './Components/Experiences/Experience';

function App() {
  return (
    <div className='select-none'>
      <Landing />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
