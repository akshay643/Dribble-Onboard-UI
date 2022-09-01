import React from 'react'
import Form from 'react-bootstrap/Form';


function Second() {
  return (
    <div>
    <h2 className='text-center'>Let's Setup a Home</h2>
    <p className='text-center'>You can always create new workspace</p>
    <Form className= "my-5 text-start">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Workspace Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Workspace URl <span>(optional)</span> </Form.Label>
            <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">www.eden.com/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='Example' />
            </div>  
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        
    </Form>
</div>
  )
}

export default Second