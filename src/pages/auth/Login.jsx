import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../component/layout/Footer'
import Header from '../../component/layout/Header'
import CustomInput from '../../component/customInput/customInput';
import Baselayout from '../../component/Baselayout'
import { toast } from 'react-toastify';

const inputs = [
  {name: "fname", label: "Username / Email", placeholder: "Enter your email/username.... ", type: "email", required: true },
  {name: "password", label: "password", placeholder: "Enter your password.... ", type: "password", required: true }

]

const Login = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData, 
      [name]:value});
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    toast("submitted", formData)

  }
  return (
    <>
    <Baselayout>
    <div className = "p-3 border shadow rounded admin-form"> 
    <h1> Login </h1> 
    <Form onSubmit={handleSubmit}>
      {inputs.map(input => (
          <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input} onChange = {handleChange}/>
      ))}
      <Button variant="primary" type="submit">
          Login
      </Button>
      </Form>
      </div>
    </Baselayout>
    </>
  )
}

export default Login