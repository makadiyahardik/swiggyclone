import React from 'react'
import './Login.css'
import Slide from 'react-reveal/Slide';
function Login({closeBtn}) {
   
  return (
    <>
    <Slide left>
<div className='login-form'>  
<div className='close-btn'>
<h5 onClick={()=>closeBtn(false)}>X</h5>
</div>
        <div className='Login'>
    
  
            <div className='left-login'>
          
<h1 >Login</h1>
<input type="text"  placeholder='Phone Number'/>
<input type="submit" className='submit-btn' name='Login' value="Login"  placeholder='Phone Number'/>


            </div>
            
            <div className='right-login'>
            
                <img src='./images/login.webp' alt='web'/>
            </div>
        </div>
        </div>
        </Slide>
    </>
  )
}

export default Login