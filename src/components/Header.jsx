import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../assets/icons/header/compare.png";
import whishList from "../assets/icons/header/wishlist.png";
import user from "../assets/icons/header/user.png";
import cart from "../assets/icons/cart.svg";
import menu from "../assets/icons/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 and Free Returns.
              </p>
            </div>
            <div className="col-6">
              <p className="text-white text-end mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Hksite.</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Search Product here"
                  aria-label="Search Product here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="h-u-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-align-items-center gap-10 text-white">
                    <img src={compare} alt="compare-products" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-align-items-center gap-10 text-white">
                    <img src={whishList} alt="fav-whishList" />
                    <p className="mb-0">
                      Favourite <br /> Wishlsit
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-align-items-center gap-10 text-white">
                    <img src={user} alt="log-in" />
                    <p className="mb-0">
                      SignIn/ <br /> SignUp
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={menu} alt="menu" />
                    <span className="me-2 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-align-items-center gap-15">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/our_store">Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
