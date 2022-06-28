import React, { useState } from 'react'
import Login from '../FormsComponents/Loginform/Login'
import Signin from '../FormsComponents/Signinform/Signin'
import Slide from 'react-reveal/Slide';
import './Home.css'

function Home() {
    const[show , setShow]=useState(false)
    const [showlogin,setShowLogin]=useState(false)


   
  return (
  <>
      <div className='main-home'>


<div className='main-two-home'>

    <div className='logo'>
<img src='./images/logo.png' alt='logo'/>
<div className='home-text'>
<Slide top>
    <h1> 
   
    <span className='content'></span>
   
    </h1>
    </Slide>
    <h3>Order food from favourite restaurants near you.</h3>
    <input type="text" placeholder='Entre Your Delievery Location'/><span>  <button className='food-btn'>Find Food</button></span>
   
    <h2>POPULAR CITIES IN INDIA</h2>
    <h4>Ahmedabad  Bangalore  Chennai  Delhi  Gurgaon  Hyderabad  Kolkata  Mumbai  Pune  & more.</h4>
</div>

    </div>
   
    <div className='buttons-group'>
        <button onClick={()=>setShow(true)} className='btn-1'>Login</button>
        <button onClick={()=>setShowLogin(true)}  className='btn-2' >Signin</button>

    
       
       {show &&   <Login closeBtn={setShow}/> }
     

     
    
       
 
       {showlogin && <Signin closeSignin={setShowLogin}/>}
       
    
    </div>
   
</div>


      </div>
  </>
  )
}

export default Home