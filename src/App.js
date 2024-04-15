import './App.css';
import AboutUs from './aboutus/AboutUs';
import Navbar from './components/Navbar';
import Dashboard from './dashboard/Dashboard';
import Projects from './projects/Projects';
import Services from './services/Services';

function App() {
  return (
    <div className='app overflow-x-hidden'>
   <Navbar/>
   <Dashboard/>
   <Services/>
   <AboutUs/>
   <Projects/>
    </div>
  );
}

export default App;
