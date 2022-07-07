import "./App.scss";
import NavBar from "./components/Static/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Static/Footer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import GalleryDetail from "./pages/GalleryDetail/GalleryDetail";
import Donaciones from "./pages/Donaciones/Donaciones";
import Forms from "./pages/CreateForm/Forms";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

function App() {
  return (
    <div className='App'>
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
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/donaciones' element={<Donaciones></Donaciones>}></Route>
          <Route path='/admin' element={<Forms></Forms>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
