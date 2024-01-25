import React, { useState } from 'react'
import AdminLayout from '../../component/layout/AdminLayout'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../component/customInput/customInput'
import { toast } from 'react-toastify'
import { addBookAction } from './bookAction'


const inputs = [
  {name: "ISBN", label: "ISBN", placeholder: "Enter ISBN.... ", required: true, type: "number" },
  {name: "title", label: "Book Title", placeholder: "Enter Book Title.... ", required: true },
  {name: "author", label: "Author Name", placeholder: "Enter Author Name.... ", required: true },
  {name: "summary", label: "Summary", placeholder: "Enter Summary.... ", required: true, as:"textarea", rows: 4},
  {name: "year", label: "Published Year", placeholder: "2000 ", type: "number", required: true },
  {name: "url", label: "Image URL", placeholder: "https://image-url.com ", required: true }

]


const AddBook = () => {
  const [formData, setFormData] = useState({

  })
 
    // {name: "url", label: "Image URL", placeholder: "https://image-url.com ", type: 'file', required: true }


    const handleChange = (e) => {
      const {name, value } = e.target;


      setFormData({
        ...formData, 
        [name]:value});
    }
  
    const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        const {year} = formData;
        if(year > new Date().getFullYear()){
         return toast.error("published year is invalid")
        }
        addBookAction(formData);
        //reset form data 
      } catch (e) {
        console.log()
      }

    }
  return (
    <AdminLayout title={"Add Book"}>
      <div className = "p-3 border shadow rounded admin-form"> 
      <h1> Book Detail </h1> 
      <Form onSubmit={handleSubmit}>
        {inputs.map(input => (
            <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input} onChange = {handleChange}/>
        ))}
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
        </div>
    </AdminLayout>
  )
}

export default AddBook