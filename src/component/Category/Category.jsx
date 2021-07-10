import React from "react";
import { Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import "./Category.css";

const CategoryItem = () => {
  const { name } = useParams();

  console.log(useParams())

  return (
    <div className="CategoryItem">
      <h2>This is {name} page</h2>
    </div>
  );
}

const Category = () => {
  const { url, path } = useRouteMatch();

  return (
    <div className="Category">
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}><h2>This is Category Page</h2></Route>
        <Route path={`${path}/:name`}><CategoryItem/></Route>
      </Switch>
    </div>
  );
};

export default Category;
