const DashboardPage = () => {
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card marketing-campaigns shadow">
                            <div className="card-body pb-0">
                                <h5>Latest Pickups</h5>

                                <div className="table-responsive ps ps--active-x">
                                    <table
                                        id="table-marketing-campaigns"
                                        className="table table-borderless table-marketing-campaigns mb-0 shadow"
                                    >
                                        <thead className="">
                                            <tr>
                                                <th>User</th>
                                                <th>Material</th>
                                                <th>Pickup Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-1 line-ellipsis">
                                                    Aman
                                                </td>
                                                <td className="py-1">
                                                    <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                                    <span>Furniture</span>
                                                </td>
                                                <td className="py-1">
                                                    12-08-2022
                                                </td>
                                                <td className="text-success py-1">
                                                    <span className="badge badge-light-success text-bold-500 py-50">
                                                        Completed
                                                    </span>{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 line-ellipsis">
                                                    Leela
                                                </td>
                                                <td className="py-1">
                                                    <i className="bx bx-trending-down text-danger align-middle mr-50"></i>
                                                    <span>Washers & Dyers</span>
                                                </td>
                                                <td className="py-1">
                                                    22-08-2022
                                                </td>
                                                <td className="text-success py-1">
                                                    <span className="badge badge-light-success text-bold-500 py-50">
                                                        Completed
                                                    </span>{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 line-ellipsis">
                                                    William
                                                </td>
                                                <td className="py-1">
                                                    <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                                    <span>Farm Equipments</span>
                                                </td>
                                                <td className="py-1">
                                                    11-04-22
                                                </td>
                                                <td className="text-danger py-1">
                                                    <span className="badge badge-light-danger text-bold-500 py-50">
                                                        Cancelled
                                                    </span>{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 line-ellipsis">
                                                    Kumaran
                                                </td>
                                                <td className="py-1">
                                                    <i className="bx bx-trending-up text-success align-middle mr-50"></i>
                                                    <span>Scrap Tyres</span>
                                                </td>
                                                <td className="py-1">
                                                    18-09-200
                                                </td>
                                                <td className="text-success py-1">
                                                    <span className="badge badge-light-warning text-bold-500 py-50">
                                                        CREATED
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    <div className="card-body py-1 shadow">
                                        <div>
                                            <i
                                                className="fa fa-suitcase"
                                                aria-hidden="true"
                                                style={{
                                                    color: "#39DA8A",
                                                    fontSize: "40px",
                                                }}
                                            ></i>
                                        </div>
                                        <div className="text-muted line-ellipsis">
                                            Active Pickups
                                        </div>
                                        <h3 className="mb-0">2.6k</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card text-center shadow ">
                                    <div className="card-body py-1">
                                        <div>
                                            <i
                                                className="fa fa-suitcase"
                                                aria-hidden="true"
                                                style={{
                                                    color: "#FF5B5C",
                                                    fontSize: "40px",
                                                }}
                                            ></i>
                                        </div>
                                        <div className="text-muted line-ellipsis">
                                            Closed Pickups
                                        </div>
                                        <h3 className="mb-0">1.2k</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-8"></div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card text-center">
                                    <div className="card-body py-1 shadow">
                                        <div>
                                            <i
                                                className="fa fa-user-o"
                                                aria-hidden="true"
                                                style={{
                                                    color: "#FDAC41",
                                                    fontSize: "40px",
                                                }}
                                            ></i>
                                        </div>
                                        <div className="text-muted line-ellipsis">
                                            Uses
                                        </div>
                                        <h3 className="mb-0">2.6k</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card text-center shadow">
                                    <div className="card-body py-1">
                                        <div>
                                            <i
                                                className="fa fa-user-o"
                                                aria-hidden="true"
                                                style={{
                                                    color: "#5A8DEE",
                                                    fontSize: "40px",
                                                }}
                                            ></i>
                                        </div>
                                        <div className="text-muted line-ellipsis">
                                            Delivery Agents
                                        </div>
                                        <h3 className="mb-0">60</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="overlay-image-card">
                            <div className="card widget-overlay shadow">
                                <div className="card widget-overlay-content mb-0">
                                    <div className="text-center">
                                        <button
                                            className="btn btn-lg  shadow inclusive-btn"
                                            type="button"
                                        >
                                            Most Picked Scrap(Current Month)
                                        </button>
                                    </div>
                                    <div className="card-body px-0 pb-0">
                                        <div className="table-responsive ps ps--active-x">
                                            <table
                                                id="table-marketing-campaigns"
                                                className="table table-borderless table-marketing-campaigns mb-0 shadow"
                                            >
                                                <thead className="">
                                                    <tr>
                                                        <th>Material</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="py-1 line-ellipsis">
                                                            Furniture
                                                        </td>
                                                        <td className="py-1">
                                                            15
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1 line-ellipsis">
                                                            Tyres
                                                        </td>
                                                        <td className="py-1">
                                                            12
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-1 line-ellipsis">
                                                            Washing & Dyres
                                                        </td>
                                                        
                                                        <td className="py-1">
                                                            8
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="overlay-image-card">
                            <div className="card widget-overlay shadow">
                                <div className="card widget-overlay-content mb-0">
                                    <div className="text-center">
                                        <button
                                            className="btn btn-lg  shadow inclusive-btn"
                                            type="button"
                                        >
                                            Monthly Pickups
                                        </button>
                                    </div>
                                    <div className="card-body px-0 pb-0">
                                        <ul
                                            className="nav nav-pills border-bottom justify-content-center mb-1"
                                            role="tablist"
                                        >
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="january-tab"
                                                    data-toggle="tab"
                                                    href="#january"
                                                    aria-controls="january"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    January
                                                </a>
                                            </li>
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="february-tab"
                                                    data-toggle="tab"
                                                    href="#february"
                                                    aria-controls="february"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    February
                                                </a>
                                            </li>
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="march-tab"
                                                    data-toggle="tab"
                                                    href="#march"
                                                    aria-controls="march"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    March
                                                </a>
                                            </li>
                                            <li className="nav-item mr-0">
                                                <a
                                                    className="nav-link active"
                                                    id="april-tab"
                                                    data-toggle="tab"
                                                    href="#april"
                                                    aria-controls="april"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    April
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content pl-0">
                                            <div
                                                className="tab-pane"
                                                id="january"
                                                aria-labelledby="january-tab"
                                                role="tabpanel"
                                            ></div>
                                            <div
                                                className="tab-pane pl-0"
                                                id="february"
                                                aria-labelledby="february-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Template
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Team</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Stack
                                                                    </span>
                                                                    <small>
                                                                        Stack By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        New
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Elicia Rieske"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $24,520
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Angular
                                                                    </span>
                                                                    <small>
                                                                        Angular
                                                                        By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-warning">
                                                                        Cancel
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $18,252
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div
                                                        className="ps__rail-x"
                                                        style="width: 321px; left: 0px; bottom: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex="0"
                                                            style="left: 0px; width: 200px;"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style="top: 0px; right: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex="0"
                                                            style="top: 0px; height: 0px;"
                                                        ></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane pl-0"
                                                id="march"
                                                aria-labelledby="march-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Template
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Team</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Robust
                                                                    </span>
                                                                    <small>
                                                                        Robust
                                                                        HTML By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-success">
                                                                        Updated
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Elicia Rieske"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-22.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Darcey Nooner"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-23.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Darcey Nooner"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-13.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $12,623
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Modern
                                                                    </span>
                                                                    <small>
                                                                        Modern
                                                                        By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-danger">
                                                                        Pending
                                                                    </div>
                                                                </td>
                                                                <td>;;l</td>
                                                                <td className="text-primary">
                                                                    $23,562
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div
                                                        className="ps__rail-x"
                                                        style="width: 321px; left: 0px; bottom: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex="0"
                                                            style="left: 0px; width: 181px;"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style="top: 0px; right: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex="0"
                                                            style="top: 0px; height: 0px;"
                                                        ></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane pl-0 active"
                                                id="april"
                                                aria-labelledby="april-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Material
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Furniture
                                                                    </span>
                                                                    <small></small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        Completed
                                                                    </div>
                                                                </td>
                                                                <td className="text-primary">
                                                                    120
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Tyres
                                                                    </span>
                                                                    <small></small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        Completed
                                                                    </div>
                                                                </td>
                                                                <td className="text-primary">
                                                                    140
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="overlay-image-card shadow">
                            <div className="card widget-overlay">
                                <div className="card widget-overlay-content mb-0">
                                    <div className="text-center">
                                        <button
                                            className="btn btn-lg  shadow inclusive-btn"
                                            type="button"
                                        >
                                            Monthly Pickups
                                        </button>
                                    </div>
                                    <div className="card-body px-0 pb-0">
                                        <ul
                                            className="nav nav-pills border-bottom justify-content-center mb-1"
                                            role="tablist"
                                        >
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="january-tab"
                                                    data-toggle="tab"
                                                    href="#january"
                                                    aria-controls="january"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    January
                                                </a>
                                            </li>
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="february-tab"
                                                    data-toggle="tab"
                                                    href="#february"
                                                    aria-controls="february"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    February
                                                </a>
                                            </li>
                                            <li className="nav-item mr-1">
                                                <a
                                                    className="nav-link"
                                                    id="march-tab"
                                                    data-toggle="tab"
                                                    href="#march"
                                                    aria-controls="march"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    March
                                                </a>
                                            </li>
                                            <li className="nav-item mr-0">
                                                <a
                                                    className="nav-link active"
                                                    id="april-tab"
                                                    data-toggle="tab"
                                                    href="#april"
                                                    aria-controls="april"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    April
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content pl-0">
                                            <div
                                                className="tab-pane"
                                                id="january"
                                                aria-labelledby="january-tab"
                                                role="tabpanel"
                                            ></div>
                                            <div
                                                className="tab-pane pl-0"
                                                id="february"
                                                aria-labelledby="february-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Template
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Team</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Stack
                                                                    </span>
                                                                    <small>
                                                                        Stack By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        New
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-9.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Elicia Rieske"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-2.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $24,520
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Angular
                                                                    </span>
                                                                    <small>
                                                                        Angular
                                                                        By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-warning">
                                                                        Cancel
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-1.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $18,252
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div
                                                        className="ps__rail-x"
                                                        style="width: 321px; left: 0px; bottom: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex="0"
                                                            style="left: 0px; width: 200px;"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style="top: 0px; right: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex="0"
                                                            style="top: 0px; height: 0px;"
                                                        ></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane pl-0"
                                                id="march"
                                                aria-labelledby="march-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Template
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Team</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Robust
                                                                    </span>
                                                                    <small>
                                                                        Robust
                                                                        HTML By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-success">
                                                                        Updated
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Lai Lewandowski"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-7.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Elicia Rieske"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-22.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Darcey Nooner"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-23.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                        <li
                                                                            data-toggle="tooltip"
                                                                            data-popup="tooltip-custom"
                                                                            data-placement="bottom"
                                                                            data-original-title="Darcey Nooner"
                                                                            className="avatar pull-up"
                                                                        >
                                                                            <img
                                                                                className="media-object rounded-circle"
                                                                                src="../../../app-assets/images/portrait/small/avatar-s-13.jpg"
                                                                                alt="Avatar"
                                                                                height="30"
                                                                                width="30"
                                                                            />
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className="text-primary">
                                                                    $12,623
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Modern
                                                                    </span>
                                                                    <small>
                                                                        Modern
                                                                        By
                                                                        PIXINVENT
                                                                    </small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-danger">
                                                                        Pending
                                                                    </div>
                                                                </td>
                                                                <td>;;l</td>
                                                                <td className="text-primary">
                                                                    $23,562
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div
                                                        className="ps__rail-x"
                                                        style="width: 321px; left: 0px; bottom: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex="0"
                                                            style="left: 0px; width: 181px;"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style="top: 0px; right: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex="0"
                                                            style="top: 0px; height: 0px;"
                                                        ></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane pl-0 active"
                                                id="april"
                                                aria-labelledby="april-tab"
                                                role="tabpanel"
                                            >
                                                <div className="table-responsive ps ps--active-x">
                                                    <table className="table table-borderless">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th>
                                                                    Material
                                                                </th>
                                                                <th>Status</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Furniture
                                                                    </span>
                                                                    <small></small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        Completed
                                                                    </div>
                                                                </td>
                                                                <td className="text-primary">
                                                                    120
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="pr-0">
                                                                    <span className="text-bold-500 d-block">
                                                                        Tyres
                                                                    </span>
                                                                    <small></small>
                                                                </td>
                                                                <td>
                                                                    <div className="badge badge-pill badge-light-primary">
                                                                        Completed
                                                                    </div>
                                                                </td>
                                                                <td className="text-primary">
                                                                    140
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    {/* <div
                                                        className="ps__rail-x"
                                                        style="width: 321px; left: 0px; bottom: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-x"
                                                            tabIndex="0"
                                                            style="left: 0px; width: 182px;"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        className="ps__rail-y"
                                                        style="top: 0px; right: 0px;"
                                                    >
                                                        <div
                                                            className="ps__thumb-y"
                                                            tabIndex="0"
                                                            style="top: 0px; height: 0px;"
                                                        ></div>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardPage;
