import React from "react";
const AuthCard = (props) => {
    let branding_logo =
        "../../../app-assets/images/pages/" + props.branding_logo;

    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
                <div className="content-body">
                    <section
                        // id="auth-login"
                        className="row flexbox-container"
                    >
                        <div className="col-xl-10 col-11">
                            <div className="card bg-authentication mb-0">
                                <div className="row m-0">
                                    <div className="col-md-6 col-12 px-0">
                                        <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                            <div className="card-header pb-1">
                                                <div className="card-title">
                                                    <h4 className="text-center mb-2">
                                                        {props.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                {props.children}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                        <img
                                            className="img-fluid"
                                            src={branding_logo}
                                            alt="branding logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default AuthCard;
