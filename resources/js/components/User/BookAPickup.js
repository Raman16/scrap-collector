import { useForm } from "react-hook-form";
import Button from "../UI/Button";

const BookAPickup = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    return (
        <>
            <h5>Book Your Pickup</h5>
            <form>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="py-50">Scrap</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Material Type:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <select
                                                id="material_type"
                                                className="form-control"
                                            >
                                                <option>Furniture</option>
                                                <option>
                                                    Washers & Dryers
                                                </option>
                                                <option>
                                                    Industrial & Factory
                                                    Equipment
                                                </option>
                                                <option>
                                                    Electronics, TV's & Monitors
                                                </option>
                                                <option>
                                                    Junk Cars & Equipment
                                                </option>
                                                <option>
                                                    Scrap Tires of All Sizes
                                                </option>
                                            </select>
                                        </div>

                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Image:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="file" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Description:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-4"></div>
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
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">
                                            Pickup Date & Location
                                        </h5>
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Date:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-4"></div>
                                    </div>
                                </div>
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Address:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                LandMark:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Country:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Pincode:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                City:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                State:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
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
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="py-50">Bank Details</h5>
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Account No#:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2">
                                            Account Name:
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                IFSC Code:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Branch:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-50">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <label
                                                htmlFor="material_type"
                                                className="text-bold-600"
                                            >
                                                Bank Name:
                                            </label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input className="form-control" />
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-8"></div>
                <div>
                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </div>
            </form>
        </>
    );
};
export default BookAPickup;
