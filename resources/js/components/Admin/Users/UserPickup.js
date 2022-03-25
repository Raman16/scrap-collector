import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { BOOKING_STATUS } from "../../config/constant";
import useAxios from "../../hooks/use-axios";
import AdminPickupsContext from "../../store/admin-pickups-context";
// import Modal from "../../UI/Modal";

const UserPickup = (props) => {
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

    const selectedStatus = BOOKING_STATUS.findIndex(
        (value) => value === product.status
    );
    const selectedAgent = 1;

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

        if (confim) {
            changeStatus(
                {
                    method: "PUT",
                    url: "/admin/pickups/change-status",
                    data: {
                        pickup_id: product.pick_id,
                        status: e.target.value,
                    },
                },
                statusResponse
            );
        }
    };

    const pickUpDetailsResponse = (data) => {
        adminCtx.updatePickUp(data.pickup);
    };

    const handlePickupAgent = (e) => {
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
            <Modal.Header closeButton>
                <Modal.Title>{product.material_name}</Modal.Title>
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
                                                Pickup User
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
                                                Contact
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
                                                Message
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
                                                E-Waste Image
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="thumbnail-container-sm">
                                                    <img
                                                          src={
                                                            product.image != ""
                                                                ? product.image
                                                                : "images/noImage.png"
                                                        }
                                                    />
                                                </div>
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
                                                Pickup Date
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
                                                Address
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.address}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Landmark
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
                                            <div className="col-sm-6">City</div>
                                            <div className="col-sm-6">
                                                {product.address.city}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                State
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
                                                Pincode
                                            </div>
                                            <div className="col-sm-6">
                                                {product.address.pincode}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Country
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
                                                Pickup Agent
                                            </div>
                                            <div className="col-sm-6">
                                                <select
                                                    id="pickup_agent"
                                                    label="Assign Agent"
                                                    name="pickup_agent"
                                                    placeholder="--select Agent--"
                                                    className="form-control form-select"
                                                    onChange={handlePickupAgent}
                                                >
                                                    <option>
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
                                                Pickup Status
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
                <div className="row">
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
                                                Bank Name
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
                                                Account Name
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.account_name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Account No#
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
                                                IFSC Code
                                            </div>
                                            <div className="col-sm-6">
                                                {product.bank.ifsc_code}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Branch
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
                </div>
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
