import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ContactCard from "../../Cards/ContactCard";
import RecentPickupCard from "../../Cards/RecentPickupCard";
import useAxios from "../../hooks/use-axios";
import ScrapContext from "../../store/scrap-context";
import Notification from "../../UI/Notifications";
import MyPickup from "../../User/MyPickup";
import MyPickups from "../../User/MyPickups";
import RecentPickup from "../../User/RecentPickup";

const MyPickupPage = () => {
    const scrapData = useContext(ScrapContext);
    const [showModal, setShowModal] = useState(false);
    const [showScrapDetail, setShowScrapDetail] = useState([]);
    const [recentPickup, setRecentPickup] = useState([]);

    const {
        isLoading: isLoading,
        error: isError,
        sendRequest: getPickups,
    } = useAxios();

    const {
        isLoading: isCancelling,
        error: isCancelError,
        sendRequest: cancelPickUp,
    } = useAxios();

    const {
        isLoading: isPickups,
        error: isPickupError,
        sendRequest: getRecentPickups,
    } = useAxios();

    useEffect(() => {
        const pickUpResponse = (data) => {
            scrapData.userPickUps(data.pickup_list);
        };
        getPickups(
            {
                method: "GET",
                url: "/pickup/",
                data: [],
            },
            pickUpResponse
        );

        const recentPickUpResponse = (data) => {
            setRecentPickup(data.pickup_list);
        };
        getRecentPickups(
            {
                method: "GET",
                url: "/pickup/recent",
                data: [],
            },
            recentPickUpResponse
        );
    }, []);

    const cancelResponse = (data) => {
        toast(data.message);
        scrapData.updatePickUp(data.pickup);
    };

    const cancelPickupHandler = (pickup_id, status_id) => {
        cancelPickUp(
            {
                method: "PUT",
                url: "/pickup/change-status",
                data: {
                    pickup_id: pickup_id,
                    status: status_id,
                },
            },
            cancelResponse
        );
    };

    const showModalHandler = (pickup_id) => {
        const products = scrapData.products;

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
    let scrapProductsCard = "";
    if (!isLoading) {
        // console.log(scrapData.products);
        scrapProductsCard = scrapData.products.map((product) => (
            <MyPickups
                product={product}
                key={product.pick_id}
                cancelPickup={cancelPickupHandler}
                showModalHandler={showModalHandler}
            />
        ));
    }

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

                        {scrapProductsCard}
                        {showModal && (
                            <MyPickup
                                closeModal={closeModalHandler}
                                product={showScrapDetail}
                            />
                        )}
                        <Notification />
                    </div>
                    <div className="col-sm-3">
                        <div style={{ marginTop: "54px" }}>
                            {/* <RecentPickupCard /> */}
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title mb-1">
                                        Recent Pickups
                                        <i className="cursor-pointer bx bx-dots-vertical-rounded align-top float-right"></i>
                                    </h5>
                                    {recentPickup.map((recent) => {
                                        return (
                                            <RecentPickup
                                                key={recent.pick_id}
                                                recentPickup={recent}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
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
