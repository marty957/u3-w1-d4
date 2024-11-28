import { Component } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };
  handleChange = () => {
    this.setState({ selected: !this.state.selected });
    console.log(this.state);
  };

  render() {
    const newClass = this.state.selected ? "border border-danger" : "";
    return (
      <Col xs={6} md={4} xl={3} key={this.props.asin}>
        <Card className={newClass}>
          <Card.Img variant="top" src={this.props.src} height={"150px"} alt="copertina" onClick={this.handleChange} />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.title}</Card.Title>
            {this.state.selected && <CommentArea props={this.props.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
