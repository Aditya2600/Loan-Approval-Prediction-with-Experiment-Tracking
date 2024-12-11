import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default App;
