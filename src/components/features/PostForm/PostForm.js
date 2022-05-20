import { useState } from "react";
import PropTypes from 'prop-types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import DatePicker from "react-datepicker";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesReducer";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');


  const [category, setCategory] = useState(props.category || '');
  const categories = useSelector(getCategories);

  console.log('category', category);


  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();


  const handleSubmit = () => {
      setContentError(!content)
     setDateError(!publishedDate)
     if (content && publishedDate) { 
    action({ title, author, publishedDate, shortDescription, content, category });
     } 
  };



  return (
    <Form onSubmit={ validate (handleSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" placeholder="Enter title"
        />
        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          value={author}
          onChange={e => setAuthor(e.target.value)}
          type="text" placeholder="Enter author"
        />
        {errors.title && <small className="d-block form-text text-danger mt-2" >This field must have min 3 symbols</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Published</Form.Label>
        <Form.Control as={DatePicker} selected={publishedDate} value={publishedDate} onChange={(date: Date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Category</Form.Label>
        <Form.Control as="select"
          value={category} onChange={e => setCategory(e.target.value)}>
          <option >Select category...</option>
          {categories.map(category =>
            <option onChange={e => setCategory(category.item)} >{category.item}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, min: 20 })}
          as="textarea" rows={3} placeholder="Comment"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">This field must have min 20 symbols</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Main Content</Form.Label>
        <ReactQuill value={content} placeholder="Comment" onChange={setContent} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>


      <Button variant="primary" type="submit">
        {actionText}
      </Button>



    </Form >
  );
}

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.instanceOf(Date),
  shortDescription: PropTypes.string,
  content: PropTypes.string,
} 