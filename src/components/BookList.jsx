import { Component } from "react";
import { Button, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import Form from "react-bootstrap/Form";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    books: fantasy
  };
  handleFilter = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <>
        <Container>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="text-left">Find your next book here</Form.Label>
            <Form.Control value={this.state.books.title} onChange={this.handleFilter} type="text" placeholder="search your title" />
          </Form.Group>
          <Button variant="success" className="mb-3">
            Search
          </Button>

          <Row className="g-2">
            {this.state.books.map((book) => (
              <SingleBook key={book.asin} src={book.img} title={book.title} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
