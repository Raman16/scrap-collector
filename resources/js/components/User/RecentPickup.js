const RecentPickup = (props) => {
    const { recentPickup } = props;

    return (
        <div
            className="media d-flex align-items-center mb-1"
            key={recentPickup.pick_id}
        >
            <a>
                <img
                    src="../../../app-assets/images/banner/banner-31.jpg"
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
                    12-08-2011
                    {(recentPickup.status == "CANCELLED" ||
                        recentPickup.status == "INPROGRESS") && (
                        <span className="badge badge-light-danger text-bold-500 py-50">
                            {recentPickup.status}
                        </span>
                    )}
                    {(recentPickup.status == "CREATED" ||
                        recentPickup.status == "COMPLETED") && (
                        <span className="badge badge-light-success text-bold-500 py-50">
                            {recentPickup.status}
                        </span>
                    )}
                </small>
            </div>
            <i className="cursor-pointer bx bx-plus-circle text-primary d-flex align-items-center "></i>
        </div>
    );
};

export default RecentPickup;
