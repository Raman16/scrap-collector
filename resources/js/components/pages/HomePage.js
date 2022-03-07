import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <>
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h1 className="h1-large">
                                    We are here on a Mission
                                </h1>
                                <p className="p-large">
                                    We are here to grow online Scrap market and
                                    resolve all the loopholes related to Buy &
                                    Sell of waste from the customers online
                                </p>
                                <li className="nav-item">
                                        <NavLink
                                            to="login"
                                            className="btn-solid-lg"                                        >
                                            Book A Pickup
                                        </NavLink>
                                    </li>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img
                                className="img-fluid"
                                src="images/header-image1.jpg"
                                alt="alternative"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div id="services" className="cards-1 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Explore our services</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img
                                    className="img-fluid"
                                    src="images/scrap-pickup.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Scrap Pickup</h5>
                                    <p>
                                        Our vendor will come to you on the
                                        scheduled time to pick up your scrap in
                                        exchange of money.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    className="img-fluid"
                                    src="images/scrap-pickup2.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Sell Scrap and Make Money</h5>
                                    
                                    <p>
                                        Dont Trash the scrap, Get Paid for the
                                        Scrap Materials.
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    className="img-fluid"
                                    src="images/scrap-pickup3.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Corporate Tie-up
                                        </h5>
                                    
                                    <p>
                                        We have customized panel for corporates
                                        to systematically get rid of the scrap
                                        and get certificates of recycling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="details" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/Electronic-Scrap.jpg"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h2>What we do?</h2>
                            <div className="section-title">
                                The right influencer can boost your conversion
                            </div>

                            <p>
                                Our vendors & customers are surprised with the
                                money worth outcomes we integrating our
                                customized approach to master the world of
                                Kabadiwala some unique attitude for revolving
                                waste into a mutual benefiting cash cow.
                                customers are satisfied with curiosity to come
                                back again.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id="features" className="accordion-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2 className="h2-heading">
                                Online service features
                            </h2>
                            <p className="p-heading">
                                We are at your door service, pick up your scrap
                                in exchange of money
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <div className="accordion-icon">
                                        <span className="fas fa-tv"></span>
                                    </div>
                                    <div
                                        className="accordion-header"
                                        id="headingOne"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Login into our website or Mobile App
                                        </button>
                                    </div>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Fill up the scrap form with details
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-icon blue">
                                        <span className="fas fa-microphone"></span>
                                    </div>
                                    <div
                                        className="accordion-header"
                                        id="headingTwo"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            We Evaluate then product with market
                                        </button>
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body"></div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-icon purple">
                                        <span className="fas fa-video"></span>
                                    </div>
                                    <div
                                        className="accordion-header"
                                        id="headingThree"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            We send you the Pickup Delivery and
                                            receive the scrap.
                                        </button>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body"></div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <div className="accordion-icon orange">
                                        <span className="fas fa-tools"></span>
                                    </div>
                                    <div
                                        className="accordion-header"
                                        id="headingFour"
                                    >
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            We Credit the amount to the scrap
                                            received.{" "}
                                        </button>
                                    </div>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/details-1.png"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="ex-cards-1 pt-3 pb-3 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>What We Accept</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <ul className="list-styled">
                                    <li>
                                        Furniture, Carpeting & Flooring
                                    </li>
                                    <li>
                                        Fluorescent Lightbulbs
                                    </li>
                                    <li>
                                        Construction Debris
                                    </li>
                                    <li>
                                        Junk Cars & Equipment
                                    </li>
                                    <li>
                                        Scrap Tires of All Sizes
                                    </li>
                                    <li>
                                        
                                            Scrap Metal, Wire & Aluminium Cans
                                        
                                    </li>
                                    <li>
                                        Industrial & Factory Equipment
                                    </li>
                                </ul>
                            </div>

                            <div className="card">
                                <ul className="list-styled">
                                    <li>
                                        Mattresses & Box Springs
                                    </li>
                                    <li>
                                        Washers & Dryers
                                    </li>
                                    <li>
                                        Microwaves & Kitchenware
                                    </li>
                                    <li>
                                        Electronics, TV's & Monitors
                                    </li>
                                    <li>
                                        Household Hazardous Waste
                                    </li>
                                    <li>
                                        Drywall & Roof Shingles
                                    </li>
                                    <li>
                                        Storm Debris
                                    </li>
                                </ul>
                            </div>

                            <div className="card">
                                <ul className="list-styled">
                                    <li>
                                        Roof Shingles
                                    </li>
                                    <li>
                                        Fencing
                                    </li>
                                    <li>
                                        Farm Equipment
                                    </li>
                                    <li>
                                        Demolition Debris
                                    </li>
                                    <li>
                                        Paints, Solvents & Chemicals
                                    </li>
                                    <li>
                                        and many more....
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-2 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">
                                Customer testimonials
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img
                                    className="quotes"
                                    src="images/quotes.svg"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        Suspendisse vitae enim arcu. Aliqu
                                        convallis risus a felis blandit, at
                                        mollis nisi bibendum aliquam noto ricos
                                    </p>
                                    <div className="testimonial-author">
                                        Roe Smith
                                    </div>
                                    <div className="occupation">
                                        General Manager, Presentop
                                    </div>
                                </div>
                                <div className="gradient-floor red-to-blue"></div>
                            </div>

                            <div className="card">
                                <img
                                    className="quotes"
                                    src="images/quotes.svg"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        Suspendisse vitae enim arcu. Aliqu
                                        convallis risus a felis blandit, at
                                        mollis nisi bibendum aliquam noto ricos
                                    </p>
                                    <div className="testimonial-author">
                                        Sam Bloom
                                    </div>
                                    <div className="occupation">
                                        General Manager, Presentop
                                    </div>
                                </div>
                                <div className="gradient-floor blue-to-purple"></div>
                            </div>

                            <div className="card">
                                <img
                                    className="quotes"
                                    src="images/quotes.svg"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        Suspendisse vitae enim arcu. Aliqu
                                        convallis risus a felis blandit, at
                                        mollis nisi bibendum aliquam noto ricos
                                    </p>
                                    <div className="testimonial-author">
                                        Bill McKenzie
                                    </div>
                                    <div className="occupation">
                                        General Manager, Presentop
                                    </div>
                                </div>
                                <div className="gradient-floor purple-to-green"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
