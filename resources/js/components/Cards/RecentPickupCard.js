const RecentPickupCard = () => {
    return (
        <div id="table-transactions-history">
            <div className="card shadow">
                <div className="card-header">
                    <h5 className="card-title">Recent Pickups</h5>
                    <div className="heading-elements">
                        <i className="bx bx-dots-horizontal-rounded font-medium-3 align-middle"></i>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table mb-0">
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default RecentPickupCard;