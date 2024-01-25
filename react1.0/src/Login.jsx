import { useState,useEffect } from "react"
import { Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import './LS.css'


const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")


  const navigate = useNavigate()
  axios.defaults.withCredentials= true;
  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3000/login',{email,password})
    .then(res=>{console.log(res)
      if(res.data === "sucess"){
        alert("sucessfully logged in")
        navigate('/home')
      }  
    })
    .catch(err=>{console.log(err)
        alert("Not Matched")
    })
}
useEffect(() => {
  axios.get("http://localhost:3000/")
  .then((res)=>{
      if(res.data.valid){
        navigate('/home')
      }else{
        navigate('/login')
      }
  })
  .catch((err)=>console.log(err))
}, [])

  return (
    <div className="Login">
       <form onSubmit={handleSubmit}>
         <h1>Login Here</h1>
        <input type={'email'} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
        <br></br>
        <input type={'text'} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
        <br></br>
        <button type="submit">submit</button>
        <p>Dont Have an Account <Link to={'/register'}>Signup</Link> </p>
      </form>
    </div>
  )
}

export default Login