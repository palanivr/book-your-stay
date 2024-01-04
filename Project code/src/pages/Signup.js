import React from 'react'
import signupImg from "../assets/login1.jpg"
import Template from '../components/Template'
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Book your favourite destination now"
  
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Signup