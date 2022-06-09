import React, { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const UserPickups = (props) => {
    const { product } = props;
    const bank = product.bank;
    const address = product.address;
    const user = product.user;
    const agent = product.agent;
    const fontStyle = {
        fontSize: "13px",
    };

    // const handleCancel = () => {
    //     props.cancelPickup(product.pick_id, 3);
    // };
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
                            <thead>
                                <tr>
                                    <th>
                                        <strong>Product Image</strong>
                                    </th>
                                    <th className="pb-0 pl-0">
                                        <strong>Pickup Date:</strong>
                                    </th>
                                    <th className="pb-0 pl-0">
                                        <strong>User</strong>
                                    </th>
                                    {/* <th className="pb-0">
                                        <strong>Bank Details</strong>
                                    </th> */}
                                    <th className="pb-0">
                                        <strong>Pickup Location</strong>
                                    </th>
                                    <th className="pb-0">
                                        <strong>Pickup Agent</strong>
                                    </th>
                                    <th className="pb-0">
                                        <strong>Status</strong>
                                    </th>
                                    <th className="pb-0">
                                        <strong>Action</strong>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pl-0">
                                        <Zoom>
                                            <img
                                                alt="No Image"
                                                src={
                                                    product.image != ""
                                                        ? product.image
                                                        : "images/noImage.png"
                                                }
                                                style={{
                                                    width: "120px",
                                                }}
                                            />
                                        </Zoom>

                                    </td>
                                    <td className="pl-0">
                                        <span className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_date}
                                        </span>
                                        <br></br>
                                        <span className="badge badge-light-success text-bold-500 py-50">
                                            {product.pickup_time}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="mb-0" style={fontStyle}>
                                            {user.first_name !=null && `${user.first_name} ${user.last_name}, `}
                                            
                                            <br />
                                            {user.phone_number}
                                            <br />
                                        </p>
                                    </td>
                                    {/* <td>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p
                                                    className="mb-0"
                                                    style={fontStyle}
                                                >
                                                    Acc.Name:
                                                    {bank.account_name},
                                                    <br />
                                                    Acc.No#:{bank.account_no}
                                                    <br />
                                                    Bank Name:{bank.bank_name},
                                                    <br />
                                                    IFSC :{bank.ifsc_code}
                                                </p>
                                            </div>
                                            <i className="bx bx-cloud font-large-2"></i>
                                        </div>
                                    </td> */}
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
                                                    {address.country}.
                                                </p>
                                            </div>
                                            {/* <i className="bx bx-cloud font-large-2"></i> */}
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0" style={fontStyle}>
                                            {agent &&
                                                agent.first_name +
                                                    " " +
                                                    agent.last_name}
                                            <br></br>
                                            {agent && agent.phone_number}
                                        </p>
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
                                        <div>
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
export default UserPickups;
