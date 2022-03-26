import { BOOKING_STATUS } from "../config/constant";

const RecentPickup = (props) => {
    const { recentPickup } = props;

    return (
        <div
            className="media d-flex align-items-center mb-1"
            key={recentPickup.pick_id}
        >
            <a>
                <img
                    src={
                        recentPickup.image != ""
                            ? recentPickup.image
                            : "images/noImage.png"
                    }
                    className="rounded"
                    alt="group image"
                    height="64"
                    width="64"
                />
            </a>
            <div className="media-body ml-1">
                <h6 className="media-heading mb-0">
                    <small>{recentPickup.material_name}</small>
                </h6>
                <small className="text-muted">
                    {recentPickup.pickup_date}
                    <span className="badge badge-light-warning text-bold-500 py-50">
                        {recentPickup.status}
                    </span>
                </small>
            </div>
            <i className="cursor-pointer bx bx-plus-circle text-primary d-flex align-items-center "></i>
        </div>
    );
};

export default RecentPickup;
