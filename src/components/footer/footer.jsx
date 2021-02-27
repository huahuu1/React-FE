import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer_three">
                <div className="footer-top bg-dark3 pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-12">
                                <div className="widget">
                                    <h4 className="footer-title">About</h4>
                                    <p className="text-capitalize mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation ullamco laboris<br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className="widget">
                                    <h4 className="footer-title">Quick Link</h4>
                                    <ul className="list list-arrow mb-30">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Listing</a></li>
                                        <li><a href="#">Membership</a></li>
                                        <li><a href="#">Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="widget">
                                    <h4 className="footer-title">Contact Info</h4>
                                    <ul className="list list-unstyled mb-30">
                                        <li> <i className="fa fa-map-marker"></i> 123, Lorem Ipsum, Dummy City, FL-12345 USA</li>
                                        <li> <i className="fa fa-phone"></i> <span className="mr-5">+(1) 123-878-1649 </span> | <span className="ml-5">+(1) 123-878-1649 </span></li>
                                        <li> <i className="fa fa-envelope"></i> <span className="mr-5">info@Joblly.com </span> | <span className="ml-5">support@Joblly.com </span></li>
                                    </ul>
                                    <div className="social-icons mt-30">
                                        <ul className="list-unstyled d-flex gap-items-1">
                                            <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-youtube"><i className="fa fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-12">
                                <div className="widget">
                                    <h4 className="footer-title">Subscribe</h4>
                                    <p className="text-capitalize mb-20">Sign Up to our Newsletter and get the latest offers.</p>
                                    <div className="mb-20">
                                        <form className="" action="" method="post">
                                            <input name="email" required="required" className="form-control" placeholder="Your Email Address" type="email"/>
                                            <button name="submit" value="Submit" type="submit" className="btn btn-info mt-5"> Get notified </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom bg-dark3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-12 text-md-left text-center"> © 2020
                            <span className="text-white">Joblly</span>  All Rights Reserved.</div>
                            <div className="col-lg-6 col-md-6 mt-md-0 mt-20">
                                <ul className="payment-icon list-unstyled d-flex gap-items-1 justify-content-md-end justify-content-center">
                                    <li className="pl-0">
                                        <a href="#"><i className="fa fa-cc-amex" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-cc-visa" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-credit-card-alt" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-cc-mastercard" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-cc-paypal" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

// export default Footer;