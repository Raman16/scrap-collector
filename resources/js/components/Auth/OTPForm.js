import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";

const OTPInputCard = ({ id, name, register, required, onChange }) => {
    return (
        <input
            className="m-2 text-center form-control rounded"
            type="text"
            id={id}
            name={name}
            maxLength="1"
            onChange={onChange}
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

    const onChangeOTP = () => {
        let otpValues =
            getValues("first") +
            getValues("second") +
            getValues("third") +
            getValues("fourth") +
            getValues("fifth") +
            getValues("sixth");
        console.log(otpValues);
        props.handleOTP(otpValues);
    };

    const submitForm = () => props.submitForm();
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
                    onChange={onChangeOTP}
                />
                <OTPInputCard
                    id="second"
                    name="second"
                    register={register}
                    onChange={onChangeOTP}
                />
                <OTPInputCard
                    id="third"
                    name="third"
                    register={register}
                    onChange={onChangeOTP}
                />
                <OTPInputCard
                    id="fourth"
                    name="fourth"
                    register={register}
                    onChange={onChangeOTP}
                />
                <OTPInputCard
                    id="fifth"
                    name="fifth"
                    register={register}
                    onChange={onChangeOTP}
                />
                <OTPInputCard
                    id="sixth"
                    name="sixth"
                    register={register}
                    onChange={onChangeOTP}
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
                        <a href="auth-register.html">
                            <small>Resend</small>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OTPForm;
