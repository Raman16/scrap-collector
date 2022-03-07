import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await authCtx.logout();
        navigate("/");
    };
    return (
        <React.Fragment>
            <nav
                id="navbarExample"
                className="navbar navbar-expand-lg fixed-top navbar-light"
                aria-label="Main navigation"
            >
                <div className="container">
                    <a className="navbar-brand logo-image" href="index.html">
                        <img src="images/logo.png" alt="alternative" />
                    </a>

                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        id="navbarSideCollapse"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="navbar-collapse offcanvas-collapse"
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#details">
                                    Details
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">
                                    Features
                                </a>
                            </li> */}
                            {!isLoggedIn && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to=""
                                            className="dropdown-item"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="about-us"
                                            className="dropdown-item"
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="login"
                                            className="dropdown-item"
                                        >
                                            Login
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink
                                            to="register"
                                            className="dropdown-item"
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {isLoggedIn && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="book-a-pickup"
                                            className="dropdown-item"
                                        >
                                            Book A Pickup
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="my-pickups"
                                            className="dropdown-item"
                                        >
                                            Pickup List
                                        </NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            id="dropdown01"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {authCtx.user.username}
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdown01"
                                        >
                                            <li>
                                                <NavLink
                                                    to="profile"
                                                    className="dropdown-item"
                                                >
                                                    Profile
                                                </NavLink>
                                                <a
                                                    className="dropdown-item"
                                                    href="article.html"
                                                ></a>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="logout"
                                                    className="dropdown-item"
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};
export default Header;
