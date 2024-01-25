import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";

import CustomInput from '../../component/customInput/customInput';
import Baselayout from '../../component/layout/Baselayout'
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link } from 'react-router-dom';

const inputs = [
  {name: "email", label: "email", placeholder: "Enter your email/username to reset .... ", type: "email", required: true },

]

const ResetPassword = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData, 
      [name]:value});
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    const {email} = formData;
    console.log(email)
    sendPasswordResetEmail(auth, email)
    
    .then(() => {
      toast("Reset Link has been sent", formData)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      toast.error("Something went wrong", errorMessage)
    }) 

  }
  return (
    <>
    <Baselayout>
    <div className = "p-3 border shadow rounded admin-form"> 
    <h1> Reset password </h1> 
    <Form onSubmit={handleSubmit}>
      {inputs.map(input => (
          <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input} onChange = {handleChange}/>
      ))}
      <Button variant="primary" type="submit">
          Reset
      </Button>
      </Form>
      Go Back to <Link to={"/login"}> Login </Link>
      </div>
    </Baselayout>
    </>
  )
}

export default ResetPassword;