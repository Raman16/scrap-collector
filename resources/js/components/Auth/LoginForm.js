import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import AuthContext from "../store/auth-context";

import Button from "../UI/Button";
import Input from "../UI/Input";

const LoginForm = () => {
    const authCtx = useContext(AuthContext);
    const user = authCtx.user ?? "";
    const user_role = user != "" ? authCtx.user.role[0] : "";

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
        isLoading: isLogging,
        error: loginError,
        sendRequest: loginRequest,
    } = useAxios();

    const navigate = useNavigate();

    const otpResponse = (data) => {
        toast.success(data.message);
    };
    const otpRequest = () => {
        let requestData = {
            country_code: getValues("country_code"),
            phone_number: getValues("phone_number"),
            type: "USER_LOGIN",
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
    const loginResponse = async (data) => {
        await authCtx.login(data);
        if (data.user.role[0].role_id == 1) {
            navigate("/admin/dashboard");
        } 
        if (data.user.role[0].role_id == 2) {
            navigate("/book-a-pickup");
        }
    };
    const onSubmit = (requestData) => {
        if (!isLogging) {
            toast("Loggin In...");
        }
        requestData.device_name = navigator.userAgent;
        requestData.device_id = "unique Device Id";
        requestData.device_token = navigator.appVersion;
        requestData.device_type = "1";
        loginRequest(
            {
                method: "POST",
                url: "/login",
                data: requestData,
            },
            loginResponse
        );
    };

    // useEffect(() => {
    //     if (otpError) {
    //         console.log(otpError.response);
    //         // toast.warn(
    //         //     "Error:" + otpError.response.data.error.phone_number
    //         // );
    //     }
    // }, [otpError]);
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
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-4">
                            <Input
                                id="otp"
                                label="OTP(One Time Password)"
                                type="text"
                                register={register}
                            />
                            <span className="text-danger">
                                {errors.otp && "OTP is required"}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-8 col-sm-offset-4">
                        <Button type="submit">Login</Button>
                    </div>
                </div>
            </form>
            <hr />
            <div className="text-center">
                <small className="mr-25">Don't have an account?</small>
                <a href="auth-register.html">
                    <small>Sign up</small>
                </a>
            </div>
        </>
    );
};
export default LoginForm;
