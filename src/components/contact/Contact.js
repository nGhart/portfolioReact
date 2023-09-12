import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contact.scss';

const Contact = () => {
  return (
    <div className="contactSection">
      <h1 className="font1 largeText">Get in touch today</h1>
      <div className="contactContainer">
        <h1 className="font1 smallText">Get in touch today</h1>
        <p className="font4">Enter your email and I will be in contact</p>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font4">Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font4">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="font4">Leave a note</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" />
            <Form.Text className="text-muted font3">Optional</Form.Text>
          </Form.Group>
          <button className="font5" variant="primary" type="submit">
            Submit
          </button>
        </Form>
      </div>
      <div className="borderContainer">
        <div className="border"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(5, 24, 53)"
            fill-opacity="1"
            d="M0,224L40,218.7C80,213,160,203,240,181.3C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,181.3C1040,192,1120,192,1200,165.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
