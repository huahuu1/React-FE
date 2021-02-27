import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Navbar extends Component {
  render() {
    return (
      <header className="top-bar">
        <div className="topbar bg-dark">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6 col-12 d-lg-block d-none">
                <div className="topbar-social text-center text-md-left topbar-left">
                  <ul className="list-inline d-md-flex d-inline-block">
                    <li className="ml-10 pr-10">
                      <a href="#">
                        <i className="text-white fa fa-question-circle"></i> Ask a
                        Question
                      </a>
                    </li>
                    <li className="ml-10 pr-10">
                      <a href="#">
                        <i className="text-white fa fa-envelope"></i>{" "}
                        info@Joblly.com
                      </a>
                    </li>
                    <li className="ml-10 pr-10">
                      <a href="#">
                        <i className="text-white fa fa-phone"></i> +(1) 123-878-1649
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-12 xs-mb-10">
                <div className="topbar-call text-center text-lg-right topbar-right">
                  <ul className="list-inline d-lg-flex justify-content-end">
                    <li className="mr-10 pl-10">
                      <a href="#">
                        <i className="text-white fa fa-user d-md-inline-block d-none"></i>{" "}
                        Register
                      </a>
                    </li>
                    <li className="mr-10 pl-10">
                      <a href="#">
                        <i className="text-white fa fa-sign-in d-md-inline-block d-none"></i>{" "}
                        Login
                      </a>
                    </li>
                    <li className="mr-10 pl-10">
                      <a href="#">
                        <i className="text-white fa fa-dashboard d-md-inline-block d-none"></i>{" "}
                        My Account
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav hidden className="nav-white nav-transparent full-width">
          <div className="nav-header">
            <a href="index.html" className="brand">
              <img src="../images/logo-light-text2.png" alt="" />
            </a>
            <button className="toggle-bar">
              <span className="ti-menu"></span>
            </button>
          </div>
          <ul className="menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="dropdown">
              <a href="#">Listing</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="job_list.html">Jobs List</a>
                </li>
                <li>
                  <a href="job_list_right_sidebar.html">
                    Jobs List Right Sidebar
                  </a>
                </li>
                <li>
                  <a href="job_list-map.html">Jobs with Map</a>
                </li>
                <li>
                  <a href="job_categories.html">Jobs Categories</a>
                </li>
                <li>
                  <a href="job_details.html">Jobs Details</a>
                </li>
                <li>
                  <a href="job_details_right_sidebar.html">
                    Jobs Details right sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li className="megamenu">
              <a href="#">Pages</a>
              <div className="megamenu-content">
                <div className="row">
                  <div className="col-lg-3 col-12">
                    <ul className="list-group">
                      <li>
                        <h4 className="menu-title">User Pages</h4>
                      </li>
                      <li>
                        <a href="faqs.html">
                          <i className="ti-arrow-circle-right mr-10"></i>FAQs
                        </a>
                      </li>
                      <li>
                        <a href="inovice.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Invoice
                        </a>
                      </li>
                      <li>
                        <a href="membership.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Membership
                        </a>
                      </li>
                      <li>
                        <a href="mydashboard.html">
                          <i className="ti-arrow-circle-right mr-10"></i>My
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="staff.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Staff
                        </a>
                      </li>
                      <li>
                        <a href="testimonial.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Testimonial
                        </a>
                      </li>
                      <li>
                        <a href="typography.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Typography
                        </a>
                      </li>
                      <li>
                        <a href="user_list.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Employer
                          List
                        </a>
                      </li>
                      <li>
                        <a href="userprofile.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Employer
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="about.html">
                          <i className="ti-arrow-circle-right mr-10"></i>About
                        </a>
                      </li>
                      <li>
                        <a href="contact_us.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-12">
                    <ul className="list-group">
                      <li>
                        <h4 className="menu-title">Widgets</h4>
                      </li>
                      <li>
                        <a href="widgets.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Widgets
                        </a>
                      </li>
                      <li>
                        <a href="job_list.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Jobs List
                        </a>
                      </li>
                      <li>
                        <a href="job_details.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Jobs
                          Details
                        </a>
                      </li>
                      <li>
                        <a href="register.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Register
                        </a>
                      </li>
                      <li>
                        <a href="login.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Login
                        </a>
                      </li>
                      <li>
                        <a href="register_login.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Register &
                          Login
                        </a>
                      </li>
                      <li>
                        <a href="forgot_pass.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Forgot
                          Password
                        </a>
                      </li>
                      <li>
                        <a href="lockscreen.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Lock Screen
                        </a>
                      </li>
                      <li>
                        <a href="maintenance.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Under
                          Constructions
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <i className="ti-arrow-circle-right mr-10"></i>404
                        </a>
                      </li>
                      <li>
                        <a href="500.html">
                          <i className="ti-arrow-circle-right mr-10"></i>500
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-12">
                    <ul className="list-group">
                      <li>
                        <h4 className="menu-title">Features</h4>
                      </li>
                      <li>
                        <a href="header_default.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Header One
                        </a>
                      </li>
                      <li>
                        <a href="header_style2.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Header Two
                        </a>
                      </li>
                      <li>
                        <a href="header_style3.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Header
                          Three
                        </a>
                      </li>
                      <li>
                        <a href="header_style4.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Header Four
                        </a>
                      </li>
                      <li>
                        <a href="header_style5.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Header Five
                        </a>
                      </li>
                      <li>
                        <a href="footer_style1.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer One
                        </a>
                      </li>
                      <li>
                        <a href="footer_style2.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer Two
                        </a>
                      </li>
                      <li>
                        <a href="footer_style3.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer
                          Three
                        </a>
                      </li>
                      <li>
                        <a href="footer_style4.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer Four
                        </a>
                      </li>
                      <li>
                        <a href="footer_style5.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer Five
                        </a>
                      </li>
                      <li>
                        <a href="footer_style6.html">
                          <i className="ti-arrow-circle-right mr-10"></i>Footer Six
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-12 d-none d-lg-block">
                    <img
                      src="../images/front-end-img/adv.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Blog</a>
              <ul className="dropdown-menu">
                <li className="dropdown">
                  <a href="#">Grid Blog</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog_grid_2.html">Grid 2 colunm</a>
                    </li>
                    <li>
                      <a href="blog_grid_3.html">Grid 3 colunm</a>
                    </li>
                    <li>
                      <a href="blog_grid_left_sidebar.html">
                        blog left sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog_grid_right_sidebar.html">
                        blog right sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">List Blog</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog_list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog_list_left_sidebar.html">
                        Blog List Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog_list_right_sidebar.html">
                        Blog List right Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Single Blog Post</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog_single_grid_post.html">Single Grid Post</a>
                    </li>
                    <li>
                      <a href="blog_single_html5video_post.html">
                        Single html5 Video-post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_image_post.html">
                        Single Image Post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_slider_post.html">
                        Single Slider Post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_soundcloud_post.html">
                        Single SoundCloud Post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_vimeo_post.html">
                        Single Vimeo Post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_post.html">
                        Single without image post
                      </a>
                    </li>
                    <li>
                      <a href="blog_single_youtube_post.html">
                        Single Youtube Post
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact_us.html">Contact</a>
            </li>
          </ul>
          <ul className="attributes">
            <li className="d-md-block d-none">
              <a href="#" className="px-10 pt-15 pb-10">
                <div className="btn btn-primary py-5">Post a job</div>
              </a>
            </li>
            <li>
              <a href="#" className="toggle-search-fullscreen">
                <span className="ti-search"></span>
              </a>
            </li>
          </ul>

          <div className="wrap-search-fullscreen">
            <div className="container-fluid">
              <button className="close-search">
                <span className="ti-close"></span>
              </button>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </nav>
      </header>

    //   <header>
    //     <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    //       <Link className="navbar-brand" to="/login">
    //         Logo
    //       </Link>
    //       <button
    //         className="navbar-toggler d-lg-none"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#collapsibleNavId"
    //         aria-controls="collapsibleNavId"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       />
    //       <div className="collapse navbar-collapse" id="collapsibleNavId">
    //         <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/welcome/huahuu1">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/todos">
    //               Todos
    //             </Link>
    //           </li>
    //         </ul>
    //         <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/login">
    //               Login
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/logout">
    //               Logout
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </header>
    );
  }
}
