import React, { useState } from "react";
import { Container, Row, Col, Jumbotron, Form } from "react-bootstrap";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import moment from "moment";
import "./login.styles.scss";

export const Login = () => {
  const [timer, setTimer] = useState({
    days: "00",
    hour: "00",
    min: "00",
    sec: "00",
  });

  const updateTime = () => {
    setInterval(() => {
      setTimer({
        days: moment().format("DD"),
        hour: moment().format("hh"),
        min: moment().format("mm"),
        sec: moment().format("ss"),
      });
    }, 1000);
  };

  updateTime();

  return (
    <Container
      fluid
      style={{
        backgroundImage:
          "url(https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5)",
        backgroundSize: "cover",
      }}
    >
      <Row>
        <Col className="column left">
          <Container className="register-countdown-container hide">
            <Jumbotron className="jumbotron">
              <h1>Sample Company</h1>
            </Jumbotron>
            <Row>
              <Col sm={10}>
                <Container className="timer-container">
                  <h4>We go live in</h4>
                  <Row className="timer">
                    <Col className="days">
                      <h1>{timer.days}</h1>
                      <small>Days</small>
                    </Col>
                    <Col className="hours">
                      <h1>{timer.hour}</h1>
                      <small>Hours</small>
                    </Col>
                    <Col className="mins">
                      <h1>{timer.min}</h1>
                      <small>Minutes</small>
                    </Col>
                    <Col className="secs">
                      <h1>{timer.sec}</h1>
                      <small>Seconds</small>
                    </Col>
                  </Row>
                  <h4>August 23-26, 2020 - Log-in starts at 8 a.m.</h4>
                  <CustomButton variant="warning" isRegister>
                    Register
                  </CustomButton>
                </Container>
              </Col>
              <Col sm={2}></Col>
            </Row>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-question-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>{" "}
              NEED HELP
            </a>
          </Container>
          <Container className="login-container">
            <span className="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </span>
            <Form>
              <h1>Log In</h1>
              <Form.Group>
                <Form.Label>Enter your membership ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your ID here"
                  id="formMemID"
                />
              </Form.Group>
              <CustomButton variant="warning">Proceed to lobby</CustomButton>
            </Form>
          </Container>
        </Col>
        <Col className="column right"></Col>
      </Row>
    </Container>
  );
};
