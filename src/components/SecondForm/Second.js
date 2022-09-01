import React from 'react'
import Form from 'react-bootstrap/Form';


function Second() {
  return (
    <div>
    <h3 className='text-center fw-bold'>Let's Setup a Home for all your Work</h3>
    <p className='text-center text-muted'>You can always create new workspace</p>
    <Form className= "my-5 text-start w-75 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Workspace Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Workspace URl <span className='text-muted'>(optional)</span> </Form.Label>
            <div class="input-group mb-3">
            <span className="input-group-text text-muted" id="basic-addon3" >www.eden.com/</span>
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