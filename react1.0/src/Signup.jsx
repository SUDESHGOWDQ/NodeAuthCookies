import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import './LS.css'


const Signup = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/register',{name,email,password})
        .then(res=>{console.log(res)
            alert("Sucessfully registered")
           navigate('/login')
        })
    }

  return (
    <div className="Signup">
       <form onSubmit={handleSubmit}>
         <h1>Signup Here</h1>
        <input type={'text'} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'></input>
        <br></br>
        <input type={'email'} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
        <br></br>
        <input type={'password'} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
        <br></br>
        <button type='submit'>submit</button>
        <p>Already Have an Account <Link to={'/login'}>Login</Link> </p>
      </form>
    </div>
  )
}

export default Signup