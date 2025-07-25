import { Container, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function GenreSelection() {
  return (
    <Container fluid className="py-3 text-light">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="border border-1 rounded-0 border-light ms-2"
              id="dropdownGenre"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Grid className="fs-4 me-2" />
          <Grid3x3 className="fs-4" />
        </div>
      </div>
    </Container>
  );
}

export default GenreSelection;
