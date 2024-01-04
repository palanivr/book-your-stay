import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login1.jpg"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back !"
  
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
      
      />
  )
}

export default Login