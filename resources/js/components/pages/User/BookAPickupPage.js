import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ContactCard from "../../Cards/ContactCard";
import HowWeOperate from "../../Cards/HowWeOperateCard";
import useAxios from "../../hooks/use-axios";
import Notification from "../../UI/Notifications";
import BookAPickup from "../../User/BookAPickup";

const BookAPickupPage = () => {
    const {
        isLoading: isBooking,
        error: bookingError,
        sendRequest: BookingRequest,
    } = useAxios();

    const bookingResponse = async (data) => {
        if (!isBooking) {
            toast("Booking DOne...");
        }
    };
    const handleSubmit = (requestData) => {
        requestData.address_type = "1";
        if (!isBooking) {
            toast("Booking in Process...");
        }

        BookingRequest(
            {
                method: "POST",
                url: "/pickup",
                data: requestData,
            },
            bookingResponse
        );
    };
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <BookAPickup onSubmit={handleSubmit} />
                        <Notification />
                    </div>
                    <div className="col-sm-3">
                        <div style={{ marginTop: "30px" }}>
                            <HowWeOperate />
                        </div>
                        <div style={{ marginTop: "10px" }}></div>
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookAPickupPage;
