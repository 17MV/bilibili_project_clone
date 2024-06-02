import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import adminlogo from '../assets/img/admin.png';


const Profile = () => {
    useEffect(() => { 
      document.body.style.backgroundColor = '#F5F5F5';
   
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, 
[]);

  return (

    <Card style={{ width: '70rem', justifyContent:'center',marginLeft: "-3rem",backgroundColor:'#F5F5F5', color:'#808080',}}>
      <Form>
        <Row className="justify-content-center">
          <div style={logoContainerStyle}>
            <img src={adminlogo} className="admin" alt="Admin" style={{ height: '130%' }} />
          </div>
        </Row>

        <Row className="justify-content-center mb-5" >
          <Button variant="secondary" type="submit" style={{ width: '10rem'}}>
            upload photo
          </Button>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Mark" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Palban" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="San Miguel, Bohol" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" placeholder="09654415350" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Email Address</Form.Label>
          <Form.Control placeholder="palban@gmail.com" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="palban@gmail.com"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="••••••••••"/>
          </Form.Group>
        </Row>    
      </Form>
    </Card> 
  );
};


export default Profile;

  const logoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5rem',
    height: '8rem',
   
};