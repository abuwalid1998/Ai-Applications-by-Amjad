
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/NavBar.tsx";
import Footer from "./Components/Footer.tsx";
import Summarization from "./Pages/Summrization.tsx";
import TextToImage from "./Pages/TextToImage.tsx";
import HomePage from "./Pages/HomePage.tsx";
import NotFoundPage from "./Pages/404.tsx";
import TextTo3D from "./Pages/TextTo3d.tsx";

function App() {


  return (
      <>
          <>
              <Router>
                  <Navbar/>
                  <Routes>
                      <Route path="/sum" element={<Summarization/>} />
                      <Route index={true} element={<HomePage />} />
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/image-generation" element={<TextToImage/>} />
                      <Route path="/3d-lab" element={<TextTo3D/>} />
                      <Route path="/*" element={<NotFoundPage/>} />
                  </Routes>
                  <Footer />
              </Router>
          </>

      </>
  )
}

export default App
