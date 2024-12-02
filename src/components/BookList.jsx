import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  handleFilter = (e) => {
    console.log(e.target.value);
    console.log(this.props);
  };
  render() {
    return (
      <>
        <Container>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="text-left">Find your next book here</Form.Label>
            <Form.Control value={this.props.books.title} onChange={this.handleFilter} type="text" placeholder="search your title" />
          </Form.Group>
          <Button variant="success" className="mb-3">
            Search
          </Button>

          <Row className="g-2">
            {this.props.books.map((b) => (
              <Col xs={6} md={4} xl={3} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
