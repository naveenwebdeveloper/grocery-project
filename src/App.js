import Header from "./Common-comp/Header";
import SliderComp1 from "./Index-comp/sliderComp1";
function App() {
  return (
    <>
      <Header />
      <SliderComp1 />

      <nav class="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
              <li class="nav-item">
                <a class="nav-link shop" href="index.html"><span class="mdi mdi-store"></span> Super Store</a>
              </li>
              <li class="nav-item">
                <a href="index.html" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shop.html">Fruits & Vegetables</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="shop.html">Grocery & Staples</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="shop.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Shop Grid</a>
                  <a class="dropdown-item" href="single.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Single Product</a>
                  <a class="dropdown-item" href="cart.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Shopping Cart</a>
                  <a class="dropdown-item" href="checkout.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Checkout</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Account
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="my-profile.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> My Profile</a>
                  <a class="dropdown-item" href="my-address.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> My Address</a>
                  <a class="dropdown-item" href="wishlist.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Wish List </a>
                  <a class="dropdown-item" href="orderlist.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Order List</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog Page
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="blog.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Blog</a>
                  <a class="dropdown-item" href="blog-detail.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Blog Detail</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More Pages
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="about.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> About Us</a>
                  <a class="dropdown-item" href="contact.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> Contact Us</a>
                  <a class="dropdown-item" href="faq.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> FAQ </a>
                  <a class="dropdown-item" href="not-found.html"><i class="mdi mdi-chevron-right" aria-hidden="true"></i> 404 Error</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section class="carousel-slider-main text-center border-top border-bottom bg-white">
        <div class="owl-carousel owl-carousel-slider">
          <div class="item">
            <a href="shop.html"><img class="img-fluid" src="img/slider/slider1.jpg" alt="First slide" /></a>
          </div>
          <div class="item">
            <a href="shop.html"><img class="img-fluid" src="img/slider/slider2.jpg" alt="First slide" /></a>
          </div>
          <div class="item">
            <a href="shop.html"><img class="img-fluid" src="img/slider/slider1.jpg" alt="First slide" /></a>
          </div>
          <div class="item">
            <a href="shop.html"><img class="img-fluid" src="img/slider/slider2.jpg" alt="First slide" /></a>
          </div>
        </div>
      </section>
      <section class="top-category section-padding">
        <div class="container">
          <div class="owl-carousel owl-carousel-category">
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/1.jpg" alt="" />
                  <h6>Fruits & Vegetables</h6>
                  <p>150 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/2.jpg" alt="" />
                  <h6>Grocery & Staples</h6>
                  <p>95 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/3.jpg" alt="" />
                  <h6>Beverages</h6>
                  <p>65 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/4.jpg" alt="" />
                  <h6>Home & Kitchen</h6>
                  <p>965 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/5.jpg" alt="" />
                  <h6>Furnishing & Home Needs</h6>
                  <p>125 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/6.jpg" alt="" />
                  <h6>Household Needs</h6>
                  <p>325 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/7.jpg" alt="" />
                  <h6>Personal Care</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/8.jpg" alt="" />
                  <h6>Breakfast & Dairy</h6>
                  <p>857 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/9.jpg" alt="" />
                  <h6>Biscuits, Snacks & Chocolates</h6>
                  <p>48 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/10.jpg" alt="" />
                  <h6>Noodles, Sauces & Instant Food</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/11.jpg" alt="" />
                  <h6>Pet Care</h6>
                  <p>568 Items</p>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="category-item">
                <a href="shop.html">
                  <img class="img-fluid" src="img/small/12.jpg" alt="" />
                  <h6>Meats, Frozen & Seafood</h6>
                  <p>156 Items</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="product-items-slider section-padding">
        <div class="container">
          <div class="section-header">
            <h5 class="heading-design-h5">Top Savers Today <span class="badge badge-primary">20% OFF</span>
              <a class="float-right text-secondary" href="shop.html">View All</a>
            </h5>
          </div>
          <div class="owl-carousel owl-carousel-featured">
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/1.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/2.jpg" alt="" />
                    <span class="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/3.jpg" alt="" />
                    <span class="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/4.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/5.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/6.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="offer-product">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-6">
              <a href="#"><img class="img-fluid" src="img/ad/1.jpg" alt="" /></a>
            </div>
            <div class="col-md-6">
              <a href="#"><img class="img-fluid" src="img/ad/2.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </section>
      <section class="product-items-slider section-padding">
        <div class="container">
          <div class="section-header">
            <h5 class="heading-design-h5">Best Offers View <span class="badge badge-info">20% OFF</span>
              <a class="float-right text-secondary" href="shop.html">View All</a>
            </h5>
          </div>
          <div class="owl-carousel owl-carousel-featured">
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/7.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/8.jpg" alt="" />
                    <span class="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/9.jpg" alt="" />
                    <span class="non-veg text-danger mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/10.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/11.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
            <div class="item">
              <div class="product">
                <a href="single.html">
                  <div class="product-header">
                    <span class="badge badge-success">50% OFF</span>
                    <img class="img-fluid" src="img/item/12.jpg" alt="" />
                    <span class="veg text-success mdi mdi-circle"></span>
                  </div>
                  <div class="product-body">
                    <h5>Product Title Here</h5>
                    <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                  </div>
                  <div class="product-footer">
                    <button type="button" class="btn btn-secondary btn-sm float-right"><i class="mdi mdi-cart-outline"></i> Add To Cart</button>
                    <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i><br /><span class="regular-price">$800.99</span></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-padding bg-white border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-truck-fast"></i>
                <h6>Free & Next Day Delivery</h6>
                <p>Lorem ipsum dolor sit amet, cons...</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-basket"></i>
                <h6>100% Satisfaction Guarantee</h6>
                <p>Rorem Ipsum Dolor sit amet, cons...</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-tag-heart"></i>
                <h6>Great Daily Deals Discount</h6>
                <p>Sorem Ipsum Dolor sit amet, Cons...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding footer bg-white border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <h4 class="mb-5 mt-0">
                <a class="logo" ><h3>We-Mart</h3></a>
              </h4>
              <p class="mb-0"><a class="text-dark" href="#"><i class="mdi mdi-phone"></i> +61 525 240 310</a></p>
              <p class="mb-0"><a class="text-dark" href="#"><i class="mdi mdi-cellphone-iphone"></i> 12345 67890, 56847-98562</a></p>
              <p class="mb-0"><a class="text-success" href="#"><i class="mdi mdi-email"></i> <span class="__cf_email__" data-cfemail="19707874766a78717877597e74787075377a7674">[email&#160;protected]</span></a></p>
              <p class="mb-0"><a class="text-primary" href="#"><i class="mdi mdi-web"></i> www.askbootstrap.com</a></p>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">TOP CITIES </h6>
              <ul>
                <li><a href="#">New Delhi</a></li>
                <li><a href="#">Bengaluru</a></li>
                <li><a href="#">Hyderabad</a></li>
                <li><a href="#">Kolkata</a></li>
                <li><a href="#">Gurugram</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">CATEGORIES</h6>
              <ul>
                <li><a href="#">Vegetables</a></li>
                <li><a href="#">Grocery & Staples</a></li>
                <li><a href="#">Breakfast & Dairy</a></li>
                <li><a href="#">Soft Drinks</a></li>
                <li><a href="#">Biscuits & Cookies</a></li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">ABOUT US</h6>
              <ul>
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Store Location</a></li>
                <li><a href="#">Affillate Program</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3">
              <h6 class="mb-4">Download App</h6>
              <div class="app">
                <a href="#"><img src="img/google.png" alt="" /></a>
                <a href="#"><img src="img/apple.png" alt="" /></a>
              </div>
              <h6 class="mb-3 mt-4">GET IN TOUCH</h6>
              <div class="footer-social">
                <a class="btn-facebook" href="#"><i class="mdi mdi-facebook"></i></a>
                <a class="btn-twitter" href="#"><i class="mdi mdi-twitter"></i></a>
                <a class="btn-instagram" href="#"><i class="mdi mdi-instagram"></i></a>
                <a class="btn-whatsapp" href="#"><i class="mdi mdi-whatsapp"></i></a>
                <a class="btn-messenger" href="#"><i class="mdi mdi-facebook-messenger"></i></a>
                <a class="btn-google" href="#"><i class="mdi mdi-google"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="pt-4 pb-4 footer-bottom">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-6 col-sm-6">
              <p class="mt-1 mb-0">&copy; Copyright 2020 <strong class="text-dark">we-mart</strong>. All Rights Reserved<br />
                <small class="mt-0 mb-0">Made with <i class="mdi mdi-heart text-danger"></i> by <a target="_blank" class="text-primary">Naveen , Parkash , Jatin , Akshay</a>
                </small>
              </p>
            </div>
            <div class="col-lg-6 col-sm-6 text-right">
              <img alt="osahan logo" src="img/payment_methods.png" />
            </div>
          </div>
        </div>
      </section>

      <div class="cart-sidebar">
        <div class="cart-sidebar-header">
          <h5>
            My Cart <span class="text-success">(5 item)</span> <a data-toggle="offcanvas" class="float-right" href="#"><i class="mdi mdi-close"></i>
            </a>
          </h5>
        </div>
        <div class="cart-sidebar-body">
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#"><i class="mdi mdi-close"></i></a>
            <img class="img-fluid" src="img/item/11.jpg" alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5><a href="#">Product Title Here</a></h5>
            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#"><i class="mdi mdi-close"></i></a>
            <img class="img-fluid" src="img/item/7.jpg" alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5><a href="#">Product Title Here</a></h5>
            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#"><i class="mdi mdi-close"></i></a>
            <img class="img-fluid" src="img/item/9.jpg" alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5><a href="#">Product Title Here</a></h5>
            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#"><i class="mdi mdi-close"></i></a>
            <img class="img-fluid" src="img/item/1.jpg" alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5><a href="#">Product Title Here</a></h5>
            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#"><i class="mdi mdi-close"></i></a>
            <img class="img-fluid" src="img/item/2.jpg" alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5><a href="#">Product Title Here</a></h5>
            <h6><strong><span class="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
            <p class="offer-price mb-0">$450.99 <i class="mdi mdi-tag-outline"></i> <span class="regular-price">$800.99</span></p>
          </div>
        </div>
        <div class="cart-sidebar-footer">
          <div class="cart-store-details">
            <p>Sub Total <strong class="float-right">$900.69</strong></p>
            <p>Delivery Charges <strong class="float-right text-danger">+ $29.69</strong></p>
            <h6>Your total savings <strong class="float-right text-danger">$55 (42.31%)</strong></h6>
          </div>
          <a href="checkout.html"><button class="btn btn-secondary btn-lg btn-block text-left" type="button"><span class="float-left"><i class="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span class="float-right"><strong>$1200.69</strong> <span class="mdi mdi-chevron-right"></span></span></button></a>
        </div>
      </div>

      <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
      <script src="vendor/jquery/jquery.min.js" type="de81f11a953ec5bcced0feac-text/javascript"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" type="de81f11a953ec5bcced0feac-text/javascript"></script>

      <script src="vendor/select2/js/select2.min.js" type="de81f11a953ec5bcced0feac-text/javascript"></script>

      <script src="vendor/owl-carousel/owl.carousel.js" type="de81f11a953ec5bcced0feac-text/javascript"></script>

      <script src="js/custom.js" type="de81f11a953ec5bcced0feac-text/javascript"></script>
      <script src="../../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="de81f11a953ec5bcced0feac-|49" defer=""></script>
      <script defer src="../../../static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"69a7f95fbf95de11","version":"2021.9.0","r":1,"token":"dd471ab1978346bbb991feaa79e6ce5c","si":100}'></script>
    </>
  );
}

export default App;