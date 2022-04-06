import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    const myStyle = {
        backgroundImage: "url('images/header-image1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <>
            <section id="hero">
                <div
                    id="heroCarousel"
                    data-bs-interval="5000"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <ol
                        className="carousel-indicators"
                        id="hero-carousel-indicators"
                    ></ol>

                    <div className="carousel-inner " role="listbox">
                        <div className="carousel-item active" style={myStyle}>
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Welcome to <span>E-Waste</span>
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Monitoring the quantities and flows of
                                        e-waste is essential for evaluating
                                        developments over time, and to set and
                                        assess targets towards a sustainable
                                        society and circular economy. We offer
                                        simple, practical advice that anyone can
                                        follow. Together we can make a
                                        difference today & save tomorrow.
                                    </p>
                                    <NavLink
                                        to="login"
                                        className="btn-solid-reg homepage-pickup-btn"
                                    >
                                            Book A Pickup
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Lorem Ipsum Dolor
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui
                                        aliquid. Sequi ea ut et est quaerat
                                        sequi nihil ut aliquam. Occaecati alias
                                        dolorem mollitia ut. Similique ea
                                        voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et
                                        tempore modi architecto.
                                    </p>
                                    <a
                                        href="#about"
                                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Sequi ea ut et est quaerat
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui
                                        aliquid. Sequi ea ut et est quaerat
                                        sequi nihil ut aliquam. Occaecati alias
                                        dolorem mollitia ut. Similique ea
                                        voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et
                                        tempore modi architecto.
                                    </p>
                                    <a
                                        href="#about"
                                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a
                        className="carousel-control-prev"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bi bi-chevron-left"
                            aria-hidden="true"
                        ></span>
                    </a>

                    <a
                        className="carousel-control-next"
                        href="#heroCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bi bi-chevron-right"
                            aria-hidden="true"
                        ></span>
                    </a>
                </div>
            </section>
            {/* <div id="details" className="basic-1">
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <img
                                    className="img-fluid"
                                    src="images/header-image1.jpg"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <div className="">
                                <div className="section-title">WHAT WE DO</div>
                                <h2>We are here on a Mission</h2>
                                <p>
                                    We are here to grow online Scrap market and
                                    resolve all the loopholes related to Buy &
                                    Sell of waste from the customers online
                                </p>
                                <NavLink to="login" className="btn-solid-reg">
                                    Book A Pickup
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <header id="header" className="header">
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
                                        className="btn-solid-lg"
                                    >
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
                                style={{ height: "295px" }}
                            />
                        </div>
                    </div>
                </div>
            </header> */}

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
                                    <h5 className="">Scrap Pickup</h5>
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
                                    <h5 className="">
                                        Sell Scrap and Make Money
                                    </h5>

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
                                    <h5 className="">Corporate Tie-up</h5>

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
                    <h2>We are here on a Mission</h2>

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
                            <h5>
                                WHY E-WASTE IS IMPORTANT TO PROCESSED (OR)
                                DISMANTELED IN SCIENTIFIC MANNER
                            </h5>{" "}
                            <br />
                            <h6>E-WASTE GENERATION </h6>
                            The Global E-Waste Monitor 2020 shows that consumers
                            discarded 53.6 million tonnes worth of electronics
                            in 2019 globally, up 20 percent in 5 years. India
                            generated 3.2 million tonnes of e-waste last year,
                            ranking third after China (10.1 million tonnes) and
                            the United States (6.9 million tonnes). Following
                            the current growth rate of e-waste, an ASSOCHAM-EY
                            joint report, titled ‘Electronic Waste Management in
                            India’ estimated India to generate 5 million tonnes
                            by 2021.
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
                                    src="images/ewaste2.jpg"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h6>
                                E-WASTE & ITS NEGATIVE EFFECTS ON THE
                                ENVIRONMENT
                                <br />
                            </h6>{" "}
                            <br />
                            <br />
                            Contamination in the air occurs when e-waste is
                            informally disposed by dismantling, shredding or
                            melting the materials, releasing dust particles or
                            toxins, such as dioxins, into the environment that
                            cause air pollution and damage respiratory health.
                            E-waste of little value is often burned, but burning
                            also serves a way to get valuable metal from
                            electronics, like copper. Chronic diseases and
                            cancers are at a higher risk to occur when burning
                            e-waste because it also releases fine particles,
                            which can travel thousands of miles, creating
                            numerous negative health risks to humans and
                            animals. The negative effects on air from informal
                            e-waste recycling are most dangerous for those who
                            handle this waste, but the pollution can extend
                            thousands of miles away from recycling sites
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
                                    src="images/ewaste3.jpg"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h6>THE NEGATIVE EFFECTS ON SOIL</h6>
                            <br />
                            When improper disposal of e-waste in regular
                            landfills or in places where it is dumped illegally,
                            both heavy metals and flame retardants can seep
                            directly from the e-waste into the soil, causing
                            contamination of underlying groundwater or
                            contamination of crops that may be planted near by
                            or in the area in the future. When the soil is
                            contaminated by heavy metals, the crops become
                            vulnerable to absorbing these toxins, which can
                            cause many illnesses and doesn’t allow the farmland
                            to be as productive as possible. When large
                            particles are released from burning, shredding or
                            dismantling e-waste, they quickly re-deposit to the
                            ground and contaminate the soil as well, due to
                            their size and weight.
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
                                    src="images/ewaste4.jpg"
                                    alt="alternative"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h6>THE NEGATIVE EFFECTS ON HUMANS</h6>
                            <br />
                            Electronic waste contains toxic components that are
                            dangerous to human health, such as mercury, lead,
                            cadmium, polybrominated flame retardants, barium and
                            lithium. The negative health effects of these toxins
                            on humans include brain, heart, liver, kidney and
                            skeletal system damage. It can also considerably
                            affect the nervous and reproductive systems of the
                            human body, leading to disease and birth defects.
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
                                        Fridges, freezers and other cooling
                                        equipment
                                    </li>
                                    <li>TVs, monitors and screens</li>
                                </ul>
                            </div>

                            <div className="card">
                                <ul className="list-styled">
                                    <li>
                                        Computers and telecommunications
                                        equipment
                                    </li>
                                    <li>LED bulbs</li>
                                </ul>
                            </div>

                            <div className="card">
                                <ul className="list-styled">
                                    <li>
                                        Consumer electronic devices and solar
                                        panels
                                    </li>
                                    <li>Vending machines</li>
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
                               Experts Saying
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <img
                                    className="quotes"
                                    src="images/double-quotation.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        Recycling should come only after we’ve
                                        gotten every bit of use out of a
                                        product.
                                    </p>
                                    <div className="testimonial-author">
                                        Roe Smith
                                    </div>
                                    <div className="occupation">
                                        Director, Presentop
                                    </div>
                                </div>
                                <div className="gradient-floor red-to-blue"></div>
                            </div>

                            <div className="card">
                                <img
                                    className="quotes"
                                    src="images/double-quotation.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        E-waste is the Toxic Legacy of our
                                        Digital Age
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
                                    src="images/double-quotation.png"
                                    alt="alternative"
                                />
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        Our waste electronics are polluting
                                        drinking water and harming our
                                        ecosystems.
                                    </p>
                                    <div className="testimonial-author">
                                        Bill McKenzie
                                    </div>
                                    <div className="occupation">
                                        Publisher, Presentop
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
