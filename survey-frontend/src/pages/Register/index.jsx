import { useState } from "react"
import "./register.css"
import Button from '../../components/button'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = ( ) => {

   const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday:""
   })
   const [success, setSuccess] = useState("")
   const navigate = useNavigate()
  
   const handleChange = (name, value) => {
    setFormData({...formData, [name]:value})
   }


   const handleSubmit = async () => {
    try {
      const response = await axios.request({
        url: `http://localhost:8000/auth/register`,
        data: {...formData},
        method: 'POST',
      })
      setSuccess(response.data.message)
      return response.data.message
    } catch (error) {
      console.log(error.response)
      setFormData(error.response.data.message)
      return error.response.data.message
    }
   }


  return <>

   <div className="container">
      <p>Sign Up Page</p>
      {success === "User created successfully" ? (<p>User created successfully</p>)  : success === "Email already taken" ? (<p>Email already taken</p>) : null}

      <input type="text" name="first_name" onChange={(e) => handleChange(e.target.name, e.target.value)} placeholder="First Name"/>
      <input type="text" name="last_name" onChange={(e) => handleChange(e.target.name, e.target.value)}
      placeholder="Last Name"/>
      <input type="email" name="email" onChange={(e) => handleChange(e.target.name, e.target.value)} placeholder="Email"/>
      <input type="password" name="password" onChange={(e) => handleChange(e.target.name, e.target.value)}
      placeholder="Password"/>
      <input type="date" name="birthday" onChange={(e) => handleChange(e.target.name, e.target.value)}
      placeholder="Password"/>
      <Button text={"Create Account"} handleSubmit={() => handleSubmit({...formData})}/>

      <p onClick={() => navigate("/login")}>Already have an account? Sign In</p>
   </div>

    </>
  
}

export default Register