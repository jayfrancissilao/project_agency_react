import "/src/App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/OurService/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
