import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from "./pages/Navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <div><Outlet /></div>
    </>
  )
}

export default App
