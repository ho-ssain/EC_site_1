import { Link } from "react-router-dom";
import pro_1 from "../assets/images/categories/watch.jpg";
import pro_2 from "../assets/images/tab1.jpg";
import ReactStars from "react-rating-stars-component";

import compare from "../assets/icons/prodcompare.svg";
import view from "../assets/icons/view.svg";
import add_cart from "../assets//icons/add-cart.svg";
import wish from "../assets/icons/wish.svg";

const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <img src={wish} alt="wishlist" />
        </div>
        <div className="product-image">
          <img src={pro_1} alt="p1-img" className="img-fluid" />
          <img
            src={pro_2}
            alt="p2-img"
            width="300"
            height="300"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids Headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            value="3"
            edit={false}
          />
          <p className="price">$180.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={compare} alt="compare" />
            </Link>
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={add_cart} alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
