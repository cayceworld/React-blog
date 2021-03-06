import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsReducer";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { removePost } from "../../../redux/postsReducer";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch();

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removePost({ id }))
  }

  console.log(postData);


  if (!postData) return <Navigate to="/" />
  else return (
    <Container>
      <div className="card-body mx-5 ">
        <div className="d-flex">
          <h5 className="card-title col-9">{postData.title}</h5>
          <Link to={`/post/edit/${postData.id}`}><button type="button" className="btn btn-outline-info mx-1">Edit</button></Link>
          <Button variant="outline-danger" onClick={handleShow}>
            Delete
          </Button>
        </div>
        <div className="d-flex ">
          <h6 className="card-subtitle  mt-0">Author:</h6>
          <small className="font-weight-normal px-1 " >{postData.author}</small>
        </div>
        <div className="d-flex ">
          <h6 className="card-subtitle  mt-0">Published:</h6>
          <small className="font-weight-normal px-1 " >{dateToStr(postData.publishedDate)}</small>
        </div>
        <div className="d-flex ">
          <h6 className="card-subtitle  mt-0">Category:</h6>
          <small className="font-weight-normal px-1 " >{postData.category}</small>
        </div>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} className="card-text" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will remove post from app.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>)
}

export default SinglePost;