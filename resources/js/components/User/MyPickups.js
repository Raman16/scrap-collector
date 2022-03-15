import React, { useState } from "react";
const MyPickups = (props) => {
    const { product } = props;
    const bank = product.bank;
    const address = product.address;

    const fontStyle = {
        fontSize: "14px",
    };

    const handleCancel = () => {
        props.cancelPickup(product.pick_id, 3);
    };
    const handleRetry = () => {
        props.cancelPickup(product.pick_id, 1);
    };

    const showModalHandler = () => {
        props.showModalHandler(product.pick_id);
    };

    return (
        <>
            <div className="card shadow">
                <div className="card-body">
                    <div className="table-responsive ps ps--active-x">
                        <h5>{product.material_name}</h5>

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
                                        <img
                                            className="img-fluid"
                                            src={product.image}
                                            alt="img placeholder"
                                            style={{
                                                width: "120px",
                                                borderRadius: "15px",
                                            }}
                                        />
                                    </td>
                                    <td className="pl-0">
                                        <div className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_date}
                                        </div>
                                        <br />

                                        <div className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_time}
                                        </div>
                                    </td>
                                    <td>
                                        {(product.status == "CANCELLED" ||
                                            product.status == "INPROGRESS") && (
                                            <span className="badge badge-light-danger text-bold-500 py-50">
                                                {product.status}
                                            </span>
                                        )}
                                        {(product.status == "CREATED" ||
                                            product.status == "COMPLETED") && (
                                            <span className="badge badge-light-success text-bold-500 py-50">
                                                {product.status}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-0"
                                                    style={fontStyle}
                                                >
                                                    Bank Name:{bank.bank_name},
                                                    <br />
                                                    IFSC :{bank.ifsc_code}
                                                </p>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-0"
                                                    style={fontStyle}
                                                >
                                                    {address.address},<br />
                                                    {address.city}, <br />
                                                    {address.state},
                                                    {address.country}
                                                </p>
                                            </div>
                                            {/* <i className="bx bx-cloud font-large-2"></i> */}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {product.status != "CANCELLED" && (
                                                <button
                                                    className="btn mr-1 mb-1 btn-danger btn-sm"
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                            {product.status == "CANCELLED" && (
                                                <button
                                                    className="btn mr-1 mb-1 btn-success btn-sm"
                                                    onClick={handleRetry}
                                                >
                                                    Retry
                                                </button>
                                            )}
                                            &nbsp;
                                            <button
                                                className="btn mr-1 mb-1 btn-primary btn-sm"
                                                onClick={showModalHandler}
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
        </>
    );
};
export default MyPickups;
