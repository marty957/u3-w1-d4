import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
//import SingleBook from "./SingleBook";

class CommentArea extends Component {
  fecthComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzI3OTk2ODQsImV4cCI6MTczNDAwOTI4NH0.o89HBlaUpVHCQgSNMbG6NEesPC3Zr0fmpmuQQJF5oaU"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((comments) => {
        console.log(comments);
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fecthComments();
  }
  render() {
    return (
      <div>
        <CommentList {...this.props} />

        <AddComment />
      </div>
    );
  }
}

export default CommentArea;
