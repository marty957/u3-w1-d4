import ListGroup from "react-bootstrap/ListGroup";

const CommentList = (prop) => {
  return (
    <ListGroup>
      <ListGroup.Item>{prop.comments}</ListGroup.Item>
    </ListGroup>
  );
};

export default CommentList;
