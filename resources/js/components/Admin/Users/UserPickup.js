import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { BOOKING_STATUS } from "../../config/constant";
import useAxios from "../../hooks/use-axios";
import AdminPickupsContext from "../../store/admin-pickups-context";
// import Modal from "../../UI/Modal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const UserPickup = (props) => {
    const [selectedStatus, setSelectedStatus] = useState();
    const [selectedAgent, setSelectedAgent] = useState();

    const adminCtx = useContext(AdminPickupsContext);

    const {
        isLoading: isStatusChange,
        error: isStatusError,
        sendRequest: changeStatus,
    } = useAxios();

    const {
        isLoading: isUpdating,
        error: isUpdateError,
        sendRequest: updatePickUpDetails,
    } = useAxios();

    const { product, bookingStatus, agents } = props;
    let bookingStatus_options,
        agents_options = [];

    // const selectedStatus = BOOKING_STATUS.findIndex(
    //     (value) => value === product.status
    // );
    useEffect(() => {
        const selectedStatus = BOOKING_STATUS.findIndex(
            (value) => value === product.status
        );
        setSelectedStatus(selectedStatus);
        const agent_id = product.agent != null ? product.agent.id : -1;
        setSelectedAgent(agent_id);
    }, []);

    const closeModalHandler = () => {
        props.closeModal();
    };
    const cardBodyStyle = {
        lineHeight: "25px",
        fontSize: "14px",
    };

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

    const statusResponse = (data) => {
        toast(data.message);
        adminCtx.updatePickUp(data.pickup);
    };

    const handleStatusChange = (e) => {
        let confim = confirm("Please confirm to change the status");

        setSelectedStatus(e.target.value);
        if (confim) {
            changePickupStatus(e.target.value);
        }
    };

    const changePickupStatus = (status) => {
        changeStatus(
            {
                method: "PUT",
                url: "/admin/pickups/change-status",
                data: {
                    pickup_id: product.pick_id,
                    status: status,
                },
            },
            statusResponse
        );
    };

    const pickUpDetailsResponse = (data) => {
        toast(data.message);
        changePickupStatus(2); //InProgress
        setSelectedStatus(2);
        adminCtx.updatePickUp(data.pickup);
    };

    const handlePickupAgent = (e) => {
        setSelectedAgent(e.target.value);
        updatePickUpDetails(
            {
                method: "PUT",
                url: "/admin/pickups/update",
                data: {
                    pickup_id: product.pick_id,
                    pickup_agent_id: e.target.value,
                },
            },
            pickUpDetailsResponse
        );
    };
    return (
        <Modal
            show={props.modalShow}
            aria-labelledby="contained-modal-title"
            size="lg"
        >
            <Modal.Header>
                <Modal.Title><label className="label-bold">{product.material_name}</label></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body" style={cardBodyStyle}>
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">E-Waste</h5>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                Pickup Material
                                            </div>
                                            <div className="col-sm-9">
                                                {product.material_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div> */}
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    Pickup User
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.user.first_name +
                                                    " " +
                                                    product.user.last_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    Contact
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.user.phone_number}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label className="label-bold">
                                                    {" "}
                                                    Message
                                                </label>
                                            </div>
                                            <div className="col-sm-9">
                                                {product.message}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="margin-8"></div>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    E-Waste Image
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <Zoom>
                                                    <div className="thumbnail-container-sm">
                                                        <img
                                                            alt="Image Not Available"
                                                            src={
                                                                product.image !=
                                                                ""
                                                                    ? product.image
                                                                    : "images/noImage.png"
                                                            }
                                                        />
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body" style={cardBodyStyle}>
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">
                                            Pickup Information
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Pickup{" "}
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.pickup_date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Address
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Landmark
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.land_mark}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    City
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.city}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    State
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.state}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    Pincode
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.pincode}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    Country
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.country}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Pickup Agent
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <select
                                                    id="pickup_agent"
                                                    label="Assign Agent"
                                                    name="pickup_agent"
                                                    placeholder="--select Agent--"
                                                    className="form-control form-select"
                                                    onChange={handlePickupAgent}
                                                    value={selectedAgent}
                                                >
                                                    <option value={-1}>
                                                        Assign Pickup Agent
                                                    </option>
                                                    {agents_options}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Pickup Status
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <select
                                                    id="change_status"
                                                    label="Change Status"
                                                    name="change_status"
                                                    placeholder="--select status--"
                                                    className="form-select"
                                                    onChange={
                                                        handleStatusChange
                                                    }
                                                    value={selectedStatus}
                                                >
                                                    {bookingStatus_options}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>
                {/* <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body" style={cardBodyStyle}>
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">Bank Details</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Bank Name
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.bank_name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Account Name
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.account_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Account No#
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.account_no}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    IFSC Code
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.ifsc_code}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label className="label-bold">
                                                    {" "}
                                                    Branch
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.branch}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="margin-8"></div>
                <div className="row">
                    <div className="col-sm-10"></div>
                    <div className="col-sm-2">
                        <button
                            className="btn btn-dark mr-1 mb-1"
                            onClick={closeModalHandler}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default UserPickup;
