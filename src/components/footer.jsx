import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";
import "./footer.css";

function FooterMain() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2">
              <Facebook className="footer-icon me-2" />
              <Instagram className="footer-icon me-2" />
              <TwitterX className="footer-icon me-2" />
              <Youtube className=" footer-icon" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#">Media Center</a>
                  </p>
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Audio Description</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button
                variant="secondary"
                size="sm"
                className="footer-button rounded-0 mt-3"
              >
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">
              © 1997-{new Date().getFullYear()} Netflix, Inc.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterMain;
