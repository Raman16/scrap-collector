import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

const OTPInputCard = ({
    id,
    name,
    register,
    required,
    onKeyUp,
    autoFocus,
}) => {
    return (
        <input
            className="m-2 text-center form-control rounded"
            type="text"
            id={id}
            name={name}
            maxLength="1"
            onKeyUp={onKeyUp}
            autoFocus={autoFocus}
            {...register(id, { required })}
        />
    );
};

const OTPForm = (props) => {
   
    const {
        register,
        getValues,
        formState: { errors },
    } = useForm();

    let otpValues;
    const onKeyUpOTP = (e) => {
         otpValues =
            getValues("first") +
            getValues("second") +
            getValues("third") +
            getValues("fourth") +
            getValues("fifth") +
            getValues("sixth");

        if (e.target.value.length != 0 && e.target.id !='sixth') {
            e.target.nextSibling.focus();
        }
        

    };

    

    
    const submitForm = () => props.submitForm(otpValues);

    return (
        <>
            <h4 className="text-center mb-2">Mobile Phone Verification</h4>
            <br></br>
            <h6 className="text-center mb-2">
                Please enter the One Time Password(OTP) Sent to +91 9886426568
            </h6>
            <div
                id="otp"
                className="inputs d-flex flex-row justify-content-center mt-2"
            >
                <OTPInputCard
                    id="first"
                    name="first"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                    autoFocus={true}
                />
                <OTPInputCard
                    id="second"
                    name="second"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                />
                <OTPInputCard
                    id="third"
                    name="third"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                />
                <OTPInputCard
                    id="fourth"
                    name="fourth"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                />
                <OTPInputCard
                    id="fifth"
                    name="fifth"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                />
                <OTPInputCard
                    id="sixth"
                    name="sixth"
                    register={register}
                    onKeyUp={onKeyUpOTP}
                />
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Button type="button" onClick={submitForm}>
                        SUBMIT
                    </Button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center">
                        <small className="mr-25">Didn't get the code? </small>
                        <a
                            onClick={props.handleSendOTP}
                            style={{ textDecoration: "underline",cursor:'pointer' }}
                        >
                            <small>Resend</small>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OTPForm;
