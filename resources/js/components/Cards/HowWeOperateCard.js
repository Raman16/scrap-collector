const HowWeOperate = () => {
    return (
        <div className="card">
            <div className="card-title"></div>
            <div className="card-body">
                <h5>How We Operate</h5>
                <ul className="timeline">
                    <li className="timeline-item timeline-icon-success active">
                        {/* <div className="timeline-time">
                            </div> */}
                        <span className="timeline-title">Book A Pickup.</span>
                    </li>
                    <li className="timeline-item timeline-icon-primary active">
                        <span className="timeline-title">
                            Our Executives Contacts Your Number.
                        </span>
                    </li>
                    <li className="timeline-item timeline-icon-danger active">
                        <span className="timeline-title">
                            Send You Delivery Van and Pickup the Scrap.
                        </span>
                    </li>
                    <li className="timeline-item timeline-icon-info active">
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