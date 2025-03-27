import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import SpareParts from "./SpareParts";
import Parallax from "./Parallax";
import Map from "./Map";
import Footer from "./Footer";
import Gallery from "./Gallery"; // Import Gallery component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <SpareParts />
              <Parallax />
              <Map />
              <Footer />
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
