import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import GymTracker from "./Pages/GymTacker"
import GG from "./Pages/GG"
function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <GymTracker/> */}
      <GG/>
      <Footer />
    </>
  )
}

export default App
