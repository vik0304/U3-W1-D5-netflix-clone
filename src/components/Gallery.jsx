import { Component } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import "./galleryStyle.css";

class Gallery extends Component {
  state = {
    filmsToLoad: [],
    loading: true,
    isError: false,
    errMessage: "",
  };
  getFilms = () => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=fa8b9867&s=${this.props.films}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `HTTP error ${response.status}: ${response.statusText}`
          );
        }
      })
      .then((filmsObj) => {
        this.setState({
          filmsToLoad: filmsObj.Search.slice(0, 6),
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          isError: true,
          errMessage: err.message,
        });
      });
  };
  componentDidMount() {
    this.getFilms();
  }
  render() {
    return (
      <Container fluid className="py-3 text-light">
        <h4>{this.props.title}</h4>
        {this.state.loading && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
        {this.state.isError && (
          <Alert variant="danger" className="text-center">
            {this.state.errMessage}
          </Alert>
        )}
        <Row xs={2} sm={3} lg={4} xl={6} className="mb-1 g-3">
          {this.state.filmsToLoad.map((film) => {
            return (
              <Col className="mb-2 text-center px-1" key={film.imdbID}>
                <img
                  className="animationTile poster-style"
                  src={film.Poster}
                  alt={film.Title}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
