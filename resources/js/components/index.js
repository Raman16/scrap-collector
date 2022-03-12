import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Layout";
import ScrollToTop from "../scrollTop";
import AuthContext from "./store/auth-context";
import ProfilePage from "./pages/User/ProfilePage";
import MyPickupPage from "./pages/User/MyPickupPage";
import BookAPickupPage from "./pages/User/BookAPickupPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AboutUsPage from "./pages/AboutusPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./Admin/DashboardPage";
import UserPickupsPage from "./Admin/UserPickupsPage";
import DeliveryAgentPage from "./Admin/DeliveryAgent";
import SettingsPage from "./Admin/SettingsPage";

function Index() {
    const authCtx = useContext(AuthContext);
    const user = authCtx.user ?? '';
    const user_role = user!=''? authCtx.user.role[0]:'';
    return (
        <div className="">
            <Layout>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="/about-us" element={<AboutUsPage />} />

                        {!authCtx.isLoggedIn && (
                            <>
                                <Route path="/login" element={<LoginPage />} />

                                <Route
                                    path="/register"
                                    element={<RegisterPage />}
                                />
                            </>
                        )}

                        {authCtx.isLoggedIn && user_role.role_id == 1 && (
                            <>
                                <Route
                                    path="/admin/dashboard"
                                    element={<DashboardPage />}
                                />
                                <Route
                                    path="/admin/user-pickups"
                                    element={<UserPickupsPage />}
                                />
                                <Route
                                    path="/admin/delivery-agent"
                                    element={<DeliveryAgentPage />}
                                />
                                <Route
                                    path="/admin/settings"
                                    element={<SettingsPage />}
                                />
                            </>
                        )}
                        {authCtx.isLoggedIn && user_role.role_id == 2 && (
                            <>
                                <Route
                                    path="/my-pickups"
                                    element={<MyPickupPage />}
                                />
                                <Route
                                    path="/book-a-pickup"
                                    element={<BookAPickupPage />}
                                />
                                <Route
                                    path="/profile"
                                    element={<ProfilePage />}
                                />
                            </>
                        )}

                        <Route
                            path="*"
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        ></Route>
                    </Routes>
                </ScrollToTop>
            </Layout>
            {/* <button onClick="topFunction()" id="myBtn">
                <img src="images/up-arrow.png" alt="alternative" />
            </button> */}
        </div>
    );
}

export default Index;
