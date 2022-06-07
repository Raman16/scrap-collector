import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const user = authCtx.user ?? "";
    const user_role = user != "" ? authCtx.user.role[0] : "";
    const isLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate();
    const [toggle, setToggle] = useState("close");
    const logoutHandler = async () => {
        await authCtx.logout();
        navigate("/");
    };

    const toggleOpen = () => {
        setToggle("open");
    };
    const toggleClose = () => {
        setToggle("close");
    };
    return (
        <React.Fragment>
            <nav
                id="navbarExample"
                className="navbar navbar-expand-lg fixed-top navbar-light"
                aria-label="Main navigation"
            >
                <div className="container">
                    <NavLink to="" className="navbar-brand logo-image">
                        <img src="images/logo.png" alt="alternative" />
                    </NavLink>

                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        id="navbarSideCollapse"
                        aria-label="Toggle navigation"
                        onClick={toggleOpen}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`navbar-collapse offcanvas-collapse ${toggle}`}
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
                                            className="dropdown-item nav-link menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="about-us"
                                            className="dropdown-item nav-link menu-padding"
                                            onClick={toggleClose}
                                        >
                                            About Us
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="login"
                                            className="dropdown-item nav-link menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Login
                                        </NavLink>
                                    </li>

                                    {/* <li className="nav-item">
                                        <NavLink
                                            to="register"
                                            className="dropdown-item nav-link menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Register
                                        </NavLink>
                                    </li> */}
                                </>
                            )}
                            {isLoggedIn && user_role.role_id == 1 && (
                                <>
                                    {/* <li className="nav-item">
                                        <NavLink
                                            to="admin/dashboard"
                                            className="dropdown-item"
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li> */}
                                    <li className="nav-item">
                                        <NavLink
                                            to="admin/user-pickups"
                                            className="dropdown-item menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Pickup List
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="admin/pickup-agents"
                                            className="dropdown-item menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Pickup Agents
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
                                            Welcome,
                                            {/* {authCtx.user.first_name +' '+ authCtx.user.last_name} */}
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdown01"
                                        >
                                            <li>
                                                <NavLink
                                                    to="/admin/settings"
                                                    className="dropdown-item menu-padding"
                                                    onClick={toggleClose}
                                                >
                                                    Settings
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="logout"
                                                    className="dropdown-item menu-padding"
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                            {isLoggedIn && user_role.role_id == 2 && (
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="book-a-pickup"
                                            className="dropdown-item menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Book A Pickup
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="my-pickups"
                                            className="dropdown-item menu-padding"
                                            onClick={toggleClose}
                                        >
                                            Pickup List
                                        </NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle menu-padding"
                                            href="#"
                                            id="dropdown01"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                           Settings
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdown01"
                                        >
                                            <li>
                                                <NavLink
                                                    to="profile"
                                                    className="dropdown-item menu-padding"
                                                    onClick={toggleClose}
                                                >
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    to="logout"
                                                    className="dropdown-item menu-padding"
                                                    onClick={logoutHandler}
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}

                            {isLoggedIn && user_role.role_id == 3 && (
                                <>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle  menu-padding"
                                            href="#"
                                            id="dropdown01"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {/* {authCtx.user.username} */}
                                            Welcome,
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdown01"
                                        >
                                            <li className="nav-item">
                                                <NavLink
                                                    to="logout"
                                                    className="dropdown-item menu-padding"
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
