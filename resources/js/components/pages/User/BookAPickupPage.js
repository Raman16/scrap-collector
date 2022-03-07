import { useForm } from "react-hook-form";
import ContactCard from "../../Cards/ContactCard";
import HowWeOperate from "../../Cards/HowWeOperateCard";
import BookAPickup from "../../User/BookAPickup";

const BookAPickupPage = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    return (
        <div className="basic-2">
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <BookAPickup />
                    </div>
                    <div className="col-sm-3">
                        <div style={{marginTop:"30px"}}>
                            <HowWeOperate />
                        </div>
                        <div style={{marginTop:"10px"}}></div>
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BookAPickupPage;
