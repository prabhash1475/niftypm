
import './App.css';
import Allroutes from './Components/Allroutes';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Allroutes/>
    </div>
  );
}

export default App;
