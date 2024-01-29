import React, { useRef, useState } from 'react'
import AdminLayout from '../../component/layout/AdminLayout'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const inputs = [
  {name: "ISBN", label: "ISBN", placeholder: "Enter ISBN.... ", required: true, type: "number" },
  {name: "title", label: "Book Title", placeholder: "Enter Book Title.... ", required: true },
  {name: "author", label: "Author Name", placeholder: "Enter Author Name.... ", required: true },
  {name: "summary", label: "Summary", placeholder: "Enter Summary.... ", required: true, as:"textarea", rows: 4},
  {name: "year", label: "Published Year", placeholder: "2000 ", type: "number", required: true },
  {name: "url", label: "Image URL", placeholder: "https://image-url.com ", required: true }

]
const EditBook = () => {
  const {} = useSelector(state.book)
  const param = useParams();

  const formRef = useRef();
  const [formData, setFormData] = useState({});


  return (
    <AdminLayout title={"Edit Book"}>
      <div className = "p-3 border shadow rounded admin-form"> 
      <h1> Book Detail </h1> 
      <Form onSubmit={handleSubmit}>
        {inputs.map(input => (
            <CustomInput key= {input.name} label = {input.label} placeholder ={input.placeholder} {...input} onChange = {handleChange} {...input}/>
        ))}
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
        </div>
    </AdminLayout>
  )
}

export default EditBook