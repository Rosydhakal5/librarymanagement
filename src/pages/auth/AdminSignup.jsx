import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from '../../component/layout/Header'
// import Footer from '../../component/layout/Footer'
import Baselayout from '../../component/Baselayout'
import CustomInput from '../../component/customInput/customInput';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth,db } from '../../firebase-config';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';


// import CustomInput from '../../component/customInput/customInput'

const inputs = [
    {name: "fName", label: "First Name", placeholder: "Enter first Name", type:"text", required: true},
    {name: "LName", label: "Last Name", placeholder: "Enter Last Name", type:"text", required: true},
    {name: "phone", label: "Phone", placeholder: "Enter Phone Number", type:"number", required: true},
    {name: "email", label: "Email", placeholder: "Enter Email", type:"email", required: true},
    {name: "password", label: "Password", placeholder: "*********", type:"password", required: true},
    {name: "confirmPassword", label: "Confirm Password", placeholder: "*********", type:"password", required: true, minLength: 6},

]

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData, 
      [name]:value});
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();

    const  {password, confirmPassword, ...restFormData} = formData;

    if(password != confirmPassword){
      return toast.error("Password didn't match!")
    };
    const signupPromise = createUserWithEmailAndPassword(auth, formData.email, password)
    toast.promise(signupPromise,{
      pending: "In Progress..."
    });
    try{ 
      const userCredential = await signupPromise;
      console.log(userCredential.user);
      const uid = userCredential.user.uid;
      await setDoc(doc(db, "users", uid),{
        ...restFormData,
        uid
      })
      toast("user created sucessfully");
      navigate("/login")
    } catch (error){
      const errorCode= error.code;
        if(errorCode.includes("auth/email-already-in-use")){
        toast.error("Account already exists!");
      } else{
        toast.error(error.message);
      }
    }

  }
  return (
    <>
   <Baselayout >
    <div className = "p-3 border shadow rounded admin-form"> 
   <h1>Admin Signup </h1> 
   <Form  onSubmit={handleSubmit}>
    {inputs.map(input => (
        <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input} onChange = {handleChange}/>
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