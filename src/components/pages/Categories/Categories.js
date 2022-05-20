import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categoriesReducer";
import { Link } from 'react-router-dom';


const Categories = () => {

  const categories = useSelector(getCategories);


  return (
    <div className="mx-auto" style={{ width: '24rem' }}>
    <ListGroup>
      {categories.map(category =>
        <Link key={category.item} to={"/Categories/" + category.item}><ListGroup.Item>{category.item}</ListGroup.Item></Link>
      )}
    </ListGroup>
    </div>
  );
}

export default Categories;