import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../component/layout/Footer'
import Header from '../../component/layout/Header'
import CustomInput from '../../component/customInput/customInput';
import Baselayout from '../../component/Baselayout'
import { toast } from 'react-toastify';
import { auth } from '../../firebase-config';

import { signInWithEmailAndPassword } from 'firebase/auth';

const inputs = [
  {name: "email", label: "Username / Email", placeholder: "Enter your email/username.... ", type: "email", required: true },
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

    const {email, password} =formData;
    console.log(formData);
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    toast("Logged in")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode.includes("auth/invalid-credential")){
      toast.error("Invalid email or password")
    }
  });

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