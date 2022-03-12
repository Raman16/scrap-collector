import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ContactCard from "../../Cards/ContactCard";
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
    const [materialType, setMaterialType] = useState([]);

    let scrapProductsCard = "";
    let material_options = [];

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

    const {
        isLoading: isMaterialLoading,
        error: isMaterialError,
        sendRequest: getDropdowns,
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

        const dropdownResponse = (data) => {
            setMaterialType(data.material_types);
        };
        getDropdowns(
            {
                method: "GET",
                url: "/material-types",
                data: [],
            },
            dropdownResponse
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

    if (!isLoading) {
        if (scrapData.products.length == 0) {
            scrapProductsCard = (
                <img
                    src="../../../images/empty.PNG"
                    className="rounded"
                    alt="group image"
                   style={{width:"70%",height:"70%"}}
                />
            );
        } else {
            scrapProductsCard = scrapData.products.map((product) => (
                <MyPickups
                    product={product}
                    key={product.pick_id}
                    cancelPickup={cancelPickupHandler}
                    showModalHandler={showModalHandler}
                />
            ));
        }
    }
    if (isLoading) {
        scrapProductsCard = (
            <div
                className="spinner-border text-warning spinner-loading"
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    if (!isMaterialLoading) {
        material_options = materialType.map((matrl) => {
            return (
                <option key={matrl.id} value={matrl.id}>
                    {matrl.material}
                </option>
            );
        });
    }

    const handleSeachByMaterial = (event) => {
        scrapData.searchPickup(event.target.value);
    };
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <select
                                            id="material_type_id"
                                            label="Material Type"
                                            name="material_type_id"
                                            placeholder="--select material--"
                                            className="form-control"
                                            onChange={handleSeachByMaterial}
                                        >
                                            <option>
                                                --Seach By Material--
                                            </option>
                                            {material_options}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-8"></div>

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
                        <div style={{ marginTop: "48px" }}>
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
