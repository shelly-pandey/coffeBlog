import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogData } from "../data.js";
import image4 from "../assets/images/posts/img4.png";
import "../App.css";

export default function DetailBlog() {
  const { id } = useParams();

  const blog = blogData.filter((blog) => blog.id === id)[0];

  return (
    <div>
      <Link to={"/"} className="btn btn-primary">
        Continue to Home!
      </Link>
      <div className="my-form">
        <Card style={{ width: "18rem" }}>
          <Card.Img src={image4} height="200px" width="200px" alt="" />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Subtitle className="title">
              Published At: {blog.published_date}
            </Card.Subtitle>
            <Card.Text>{blog.article}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
