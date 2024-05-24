import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Routing";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routing />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
