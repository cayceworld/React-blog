import { useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');


  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
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
        <Form.Control type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Short Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Comment" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Main Content</Form.Label>
        <Form.Control as="textarea" rows={8} placeholder="Comment" value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>


    </Form>
  );
}

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
} 