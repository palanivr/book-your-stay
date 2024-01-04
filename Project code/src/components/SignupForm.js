import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
     const navigate =useNavigate();

    const[formData , setFormData] =useState({firstname:"", 
    lastname:"", email:"", password:"", confirmPassword:""})
    const[showPassword, setShowPassword]= useState(false);
    const[showConfirmPassword, setShowConfirmPassword]= useState(false);
    const[accountType , setAccountType] =useState("student");

    
   function changeHandler(event) {
    setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
    ))
    
   }

   function supmitHandler(event) {
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){
        toast.error("Password do not match");
        return
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData ={
        ...formData
    };

    const finalData={

        ...accountType,
        accountData

    }
    
    console.log("printing final account data");
    console.log(finalData);
    navigate("./dashboard")
    
   }



    return (
    <div className=''>
         {} 
       

        <form 
            className=''
        onsupmit={supmitHandler} >
            {/* First name and last name */}
            <div className='flex gap-x-4 mt-[20px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>First Name <sup sup className='text-pink-200'>*</sup></p>
                <input required 
                type="text"
                name='firstname'
                onChange={changeHandler}
                placeholder='Enter First Name' 
                value={formData.firstname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Last Name <sup className='text-pink-200'>*</sup></p>
                <input required 
                type="text"
                name='lastname'
                onChange={changeHandler}
                placeholder='Enter Last Name' 
                value={formData.lastname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
            </label>

            </div>

            {/* Email Add */}
            <div className='mt-[20px]'>
            <label htmlFor=""
            className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-200'>*</sup></p>
                <input required 
                type="email"
                name='email'
                onChange={changeHandler}
                placeholder='Enter Email Address' 
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>
            </label>

            </div>

            {/* createPassword and Confirm Password */}

            <div className=' w-full flex gap-x-4 mt-[20px]'>
            <label className=' w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Create Password <sup className='text-pink-200'>*</sup></p>
                <input required 
                type={showPassword?("text"):("password")}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password' 
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>

            <span className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowPassword((prev)=>!prev)}>
                {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>

            <label className=' w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Confirm Password <sup className='text-pink-200'>*</sup></p>
                <input required 
                type={showConfirmPassword?("text"):("password")}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Enter Password' 
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '/>

            <span className='absolute right-3 top-[38px] cursor-pointer' 
            onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2Bf'/>)
                :(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
            </label>
            </div>
          
               <button className=' w-full items-center bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                 Create Account
               </button>



        </form>
    </div>
  )
}

export default SignupForm