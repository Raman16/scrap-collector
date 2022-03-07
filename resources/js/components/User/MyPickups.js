import React from "react";
const MyPickups = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive ps ps--active-x">
                        <h5>Industrial & Factory Equipment</h5>

                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Product Image</strong>
                                    </td>
                                    <td className="pb-0 pl-0">
                                        <strong>Pickup Date:</strong>
                                    </td>
                                    <td className="pb-0 pl-0">
                                        <strong>Status</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Bank Details</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Pickup Location</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Action</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-0">
                                        <div className="badge badge-light-primary text-bold-500 py-50">
                                            <div className="avatar bg-rgba-primary p-25 mr-2 ml-0">
                                                <img
                                                    className="img-fluid"
                                                    src="../../../app-assets/images/profile/user-uploads/social-2.jpg"
                                                    alt="img placeholder"
                                                    height="70"
                                                    width="70"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-0">
                                        <div className="badge badge-light-danger text-bold-500 py-50">
                                            06 May 2019
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-light-success">
                                            Completed
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0">
                                                    Bank Name:ICIC
                                                </p>
                                                <span>IFSC:ICIC0000</span>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0">
                                                    Sicklerville, New Jersey
                                                </p>
                                                <span>Fri 13 May, 2019</span>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary glow"
                                            >
                                                Cancel
                                            </button>
                                            &nbsp;
                                            <button
                                                type="button"
                                                className="btn btn-primary glow"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="margin-8"></div>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive ps ps--active-x">
                        <h5>Industrial & Factory Equipment</h5>

                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Product Image</strong>
                                    </td>
                                    <td className="pb-0 pl-0">
                                        <strong>Pickup Date:</strong>
                                    </td>
                                    <td className="pb-0 pl-0">
                                        <strong>Status</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Bank Details</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Pickup Location</strong>
                                    </td>
                                    <td className="pb-0">
                                        <strong>Action</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-0">
                                        <div className="badge badge-light-primary text-bold-500 py-50">
                                            <div className="avatar bg-rgba-primary p-25 mr-2 ml-0">
                                                <img
                                                    className="img-fluid"
                                                    src="../../../app-assets/images/profile/user-uploads/social-2.jpg"
                                                    alt="img placeholder"
                                                    height="70"
                                                    width="70"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="pl-0">
                                        <div className="badge badge-light-danger text-bold-500 py-50">
                                            06 May 2019
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-light-success">
                                            Completed
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0">
                                                    Bank Name:ICIC
                                                </p>
                                                <span>IFSC:ICIC0000</span>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0">
                                                    Sicklerville, New Jersey
                                                </p>
                                                <span>Fri 13 May, 2019</span>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary glow"
                                            >
                                                Cancel
                                            </button>
                                            &nbsp;
                                            <button
                                                type="button"
                                                className="btn btn-primary glow"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MyPickups;
