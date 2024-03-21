import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profilepic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <h4>First of all, everyone calls me <b className="purple">Jofi</b>.</h4>
            <p className="home-about-body">
  Graduated with a <b className="purple">Bachelor of Science in Physics</b>.
  <br />
  Currently working as a <b className="purple">Backend Software Developer</b>.
  <br />
  With knowledge of <b className="purple">Data Science</b> and <b className="purple">Machine Learning</b>.
  <br />
  Interested in the world of <b className="purple">Quantum Computing</b>.
  <br /><br />
  I'm seeking <b className="purple">opportunities</b> that will allow me to
  <br />
  <b className="purple">integrate</b> my diverse areas of expertise and <b className="purple">propel</b> my growth.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/josefina-cresta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/JosefinaCresta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:josefinacresta@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
