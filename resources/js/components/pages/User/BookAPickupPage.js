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

    const {
        isLoading: isImageUploading,
        error: imageUploadError,
        sendRequest: uploadImageRequest,
    } = useAxios();

    let uploadedImage;
    const imageUploadResponse = (data) => {
        if (!isBooking) {
            toast("Booking DOne...");
        }
    };
    const bookingResponse = async (data) => {
        let file = uploadedImage[0];
        let reader = new FileReader();
        reader.onloadend = function () {
            uploadImageRequest(
                {
                    method: "POST",
                    url: "/image",
                    data: {
                        imageable_type: "scrap_image",
                        imageable_id: data.pickup_list.pick_id,
                        image: reader.result,
                    },
                },
                imageUploadResponse
            );
            // document.write("RESULT: ", reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (requestData) => {
        
        requestData.address_type = "1";
        if (!isBooking) {
            toast("Booking in Process...");
        }
        uploadedImage = requestData.image;

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
