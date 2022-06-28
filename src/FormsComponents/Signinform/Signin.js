import React from 'react'
import './Signin.css'
import Slide from 'react-reveal/Slide';
function Signin({closeSignin}) {
    
  return (
   <>
    <Slide left>  
       <div className='login-form'>  
<div className='close-btn'>
<h5 onClick={()=>closeSignin(false)}>X</h5>
</div>
        <div className='Login'>
    
  
            <div className='left-login'>
          
<h1 >Signin</h1>
<input type="text"  placeholder='Entre Your Name'/>
<input type="number"  placeholder='Phone Number'/>

<input type="submit" className='submit-btn' name='Login' value="Login" />


            </div>
            
            <div className='right-signin'>
            
                <img src='./images/login.webp' alt='web'/>
            </div>
        </div>
        </div>
        </Slide>
   </>
  )
}

export default Signin