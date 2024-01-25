import React from 'react'
import AdminLayout from '../../component/layout/AdminLayout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Books = () => {
  return (
    <AdminLayout title={Books}>
      <Link to={"/add"} className='d-flex justify-content-end'>
        <Button>Add a book</Button></Link> 
        {/* Book List in Table Format */}
      </AdminLayout>
  )
}

export default Books