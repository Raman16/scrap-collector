import { Modal } from "react-bootstrap";
import Button from "../UI/Button";
import InputH from "../UI/InputH";
// import Modal from "../UI/Modal";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MyPickup = (props) => {
    const { product } = props;
    const closeModalHandler = () => {
        props.closeModal();
    };

    const cardBodyStyle = {
        lineHeight: "25px",
        fontSize: "14px",
    };

    return (
        <Modal
            show={props.modalShow}
            aria-labelledby="contained-modal-title"
            size="lg"
        >
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
                                <div className="row">
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
                                                <Zoom>
                                                    <div className="thumbnail-container-sm">
                                                        <img
                                                        alt="Not Availble"
                                                        src={
                                                                product.image !=
                                                                ""
                                                                    ? product.image
                                                                    : "images/noImage.png"
                                                            }
                                                        />
                                                    </div>
                                                </Zoom>
                                                
                                                    {/* <img
                                                        src={
                                                            product.image != ""
                                                                ? product.image
                                                                : "images/noImage.png"
                                                        }
                                                        alt="Not Availble"
                                                    /> */}
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
                                                {product.pickup_date +
                                                    " " +
                                                    product.pickup_time}
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
                                                Pickup Status
                                            </div>
                                            <div className="col-sm-6">
                                                {product.status ==
                                                    "Cancelled" && (
                                                    <div
                                                        className="badge badge-light-danger text-bold-500 py-50"
                                                        style={{
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        {product.status}
                                                    </div>
                                                )}
                                                {product.status !=
                                                    "Cancelled" && (
                                                    <div
                                                        className="badge badge-light-success text-bold-500 py-50"
                                                        style={{
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        {product.status}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                Pickup Agent
                                            </div>
                                            <div className="col-sm-6">
                                                <span
                                                    className=" text-bold-500"
                                                    style={{ fontSize: "13px" }}
                                                >
                                                    {product.agent &&
                                                        product.agent
                                                            .first_name +
                                                            " " +
                                                            product.agent
                                                                .last_name +
                                                            ","}
                                                    <br></br>
                                                </span>
                                                Contact:
                                                {product.agent &&
                                                    product.agent.phone_number}
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
export default MyPickup;
