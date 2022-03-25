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
    // const handleRetry = () => {
    //     props.cancelPickup(product.pick_id, 1);
    // };

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
                                        <strong>PickUp Agent</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-0">
                                        <div className="thumbnail-container-lg">
                                            <img
                                                className="img-fluid"
                                                src={
                                                    product.image != ""
                                                        ? product.image
                                                        : "images/noImage.png"
                                                }
                                                alt="img placeholder"
                                            />
                                        </div>
                                    </td>
                                    <td className="pl-0">
                                        <div className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_date}
                                        </div>
                                        <br />

                                        <div className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_time}
                                        </div>

                                        {/* <br />
                                        <strong> Status</strong>
                                        <br></br> */}
                                    </td>
                                    <td>
                                        {(product.status == "Cancelled" ||
                                            product.status == "InProgress") && (
                                            <span className="badge badge-light-danger text-bold-500 py-50">
                                                {product.status}
                                            </span>
                                        )}
                                        {(product.status == "Created" ||
                                            product.status == "Completed" ||
                                            product.status == "Accepted") && (
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
                                                    {bank.bank_name},
                                                    <br />
                                                    {bank.account_name}, <br />
                                                    {bank.account_no}, <br />
                                                    {bank.ifsc_code}
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
                                        <p className="mb-0" style={fontStyle}>
                                            {product.agent &&
                                                product.agent.first_name +
                                                    " " +
                                                    product.agent.last_name +
                                                    ","}
                                            <br></br>

                                            {product.agent &&
                                                product.agent.phone_number}
                                        </p>

                                        {/* <strong>Action:</strong> */}
                                        <br />
                                        <div>
                                            {product.status != "Cancelled" ? (
                                                <button
                                                    className="btn mr-1 mb-1 btn-danger btn-sm"
                                                    onClick={handleCancel}
                                                >
                                                    Cancel
                                                </button>
                                            ) : (
                                                <button className="btn mr-1 mb-1 btn-danger btn-sm disabled">
                                                    Cancel
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
