import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from '../../component/layout/Header'
// import Footer from '../../component/layout/Footer'
import Baselayout from '../../component/Baselayout'
import CustomInput from '../../component/customInput/customInput';
// import CustomInput from '../../component/customInput/customInput'

const inputs = [
    {name: "fName", label: "First Name", placeholder: "Enter first Name", type:"text", required: true},
    {name: "LName", label: "Last Name", placeholder: "Enter Last Name", type:"text", required: true},
    {name: "phone", label: "Phone", placeholder: "Enter Phone Number", type:"number", required: true},
    {name: "email", label: "Email", placeholder: "Enter Email", type:"email", required: true},
    {name: "password", label: "Password", placeholder: "*********", type:"password", required: true},
    {name: "confirmPassword", label: "Confirm Password", placeholder: "*********", type:"password", required: true},

]

const AdminSignup = () => {
  return (
    <>
   <Baselayout >
    <div className = "p-3 border shadow rounded admin-form"> 
   <h1>Admin Signup </h1> 
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

export default AdminSignup;