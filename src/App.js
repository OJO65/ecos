import './App.css';
import { BrowserRouter } from "react-router-dom"
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
