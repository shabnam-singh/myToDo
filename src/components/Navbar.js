import "./myStyles.css";
import { Link} from "react-router-dom";

export default function nav() {
  return (
    <>
      <nav>
        <h2>Welcome to MyToDoList</h2>
        <b><Link to="/">Home Page</Link></b><br/>
        <b><Link to="/about">Go To About Page</Link></b><br/>
        <b><Link to="/contact">Contact Page</Link></b>
      </nav>
    </>
  );
}
