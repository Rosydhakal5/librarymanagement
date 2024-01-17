import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../component/layout/Footer'
import Header from '../../component/layout/Header'
import CustomInput from '../../component/customInput/customInput';
import Baselayout from '../../component/Baselayout'

const inputs = [
  {name: "fname", label: "Username / Email", placeholder: "Enter your email/username.... ", type: "email", required: true },
  {name: "password", label: "password", placeholder: "Enter your password.... ", type: "password", required: true }

]

const Login = () => {
  return (
    <>
    <Baselayout>
    <div className = "p-3 border shadow rounded admin-form"> 
    <h1> Login </h1> 
    <Form>
      {inputs.map(input => (
          <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input}/>
      ))}
      <Button variant="primary" type="submit">
          Submit
      </Button>
      </Form>
      </div>
    </Baselayout>
    </>
  )
}

export default Login