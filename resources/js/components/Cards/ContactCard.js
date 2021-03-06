const ContactCard = () => {
    return (
        <div className="card shadow">
            <div className="card-body">
                <h5 className="card-title mb-1">
                    For Any Queries
                    <i className="cursor-pointer bx bx-dots-vertical-rounded float-right"></i>
                </h5>
                <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-25">
                        <i className="bx bx-briefcase mr-50 cursor-pointer"></i>
                        <span>
                            Call Us on:
                            <a> +91 7337321213</a>
                        </span>
                    </li>
                    <li className="d-flex align-items-center mb-25">
                        <i className="bx bx-briefcase mr-50 cursor-pointer"></i>
                        <span>
                            Email:
                            <a> mahesh@ew-pot.com</a>
                        </span>
                    </li>
                    <li className="d-flex align-items-center mb-25">
                        <i className="bx bx-receipt mr-50 cursor-pointer"></i>
                        <span>
                            Working Hours
                            <a>&nbsp; 24*7</a>
                        </span>
                    </li>
                    <li className="d-flex align-items-center mb-25">
                        <i className="bx bx-receipt mr-50 cursor-pointer"></i>
                        <span>
                            Location:
                            <a>&nbsp; Hyderabad</a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ContactCard;
