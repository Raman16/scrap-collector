const UserPickupsPage = () => {
    const fontStyle = {
        fontSize: "14px",
    };
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <select
                                            id="material_type_id"
                                            label="Material Type"
                                            name="material_type_id"
                                            placeholder="--select material--"
                                            className="form-control"
                                        >
                                            <option>
                                                --Seach By Material--
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-8"></div>
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive ps ps--active-x">
                                    <h5>Furniture</h5>

                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Product Image
                                                    </strong>
                                                </td>
                                                <td className="pb-0 pl-0">
                                                    <strong>
                                                        Pickup Date:
                                                    </strong>
                                                </td>
                                                <td className="pb-0 pl-0">
                                                    <strong>Status</strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Bank Details
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Pickup Location
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Delivery Agent
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>Action</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <img
                                                        className="img-fluid"
                                                        alt="img placeholder"
                                                        src="../../../app-assets/images/profile/user-uploads/sc.jpg"
                                                        style={{
                                                            width: "120px",
                                                            borderRadius:
                                                                "15px",
                                                        }}
                                                    />
                                                </td>
                                                <td className="pl-0">
                                                    <div className="badge badge-light-success text-bold-500 py-50">
                                                        06 May 2019
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge badge-light-success text-bold-500 py-50">
                                                        Completed
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p
                                                                className="mb-0"
                                                                style={
                                                                    fontStyle
                                                                }
                                                            >
                                                                Bank Name:ICICI
                                                                <br />
                                                                IFSC :ICIC00933
                                                                <br/>
                                                                Contact No:9886426568
                                                            </p>
                                                        </div>
                                                        <i className="bx bx-cloud font-large-2"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0">
                                                                New Delhi
                                                            </p>
                                                        </div>
                                                        {/* <i className="bx bx-cloud font-large-2"></i> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        Jeevan
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <button className="btn mr-1 mb-1 btn-success btn-sm">
                                                            Accept
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
                                    <h5>Tyres</h5>

                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Product Image
                                                    </strong>
                                                </td>
                                                <td className="pb-0 pl-0">
                                                    <strong>
                                                        Pickup Date:
                                                    </strong>
                                                </td>
                                                <td className="pb-0 pl-0">
                                                    <strong>Status</strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Bank Details
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Pickup Location
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>
                                                        Delivery Agent
                                                    </strong>
                                                </td>
                                                <td className="pb-0">
                                                    <strong>Action</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pl-0">
                                                    <img
                                                        className="img-fluid"
                                                        alt="img placeholder"
                                                        src="../../../app-assets/images/profile/user-uploads/sc.jpg"
                                                        style={{
                                                            width: "120px",
                                                            borderRadius:
                                                                "15px",
                                                        }}
                                                    />
                                                </td>
                                                <td className="pl-0">
                                                    <div className="badge badge-light-success text-bold-500 py-50">
                                                        06 May 2019
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge badge-light-success text-bold-500 py-50">
                                                        Completed
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p
                                                                className="mb-0"
                                                                style={
                                                                    fontStyle
                                                                }
                                                            >
                                                                Bank Name:ICICI
                                                                <br />
                                                                IFSC :ICIC00933<br/>
                                                                Contact No:9886426568
                                                            </p>
                                                        </div>
                                                        <i className="bx bx-cloud font-large-2"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <p className="mb-0">
                                                                Hyderabad
                                                            </p>
                                                        </div>
                                                        {/* <i className="bx bx-cloud font-large-2"></i> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        John
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <button className="btn mr-1 mb-1 btn-danger btn-sm">
                                                            Reject
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
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserPickupsPage;
