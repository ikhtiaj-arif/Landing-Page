import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar';
import Hero from './Pages/Home/Hero';



function App() {
  return (
   <div className='m-0 p-0 relative '>
    <Navbar/>
   <Home/>
  
  
   </div>
  );
}

export default App;
