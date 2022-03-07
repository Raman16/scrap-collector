import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import Button from "../UI/Button";
import Input from "../UI/Input";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();

    const {
        isLoading: OTPsending,
        error: otpError,
        sendRequest: sendOTP,
    } = useAxios();

    const {
        isLoading: isRegistering,
        error: registerError,
        sendRequest: registerUser,
    } = useAxios();

    const otpResponse = (data) => {
        toast.success(data.message);
    };

    const otpRequest = () => {
        let requestData = {
            country_code: getValues("country_code"),
            phone_number: getValues("phone_number"),
            type: "USER_REGISTRATION",
        };
        sendOTP(
            {
                method: "POST",
                url: "/send-otp",
                data: requestData,
            },
            otpResponse
        );
    };

    const registerResponse = (data) => {
        toast.success(data.message);
    };
    const onSubmit = (requestData) => {
        requestData.device_name = navigator.userAgent;
        requestData.device_id = "unique Device Id";
        requestData.device_token = navigator.appVersion;
        requestData.device_type = "1";
        registerUser(
            {
                method: "POST",
                url: "/register",
                data: requestData,
            },
            registerResponse
        );
    };

    useEffect(() => {
        // if (otpError) {
        //     toast.warn("Error:" + otpError.response.data.errors.phone_number[0]);
        // }
        // if (registerError) {
        //     console.log(registerError.response.data.message);
        //     toast.error(registerError);
        // }
    }, [otpError, registerError]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-50">
                    <div className="row">
                        <div className="col-sm-3">
                            {/* <Input2 label="FirstName" register={register} required /> */}
                            <Input
                                label="Country"
                                id="country_code"
                                type="text"
                                register={register}
                                required
                                value="+91"
                            />
                        </div>
                        <div className="col-sm-5">
                            {/* <Input2 label="FirstName" register={register} required /> */}
                            <Input
                                label="Phone Number"
                                id="phone_number"
                                type="text"
                                placeholder="Enter Phone Number"
                                register={register}
                                required
                            />
                        </div>
                        <div className="col-sm-4">
                            <br></br>
                            <Button onClick={otpRequest}>Request OTP</Button>
                        </div>
                        <span className="text-danger">
                            {errors.phone_number && "Phone Number is Required"}
                        </span>

                        <span className="text-success">
                            {OTPsending && "Sending OTP..."}
                        </span>
                    </div>
                </div>
                <div className="form-group mb-50">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-4">
                            <Input
                                id="otp"
                                label="OTP(One Time Password)"
                                type="text"
                                placeholder="Enter OTP"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.otp && "OTP is Required"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-group mb-50">
                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                id="first_name"
                                label="First Name"
                                type="text"
                                placeholder="Enter First Name"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.first_name && "First Name is Required"}
                            </span>
                        </div>
                        <div className="col-sm-6">
                            <Input
                                id="last_name"
                                label="Last Name"
                                type="text"
                                placeholder="Enter Last Name"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.last_name && "Last Name is Required"}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="form-group mb-50">
                    <div className="row">
                        <div className="col-sm-6">
                            <Input
                                id="username"
                                label="Username"
                                type="text"
                                placeholder="Enter Username"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.username && "Username is Required"}
                            </span>
                        </div>
                        <div className="col-sm-6">
                            <Input
                                id="email"
                                label="E-mail"
                                type="email"
                                placeholder="Enter Email"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.email && "Enter Email is Required"}
                            </span>
                        </div>
                    </div>
                </div>
                <Button type="submit">Sign Up</Button>
            </form>
            <hr />
            <div className="text-center">
                <small className="mr-25">Already have an account?</small>
                <a href="auth-login.html">
                    <small>Sign in</small>
                </a>
            </div>
        </>
    );
};
export default RegisterForm;
