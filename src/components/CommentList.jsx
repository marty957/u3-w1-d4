import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
//import SingleComment from "./SingleComment";

const CommentList = ({ commentToShow }) => {
  console.log(commentToShow);
  return (
    <ListGroup>
      {commentToShow.map((comment) => (
        <ListGroupItem key={comment._id}>
          {comment.author}--
          {comment.comment}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CommentList;
