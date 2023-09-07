import { Link } from "react-router-dom";
import blog_1 from "../assets/images/blog/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={blog_1} alt="blog" className="img-fluid" />
        </div>

        <div className="blog-content">
          <p className="data">1 Dec, 2022</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti.
            libero sequi ratione perspiciatis nulla, autem facere earum
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
