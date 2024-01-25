import Signup from "./Signup"
import Login from "./Login"
import Home from './Home'
import { BrowserRouter,Routes,Route } from "react-router-dom"
const App = () => {
  return (
    <div className='App'>
     <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App