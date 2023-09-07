import { Link } from "react-router-dom";
import mainBanner from "../assets/images/main_banner/main-banner.jpg";
import catBanner_1 from "../assets/images/small_banner/catbanner-01.jpg";
import catBanner_2 from "../assets/images/small_banner/catbanner-02.jpg";
import catBanner_3 from "../assets/images/small_banner/catbanner-03.jpg";
import catBanner_4 from "../assets/images/small_banner/catbanner-04.jpg";

import service_1 from "../assets/images/services/free-shipping.png";
import service_2 from "../assets/images/services/gift.png";
import service_3 from "../assets/images/services/customer-support.png";
import service_4 from "../assets/images/services/best-sales.png";
import service_5 from "../assets/images/services/payment.png";

import camera from "../assets/images/categories/camera.jpg";
// import laptop from "../assets/categories/laptop.jpg"
// import tab from "../assets/categories/tab.jpg"
// import speaker from "../assets/categories/speaker.jpg"
// import watch from "../assets/categories/watch.jpg"

import Marquee from "react-fast-marquee";

import brand_1 from "../assets/images/brand/brand-01.png";
import brand_2 from "../assets/images/brand/brand-02.png";
import brand_3 from "../assets/images/brand/brand-03.png";
import brand_4 from "../assets/images/brand/brand-04.png";
import brand_5 from "../assets/images/brand/brand-05.png";
import brand_6 from "../assets/images/brand/brand-06.png";
import brand_7 from "../assets/images/brand/brand-07.png";
import brand_8 from "../assets/images/brand/brand-08.png";

import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import headPhone from "../assets/images/headphone.jpg";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={mainBanner}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From &999.00 or $41/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative">
                  <img
                    src={catBanner_1}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 or <br /> $65.45/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner_2}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARIVAL</h4>
                    <h5>BUY iPad Air</h5>
                    <p>
                      From $599 or <br /> $49.99/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner_3}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smarrt Watch 7</h5>
                    <p>
                      Shop the latest <br /> band styles and colors
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner_4}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback <br /> & ultra low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service_1} alt="service-1" />
                  <div>
                    <h6 className="text-white">Free Shipping</h6>
                    <p className="mb-0 text-white">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service_2} alt="" />
                  <div>
                    <h6 className="text-white">Daily Surprise Offers</h6>
                    <p className="mb-0 text-white">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service_3} alt="" />
                  <div>
                    <h6 className="text-white">Support 24/7</h6>
                    <p className="mb-0 text-white">Shop with an Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service_4} alt="" />
                  <div>
                    <h6 className="text-white">Affordable Prices</h6>
                    <p className="mb-0 text-white">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service_5} alt="" />
                  <div>
                    <h6 className="text-white">Secure Payments</h6>
                    <p className="mb-0 text-white">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Music & Gaming</h6>
                    <p className="text-dark">10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Tab</h6>
                    <p className="text-dark">20 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Smart Watches</h6>
                    <p className="text-dark">30 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Laptops</h6>
                    <p className="text-dark">10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Music & Gaming</h6>
                    <p className="text-dark">10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Tab</h6>
                    <p className="text-dark">20 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Smart Watches</h6>
                    <p className="text-dark">30 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6 className="text-dark">Laptops</h6>
                    <p className="text-dark">10 items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src={headPhone}
                  alt="head-phone"
                  width="400"
                  height="400"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand_1} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_2} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_3} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_4} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_5} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_6} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_7} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
