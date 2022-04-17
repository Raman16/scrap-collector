import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <div style={{ marginBottom: "6px" }}>
                                    <a className="logo-image" href="index.html">
                                        <img
                                            src="images/logo.png"
                                            alt="alternative"
                                            style={{ width: "130px" }}
                                        />
                                    </a>
                                </div>
                                <div>
                                    <p>
                                        Q Hub Business Center,
                                        <br />
                                        Road no:36 & 37, Besides Madhapur,{" "}
                                        <br />
                                        Jubilee Hills,Hyderabad,
                                        <br />
                                        Telangana 500033, India. <br />
                                    </p>
                                </div>
                                <div>
                                    <strong>Phone:</strong> +91 7337321213
                                    <br />
                                    <strong>Email: </strong>
                                    mahesh@ew-pot.com
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li className="nav-item">
                                        <i className="bx bx-chevron-right"></i>

                                        <NavLink to="">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <i className="bx bx-chevron-right"></i>

                                        <NavLink to="about-us">
                                            About Us
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="#">Contact Us</a>
                                    </li> */}
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Get The App</h4>
                                <ul> 
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <img
                                            src="images/android-app.jpg"
                                            alt="alternative"
                                            style={{ width: "60%",marginBottom:"12px" }}
                                        />
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <img
                                            src="images/ios-app.png"
                                            alt="alternative"
                                            style={{ width: "60%" }}
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Delivery Service</h4>
                                <p>
                                    You’ll get text alerts on the day of
                                    service, including vehicle tracking & team
                                    details, so you know what is happening at
                                    all times.
                                </p>
                                {/* <div className="social-links mt-3">
                                    <a href="#" className="twitter">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                    <a href="#" className="facebook">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a href="#" className="instagram">
                                        <i className="bx bxl-instagram"></i>
                                    </a>
                                    <a href="#" className="google-plus">
                                        <i className="bx bxl-skype"></i>
                                    </a>
                                    <a href="#" className="linkedin">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div class="row">
                        <div className="col-sm-4">
                            <strong>
                                <span>&nbsp;K UMAMAHESWAR REDDY (Founder & CEO) </span>
                            </strong>
                        </div>
                        <div className="col-sm-8">
                                <span style={{ float: "right" }}>
                                    &copy; Copyright 2022 EW-POT(For Mother
                                    Earth) All Rights Reserved.
                                </span>
                               
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};
export default Footer;
