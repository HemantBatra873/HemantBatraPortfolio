import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CursorContextProvider from "./context/CursorContext";
import Cursor from "./components/Cursor";
import Home from "./routes/Home";
import Work from "./routes/Work";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Navigation from "./components/Navigation";
import GoodGroceries from "./routes/GoodGroceries";
import BuyMeAChai from "./routes/BuyMeAChai";
import Agraser from "./routes/Agraser";

function App() {
  const location = useLocation();

  return (
    <>
      <CursorContextProvider>
        <Cursor />
        <Navigation />

        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathName}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/gruham" element={<GoodGroceries />} />
            <Route path="/radius" element={<BuyMeAChai />} />
            <Route path="/cooperative" element={<Agraser />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </>
  );
}

export default App;
