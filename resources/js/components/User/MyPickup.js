import Button from "../UI/Button";
import InputH from "../UI/InputH";
import Modal from "../UI/Modal";
import Select from "../UI/Select";
import TextArea from "../UI/TextArea";

const MyPickup = (props) => {
    const { product } = props;
    const closeModalHandler = () => {
        props.closeModal();
    };
    const labelStyle = {
        fontWeight: "bold",
        width: "40%",
    };
    return (
        <Modal>
            <div className="row">
                <div className="col-12">
                    <div
                        className="card"
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="py-50">Scrap</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>
                                        Material Type:
                                    </label>
                                    {product.material_name}
                                </div>
                                <div className="col-sm-4">IMAGE</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>Message:</label>
                                    {product.message}
                                </div>
                                <div className="col-sm-4">
                                    <label style={labelStyle}>Status</label>

                                    {product.status == "CANCELLED" && (
                                        <div class="badge badge-light-danger text-bold-500 py-50">
                                            {product.status}
                                        </div>
                                    )}
                                    {product.status != "CANCELLED" && (
                                        <div class="badge badge-light-success text-bold-500 py-50">
                                            {product.status}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin-8"></div>
            <div className="row">
                <div className="col-12">
                    <div
                        className="card"
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="py-50">
                                        Pickup Date & Location
                                    </h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>
                                        Pickup Date:
                                    </label>
                                    {product.pickup_date}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>Address:</label>
                                    {product.address.address}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}> Landmark:</label>
                                    {product.address.land_mark}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}> Country:</label>
                                    {product.address.country}
                                </div>
                                <div className="col-sm-4">
                                    <label style={labelStyle}> State:</label>
                                    {product.address.state}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}> City:</label>
                                    {product.address.city}
                                </div>
                                <div className="col-sm-4">
                                    <label style={labelStyle}> Pincode:</label>
                                    {product.address.pincode}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin-8"></div>
            <div className="row">
                <div className="col-12">
                    <div
                        className="card"
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="py-50">Bank Details</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>Bank Name:</label>
                                    {product.bank.bank_name}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>
                                        Account Name:
                                    </label>
                                    {product.bank.account_name}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>IFSC code:</label>
                                    {product.bank.ifsc_code}
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8">
                                    <label style={labelStyle}>
                                        {" "}
                                        Account No#:
                                    </label>
                                    {product.bank.account_no}
                                </div>
                                <div className="col-sm-4">
                                    <label style={labelStyle}> Branch:</label>
                                    {product.bank.branch}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="margin-8"></div>s{" "}
            <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-2">
                    <button
                        className="btn btn-dark mr-1 mb-1"
                        onClick={closeModalHandler}
                    >
                        Close
                    </button>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </Modal>
    );
};
export default MyPickup;
