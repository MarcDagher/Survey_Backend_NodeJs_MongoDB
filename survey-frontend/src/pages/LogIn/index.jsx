import { useNavigate } from "react-router-dom"
import Button from "../../components/button"
import { useState } from "react"
import axios from "axios"
import "./login.css"

const LogIn = () => {

  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const [success, setSuccess] = useState("")

  const handleChange = (name, value) => {
    setFormData({...formData, [name]:value})
  }
  
  const handleSubmit = async () => {
    try {
      const response = await axios.request({
        url: `http://localhost:8000/auth/login`,
        data: {...formData},
        method: 'POST'
      })

      setSuccess(response.data.message)
      
      
      if (success === "Success" && formData.email === "admin@onlyadmin.com"){
        localStorage.setItem('token' ,response.data.token)
        navigate("/admin")
      } 
      
      if (success === "Success" && formData.email !== "admin@onlyadmin.com"){
        localStorage.setItem('token' ,response.data.token)
        navigate("/survey")
      }

      return response
    } catch (error) {
      console.log(error)
      setSuccess(error.response.data.message)
    }
  }
  
  return <>

      <div className="container">
      <p>Sign Up Page</p>
      <div className="inputs">
        <input type="email" name="email" onChange={(e) => handleChange(e.target.name, e.target.value)} placeholder="Email"/>
        <input type="password" name="password" onChange={(e) => handleChange(e.target.name, e.target.value)}
        placeholder="Password"/> 
      </div>
      
      <div className="buttons">
       {success === "Success" ? (<p>Loding...</p>)  : success === "Invalid username/password" ? (<p>Invalid username/password</p>) : null}
        <Button text={"Sign In"} handleSubmit={() => handleSubmit({...formData})}/>
        <p onClick={() => navigate("/register")}>Don't have an account? Register</p>
      </div>
   </div>

  </>
}

export default LogIn