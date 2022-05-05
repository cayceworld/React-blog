import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import { useNavigate } from 'react-router';

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  console.log(content);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({ title, author, publishedDate: date, shortDescription: description, content }));
    navigate('/')
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Published</Form.Label>
          <Form.Control type="text" placeholder="Enter date" value={date} onChange={e => setDate(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Short Description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Comment" value={description} onChange={e => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Main Content</Form.Label>
          <Form.Control as="textarea" rows={8} placeholder="Comment" value={content} onChange={e => setContent(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>


      </Form>
    </div>
  );
}

export default AddPostForm;