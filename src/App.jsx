import "./App.scss";
import NavBar from "./components/Static/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Static/Footer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import GalleryDetail from "./pages/GalleryDetail/GalleryDetail";
import Donaciones from "./pages/Donaciones/Donaciones";
import Forms from "./pages/CreateForm/Forms";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import { PetContextProvider } from "./context/context";
import Adopcion from "./pages/Adopcion/Adopcion";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className='App' id="outer-container">
     <PetContextProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route
            path='/gallery/:id'
            element={<GalleryDetail></GalleryDetail>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/adopcion' element={<Adopcion></Adopcion>}></Route>
          <Route path='/contacto' element={<Contact></Contact>}></Route>
          <Route path='/donaciones' element={<Donaciones></Donaciones>}></Route>
          <Route path='/admin' element={<Forms></Forms>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      </PetContextProvider>
    </div>
  );
}

export default App;
