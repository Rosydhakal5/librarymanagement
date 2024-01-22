import React, {useEffect, useState} from 'react'
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
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../redux/authSlice';

const inputs = [
  {name: "email", label: "Username / Email", placeholder: "Enter your email/username.... ", type: "email", required: true },
  {name: "password", label: "password", placeholder: "Enter your password.... ", type: "password", required: true }

]

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const {userInfo} = useSelector(state =>state.auth);
  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData({
      ...formData, 
      [name]:value});
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();

    const {email, password} =formData;
    try {
      const signInPromise = signInWithEmailAndPassword(auth, email, password)
      toast.promise(signInPromise, {
        pending: "In progress...."
      });
      const userCredential = await signInPromise;
      dispatch(setUserInfo(userCredential.user))
      console.log(userCredential.user);
      toast("YAY logged in..🥳")
    
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode.includes("auth/invalid-credential")){
        toast.error("Invalid email or password")
      }
    }
    console.log(formData);
    console.log(email, password);
  }

  useEffect(() => {
    if (userInfo.uid){
      navigate("/dashboard")
    }
  }, [userInfo])
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