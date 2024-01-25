import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user,setUser] = useState('')

    const navigate = useNavigate()
    axios.defaults.withCredentials= true;
    useEffect(() => {
        axios.get("http://localhost:3000/")
        .then((res)=>{
            if(res.data.valid){
              setUser(res.data.user)
            }else{
              navigate('/login')
            }
        })
        .catch((err)=>console.log(err))
    }, [])

    function logout() {
        axios.get('http://localhost:3000/logout')
        .then(()=>{
            alert("Logout")
            navigate('/login')
        })
    }
    return (
      <div className="Home">
         <h1>Hogaya Hamara Kaam</h1>
         <h1>Wellcome {user.name}</h1>
         <button onClick={logout}>Logout</button>
      </div>
    )
  }
  
  export default Home