import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function First() {
  return (
    <div>
        <h2 className='text-center fw-bold'>Welcome ! First things first...</h2>
        <p className='text-center'>you can always change them later</p>
        <Form className= "my-5 text-start">
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Steve Jobs" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Display Name</Form.Label>
        <Form.Control type="text" placeholder="steve" />
      </Form.Group>
    </Form>
    </div>
  )
}

export default First



