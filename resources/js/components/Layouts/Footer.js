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
                                <a
                                    className="logo-image"
                                    href="index.html"
                                >
                                    <img
                                        src="images/logo.png"
                                        alt="alternative"
                                        style={{width:"130px"}}
                                    />
                                </a>{" "}
                                <p>
                                    Road NO:7, Padma Nagar Street, Banashankar,{" "}
                                    <br />
                                    Bengalure, 560029.
                                    <br />
                                    India. <br />
                                    <strong>Phone:</strong> +1431326871
                                    <br />
                                    <strong>Email:</strong> info@ewpotformotherearth.com
                                    <br />
                                </p>
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
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>GET THE APP</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right"></i>
                                        <img
                                            src="images/android-app.jpg"
                                            alt="alternative"
                                            style={{ width: "60%" }}
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
                                <div className="social-links mt-3">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="">
                        &copy; Copyright
                        <strong>
                            <span>&nbsp; EW-POT(For Mother Earth)</span>
                        </strong>
                         All Rights Reserved
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};
export default Footer;
