import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BookingPage from "./pages/book";
import search from "./pages/search";
 //import Dashboard from "./pages/dashboard"
import Dashboard from"./pages/dashboard";
import {  useState } from 'react'
import PrivateRoute from "./components/PrivateRoute.js";
import ContactPage from "./pages/Contact";
import ProfilePage from "./pages/prof";
//import Footer from "./components/footer.js";




import Func from "./pages/About";
import BookAppointment from "./pages/Contact";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<Func  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/contact" element={<BookAppointment  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/bok" element={<BookingPage  setIsLoggedIn={setIsLoggedIn}/>} />
      
        <Route path="/profile" element={<ProfilePage  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/se" element={<search  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />
      </Routes>
      {/* <Footer />  */}
    </div>
    )
}

export default App;

