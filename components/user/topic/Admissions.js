import React, { useState, Component } from 'react';
import config from '../../api/config';
import axios from 'axios';
import {
  Modal,
  Button,
  Card,
  CardGroup,
  Col,
  Form,
  Row,
  Carousel,
} from 'react-bootstrap';
const Admissions = () => {
  function Example() {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onHandleForm = (event) => {
      let value = event.target.value;
      let name = event.target.name;
      setForm((prevState) => {
        return { ...prevState, [name]: value };
      });
    };
    const creatForm = (data) => {
      let body = new FormData();
      for (const key in data) {
        body.append(key, data[key]);
      }
      return body;
    };

    const onSubmit = () => {
      axios
        .post(config.prefixUrl + '/tuyensinh', creatForm(form))
        .then((res) => {
          if (res.status == 422) {
            alert('Vui lòng điền đủ thông tin');
          }
          if (res.status == 201) {
            alert('OK');
          }
        });
    };
    return (
      <>
        <Button variant="success" className="mt-5" onClick={handleShow}>
          Register{' '}
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <center>
              {' '}
              <Modal.Title> Selection form </Modal.Title>
            </center>
          </Modal.Header>{' '}
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="First name"
                      name="first_name"
                      onChange={onHandleForm}
                    />
                  </Col>{' '}
                  <Col>
                    <Form.Control
                      placeholder="Last name"
                      name="last_name"
                      onChange={onHandleForm}
                    />
                  </Col>{' '}
                </Row>{' '}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                {' '}
                {/* <Form.Label>Email address</Form.Label> */}{' '}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={onHandleForm}
                />
              </Form.Group>{' '}
              <Form.Group className="mb-3" controlId="formPhone">
                {' '}
                {/* <Form.Label>Password</Form.Label> */}{' '}
                <Form.Control
                  type="number"
                  placeholder="phone"
                  name="phone"
                  onChange={onHandleForm}
                />
              </Form.Group>{' '}
            </Form>{' '}
          </Modal.Body>{' '}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close{' '}
            </Button>{' '}
            <Button variant="primary" onClick={onSubmit}>
              Save{' '}
            </Button>{' '}
          </Modal.Footer>{' '}
        </Modal>{' '}
      </>
    );
  }

  return (
    <div>
      <div className="container">
        <center>
          {' '}
          <h1> Selection </h1>
        </center>
        <Row>
          <Col xs="4">
            <h3>
              {' '}
              Selection is an important step for PNV organization, we want to
              select students from difficult families but they have the heart to
              learn, in addition, they have to pass our exams.If you want to
              apply for the entrance exam or get started with the admissions
              button below.{' '}
            </h3>
            <center>
              {' '}
              <Example />{' '}
            </center>{' '}
          </Col>{' '}
          <Col xs="8">
            <video weight={390} height={390} controls>
              <source src="videos/pnvVideo.mp4" type="video/mp4" />
            </video>{' '}
            {/*
                                            <video style={{
                                                borderColor: 'black',
                                                objectFit: 'cover',
                                                borderWidth: 3,
                                            }} weight={390} height={390}>
                                                <source src="video/pnvVideo.mp4" type="video/mp4" />
                                            </video> */}
          </Col>{' '}
        </Row>{' '}
      </div>
    </div>
  );
};

export default Admissions;
