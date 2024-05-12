import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

export const NewContent = () => {
  const [content, setContent] = useState({
    description: '',
    file: '',
    platform: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    
  };

  return (
    <div  className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
      <Form className='p-4 bg-secondary' onSubmit={handleSubmit}>
        <Form.Group className='py-2' as={Row} controlId="description">
          <Form.Label column sm="2">Açıklama:</Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="description" value={content.description} onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group className='py-2' as={Row} controlId="file">
          <Form.Label column sm="2">Dosya:</Form.Label>
          <Col sm="10">
            <Form.Control type="file" name="file" onChange={handleChange} />
          </Col>
        </Form.Group>

        <Form.Group className='py-2' as={Row} controlId="platform">
          <Form.Label column sm="2">Platform:</Form.Label>
          <Col sm="10">
            <Form.Check 
              type="radio" 
              name="platform" 
              id="youtube" 
              label="YouTube" 
              value="youtube" 
              onChange={handleChange}
            />
            <Form.Check 
              type="radio" 
              name="platform" 
              id="instagram" 
              label="Instagram" 
              value="instagram" 
              onChange={handleChange}
            />
            <Form.Check 
              type="radio" 
              name="platform" 
              id="facebook" 
              label="Facebook" 
              value="facebook" 
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </div>
  );
}
