import { useContext, useEffect, useState } from "react";
import UserPickups from "../../Admin/Users/UserPickups";

import useAxios from "../../hooks/use-axios";
import AdminPickupsContext from "../../store/admin-pickups-context";
import Loader from "../../UI/Loader.";

import DatePicker from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import UserPickup from "../../Admin/Users/UserPickup";
import Notification from "../../UI/Notifications";

const renderInput = (props, openCalendar) => {
    return (
        <div className="input-group" onClick={openCalendar}>
            <input
                type="text"
                className="form-control"
                placeholder="Search this blog"
                {...props}
            />
            <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                    <i className="fa fa-calendar"></i>
                </button>
            </div>
        </div>
    );
};

const UserPickupsPage = () => {
    const [materialType, setMaterialType] = useState([]);
    const [bookingStatus, setBookingStatus] = useState([]);
    const [agents, setAgents] = useState([]);
    const [dt, setDt] = useState(moment());

    const [showModal, setShowModal] = useState(false);
    const [showScrapDetail, setShowScrapDetail] = useState([]);

    // const [filterValues, setFilterValues] = useState({
    //     material_type: "",
    //     status: "",
    //     agents: "",
    // });

    const adminCtx = useContext(AdminPickupsContext);
    let scrapProductsCard = "";

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getDropdownsD,
    } = useAxios();

    const {
        isLoading: isPickupsLoading,
        error: isPickupsError,
        sendRequest: getPickups,
    } = useAxios();

    useEffect(() => {
        const dropdownResponse = (data) => {
            setMaterialType(data.material_types);
            setBookingStatus(data.booking_status);
            setAgents(data.pickup_agents);
        };
        getDropdownsD(
            {
                method: "GET",
                url: "/admin/pickups/filter-dropdowns",
                data: [],
            },
            dropdownResponse
        );
    }, []);

    useEffect(() => {
        const pickUpResponse = (data) => {
            adminCtx.userPickUps(data.pickup_list);
        };
        getPickups(
            {
                method: "GET",
                url: "/admin/pickups/" + dt.format("D-M-Y"),
                data: [],
            },
            pickUpResponse
        );
    }, [dt]);

    let material_options = [],
        bookingStatus_options = [],
        agents_options = [];

    if (!isLoading) {
        material_options = materialType.map((value) => {
            return (
                <option key={value.id} value={value.id}>
                    {value.material}
                </option>
            );
        });

        bookingStatus_options = bookingStatus.map((value, index) => {
            return (
                <option key={index} value={index}>
                    {value}
                </option>
            );
        });

        agents_options = agents.map((value) => {
            return (
                <option key={value.id} value={value.id}>
                    {value.first_name + " " + value.last_name}
                </option>
            );
        });
    }

    const showModalHandler = (pickup_id) => {
        const products = adminCtx.products;

        const index = _.findIndex(products, {
            pick_id: pickup_id,
        });

        setShowScrapDetail(products[index]);

        setShowModal(true);
    };
    //console.log(showScrapDetail);
    const closeModalHandler = () => {
        setShowModal(false);
    };

    if (!isPickupsLoading) {
        if (adminCtx.products.length == 0) {
            scrapProductsCard = (
                <center>
                    <img
                    src="../../../images/empty.png"
                    className="rounded"
                    alt="group image"
                />
                </center>
            );
        } else {
            scrapProductsCard = adminCtx.products.map((product) => (
                <UserPickups
                    product={product}
                    key={product.pick_id}
                    showModalHandler={showModalHandler}
                />
            ));
        }
    }
    if (isPickupsLoading) {
        scrapProductsCard = <Loader />;
    }

    const handleDate = (val) => {
        var timestamp = Date.parse(val);

        if (isNaN(timestamp) == false) {
            setDt(val);
        }
    };

    const handleFilter = (e) => {
        // setFilterValues((prevState) => {
        //     return { ...prevState, [e.target.id]: e.target.value };
        // });
        adminCtx.searchPickup({
            [e.target.id]: e.target.value,
        });
    };

    const fontStyle = {
        fontSize: "14px",
    };

    
    return (
        <div className="basic-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-3 col-xs-12 mb-2">
                                <DatePicker
                                    renderInput={renderInput}
                                    value={dt}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    onChange={(val) => handleDate(val)}
                                    closeOnSelect={true}
                                />

                                {/* <DatePicker
                                    inputProps={{
                                        style: { width: 250 },
                                    }}
                                    value={dt}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    onChange={(val) => handleDate(val)}
                                    closeOnSelect={true}
                                /> */}
                                <input
                                    id="pickup_date"
                                    name="pickup_date"
                                    type="hidden"
                                    placeholder=""
                                    value={dt.format("D-M-Y")}
                                />
                            </div>
                            <div className="col-sm-3 col-xs-12 mb-2">
                                <select
                                    id="material_type"
                                    label="Material Type"
                                    name="material_type"
                                    placeholder="--select material--"
                                    className="form-control shadow form-select"
                                    onChange={handleFilter}
                                >
                                    
                                    <option value={-1}>
                                        All Materials
                                    </option>
                                    {material_options}
                                </select>
                            </div>
                            <div className="col-sm-3 col-xs-12 mb-2">
                                <select
                                    id="status"
                                    label="Pickup Status"
                                    name="status"
                                    placeholder="--select status--"
                                    className="form-control shadow form-select"
                                    onChange={handleFilter}
                                >
                                    <option value={-1}>
                                        All Status
                                    </option>
                                    {bookingStatus_options}
                                </select>
                            </div>
                            <div className="col-sm-3 col-xs-12 mb-2">
                                <select
                                    id="agents"
                                    label="Agents"
                                    name="agents"
                                    placeholder="--select agents--"
                                    className="form-control shadow form-select"
                                    onChange={handleFilter}
                                >
                                    <option value={-1}>
                                        All Agents
                                    </option>
                                    {agents_options}
                                </select>
                            </div>
                        </div>
                        <div style={{marginTop:"40px"}}></div>
                        {scrapProductsCard}
                        {showModal && (
                            <>
                                <UserPickup
                                    closeModal={closeModalHandler}
                                    product={showScrapDetail}
                                    bookingStatus={bookingStatus}
                                    agents={agents}
                                    modalShow={showModal}
                                />
                                <Notification />
                            </>
                        )}
                        {/* <Pagination total={1} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserPickupsPage;
