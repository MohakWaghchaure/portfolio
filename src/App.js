import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GetInTouch from './components/GetInTouch';

function App() {
  return (
    <div className="body-container">
      <Header></Header>
      <Home></Home>
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
      <GetInTouch></GetInTouch>
    </div>
  );
}

export default App;
