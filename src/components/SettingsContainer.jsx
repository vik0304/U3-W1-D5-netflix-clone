import { Container, Row, Col, Button } from "react-bootstrap";

function SettingsContainer() {
  return (
    <Container className="bg-light">
      <Row>
        <Col xs={12}>
          <h1 className="mt-5">Account</h1>
        </Col>
      </Row>
      <Row className="border-top border-bottom border-secondary">
        <Col xs={12} lg={3}>
          <h4 className="mt-3 text-body-tertiary">MEMBERSHIP & BILLING</h4>

          <Button className="btn-secondary rounded-0">Cancel Membership</Button>
        </Col>
        <Col xs={12} lg={9}>
          <div>
            <div className="mt-3 d-flex justify-content-between">
              <p className="fw-bold">student@strive.school</p>
              <a href="#" className="text-decoration-none">
                Change account email
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-body-tertiary">Password: ********</p>
              <a href="#" className="text-decoration-none">
                Change password
              </a>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-body-tertiary">Phone: 321 044 1279</p>
              <a href="#" className="text-decoration-none">
                Change phone number
              </a>
            </div>
          </div>
          <div className="border-top border-bottom border-secondary">
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex justify-content-start">
                <i className="bi bi-paypal"></i>
                <p className="fw-bold">admin@strive.school</p>
              </div>
              <a href="#" className="text-decoration-none">
                Update payment info
              </a>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a href="#" className="text-decoration-none">
                Billing details
              </a>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-end mt-3">
              <a href="#" className="text-decoration-none">
                Redeem gift card or promo code
              </a>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a href="#" className="text-decoration-none">
                Where to buy gift cards
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom border-secondary">
        <Col xs={12} lg={3}>
          <h4 className="mt-3 mb-lg-3 text-body-tertiary">PLAN DETAILS</h4>
        </Col>
        <Col xs={12} lg={9}>
          <div className="d-flex justify-content-between mt-lg-3">
            <div className="d-flex justify-content-start">
              <p className="fw-bold">Premium</p>
              <i className="bi bi-badge-hd"></i>
            </div>
            <a href="#" className="text-decoration-none">
              Change plan
            </a>
          </div>
        </Col>
      </Row>
      <Row className="border-bottom border-secondary">
        <Col xs={12} lg={3}>
          <h4 className="mt-3 text-body-tertiary">SETTINGS</h4>
        </Col>
        <Col xs={12} lg={9}>
          <div className="d-flex flex-column align-items-start mb-3 mt-lg-3">
            <a href="#" className="text-decoration-none">
              Parental controls
            </a>
            <a href="#" className="text-decoration-none">
              Test partecipation
            </a>
            <a href="#" className="text-decoration-none">
              Manage download devices
            </a>
            <a href="#" className="text-decoration-none">
              Activate a device
            </a>
            <a href="#" className="text-decoration-none">
              Recent device streaming activity
            </a>
            <a href="#" className="text-decoration-none">
              Sign out of all devices
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={3}>
          <h4 className="mt-3 text-body-tertiary">MY PROFILE</h4>
        </Col>
        <Col xs={12} lg={9}>
          <div className="d-flex justify-content-between mt-lg-3">
            <div className="d-flex justify-content-start align-items-center">
              <img
                src="./assets/avatar.png"
                alt=""
                style={{ height: "20px", width: "auto" }}
              />
              <p className="fw-bold m-0 ms-2">Strive student</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <a href="#" className="text-decoration-none">
                Manage profiles
              </a>
              <a href="#" className="text-decoration-none">
                Add profile email
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={3}></Col>
        <Col xs={12} lg={9}>
          <Row>
            <Col xs={6} md={4}>
              <a href="#" className="text-decoration-none">
                Language
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="#" className="text-decoration-none">
                Viewing activity
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="#" className="text-decoration-none">
                Playback settings
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="#" className="text-decoration-none">
                Ratings
              </a>
            </Col>
            <Col xs={6} md={4}>
              <a href="#" className="text-decoration-none">
                Subtitle appearance
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SettingsContainer;
