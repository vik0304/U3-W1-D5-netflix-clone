import { Container, Row, Col, Dropdown } from "react-bootstrap";

function ProfileSettings() {
  return (
    <Container>
      <Row className="border-bottom border-light">
        <Col xs={12} lg={{ span: 8, offset: 2 }}>
          <div className="mb-2">
            <h1 className="text-light fw-normal">Edit Profile</h1>
          </div>
        </Col>
      </Row>
      <Row className="mt-3 border-bottom border-light">
        <Col xs={12} md={2} lg={{ span: 2, offset: 2 }}>
          <div className="d-flex align-items-center justify-content-center">
            <img src="avatar.png" alt="Your avatar" className="w-100" />
          </div>
        </Col>
        <Col xs={12} md={10} lg={6}>
          <div className="border-bottom border-light">
            <p className="text-light p-1 bg-secondary fs-5">Strive Student</p>
            <h4 className="text-light mt-3">Language:</h4>
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                className="border border-1 rounded-0 border-light ms-2 mb-3"
                id="dropdownLanguage"
              >
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Chinese</Dropdown.Item>
                <Dropdown.Item href="#/action-2">French</Dropdown.Item>
                <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Japanes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="border-bottom border-light">
            <h4 className="text-light mt-3">Maturity Settings:</h4>
            <p className="d-inline-block px-2 py-1 text-uppercase text-light bg-secondary my-2">
              all maturity ratings
            </p>
            <p className="text-light">
              Show titles of <b>all maturity ratings</b> for this profile.
            </p>
            <button className="btn btn-outline-light rounded-0 mb-3">
              EDIT
            </button>
          </div>

          <div className="py-4">
            <h4 className="text-light">Autoplay Controls</h4>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label
              className="form-check-label text-light"
              htmlFor="defaultCheck1"
            >
              Autoplay next episode in a series on all devices.
            </label>
            <br />
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label
              className="form-check-label text-light"
              htmlFor="defaultCheck2"
            >
              Autoplay previews while browsing on all devices.
            </label>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center align-items-center py-4">
        <Col xs={12} md={4}>
          <a
            href="index.html"
            className="btn btn-outline-light rounded-0 w-100"
          >
            Save
          </a>
        </Col>
        <Col xs={12} md={4}>
          <a
            href="index.html"
            className="btn btn-outline-light rounded-0 w-100 my-3"
          >
            Cancel
          </a>
        </Col>
        <Col xs={12} md={4}>
          <a
            href="index.html"
            className="btn btn-outline-light rounded-0 w-100"
          >
            Delete
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileSettings;
