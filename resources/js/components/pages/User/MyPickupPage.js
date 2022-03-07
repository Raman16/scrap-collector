import ContactCard from "../../Cards/ContactCard";
import HowWeOperate from "../../Cards/HowWeOperateCard";
import RecentPickupCard from "../../Cards/RecentPickupCard";
import BookAPickup from "../../User/BookAPickup";
import MyPickups from "../../User/MyPickups";

const MyPickupPage = () => {
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-3">
                                <fieldset className="form-group">
                                    <select className="form-control">
                                        <option>Furniture</option>
                                        <option>Washers & Dryers</option>
                                        <option>
                                            Industrial & Factory Equipment
                                        </option>
                                        <option>
                                            Electronics, TV's & Monitors
                                        </option>
                                        <option>Junk Cars & Equipment</option>
                                        <option>
                                            Scrap Tires of All Sizes
                                        </option>{" "}
                                    </select>
                                </fieldset>
                            </div>
                            <div className="col-sm-3">
                                <fieldset className="form-group">
                                    <select className="form-control">
                                        <option>Bengalure</option>
                                        <option>Hyderabad</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                        <MyPickups />
                    </div>
                    <div className="col-sm-3">
                        <div style={{ marginTop: "54px" }}>
                            <RecentPickupCard />
                        </div>
                        <br></br>
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyPickupPage;
