import React from "react";
const AuthCard = (props) => {
    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
                <div className="content-body">
                   {props.children}
                </div>
            </div>
            <div className="margin-8"></div>
        </div>
    );
};
export default AuthCard;
