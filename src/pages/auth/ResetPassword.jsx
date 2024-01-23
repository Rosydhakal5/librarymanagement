import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../../component/layout/Footer'
import Header from '../../component/layout/Header'
import CustomInput from '../../component/customInput/customInput';
import Baselayout from '../../component/layout/Baselayout'
import { toast } from 'react-toastify';

const inputs = [
  {name: "fname", label: "", placeholder: "Enter your email/username to reset .... ", type: "email", required: true },

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
    toast("Reset Link has been sent", formData)

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
      </div>
    </Baselayout>
    </>
  )
}

export default ResetPassword;