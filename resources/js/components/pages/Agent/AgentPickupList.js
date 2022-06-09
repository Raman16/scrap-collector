const AgentPickupList = () => {
    return (
        <div className="basic-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="content-body">
                            <section>
                                <div className="row flexbox-container">
                                    <div className="col-md-6 col-12 text-center p-3">
                                        <h1 className="error-title mb-2">
                                            We are launching soon
                                        </h1>
                                        <p className="mb-1">
                                            
                                        </p>
                                        <div
                                            id="clockFlat"
                                            className="card-text text-center coming-soon pt-2 d-flex justify-content-center mb-2"
                                        ></div>
                                    </div>
                                    <div className="col-md-6 d-lg-block d-none p-2">
                                        <img
                                            className="img-fluid cs-effect cs-effect-bounce"
                                            src="../../../app-assets/images/pages/comingsoon.png"
                                            alt="coming soon"
                                            width="650"
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentPickupList;
