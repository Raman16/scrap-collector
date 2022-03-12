const SettingsPage = () => {
    return (
        <div className="basic-1">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul
                                className="nav nav-tabs nav-fill"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="home-tab-fill"
                                        data-toggle="tab"
                                        href="#home-fill"
                                        role="tab"
                                        aria-controls="home-fill"
                                        aria-selected="true"
                                    >
                                        Add Material
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="profile-tab-fill"
                                        data-toggle="tab"
                                        href="#profile-fill"
                                        role="tab"
                                        aria-controls="profile-fill"
                                        aria-selected="false"
                                    >
                                        Material List
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="profile-tab-fill"
                                        data-toggle="tab"
                                        href="#profile-fill"
                                        role="tab"
                                        aria-controls="profile-fill"
                                        aria-selected="false"
                                    >
                                        Add States
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="profile-tab-fill"
                                        data-toggle="tab"
                                        href="#profile-fill"
                                        role="tab"
                                        aria-controls="profile-fill"
                                        aria-selected="false"
                                    >
                                         State List
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                        <a className="nav-link" id="messages-tab-fill" data-toggle="tab" href="#messages-fill" role="tab" aria-controls="messages-fill" aria-selected="false">
                                            Messages
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="settings-tab-fill" data-toggle="tab" href="#settings-fill" role="tab" aria-controls="settings-fill" aria-selected="false">
                                            Settings
                                        </a>
                                    </li> */}
                            </ul>

                            <div className="tab-content pt-1">
                                <div
                                    className="tab-pane active"
                                    id="home-fill"
                                    role="tabpanel"
                                    aria-labelledby="home-tab-fill"
                                >
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>First Name</label>
                                                <input type="text"></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Last Name</label>
                                                <input type="text"></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Phone Number</label>
                                                <input type="text"></input>
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                </div>
                                <div
                                    className="tab-pane"
                                    id="profile-fill"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab-fill"
                                ></div>
                            </div>
                        </div>
                    </div>{" "}
                </div>
            </div>
        </div>
    </div>
    );
};
export default SettingsPage;
