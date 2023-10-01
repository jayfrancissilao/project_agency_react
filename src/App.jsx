import "/src/App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/OurService/Services";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
