const HowWeOperate = () => {
    return (
        <div className="card shadow">
            <div className="card-title"></div>
            <div className="card-body">
                <h5>How We Operate</h5>
                <ul className="timeline">
                    <li className="timeline-item timeline-icon-success">
                        {/* <div className="timeline-time">
                            </div> */}
                        <span className="timeline-title">Book A Pickup.</span>
                    </li>
                    <li className="timeline-item timeline-icon-primary">
                        <span className="timeline-title">
                            Our Executives Contacts Your Number.
                        </span>
                    </li>
                    <li className="timeline-item timeline-icon-danger">
                        <span className="timeline-title">
                            Send You Delivery Van and Pickup the Scrap.
                        </span>
                    </li>
                    <li className="timeline-item timeline-icon-info">
                        <span className="timeline-title">
                            Payment Processed.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HowWeOperate;