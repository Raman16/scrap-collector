import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import AuthContext from "../store/auth-context";

import Button from "../UI/Button";
import Input from "../UI/Input";
import InputOTPNumber from "../UI/InputOTPNumber";
import InputPhoneNumber from "../UI/InputPhoneNumber";

const LoginForm = () => {
    const authCtx = useContext(AuthContext);
    const user = authCtx.user ?? "";
    const user_role = user != "" ? authCtx.user.role[0] : "";
    const [otpFieldVisible, setOtpFieldVisible] = useState(false);

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
        setOtpFieldVisible(true);
        toast.success(data.message);
    };

    const otpRequest = () => {
        let requestData = {
            country_code: "+91",
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
            navigate("/admin/user-pickups");
        } else if (data.user.role[0].role_id == 2) {
            navigate("/book-a-pickup");
        } else if (data.user.role[0].role_id == 3) {
            navigate("/agent/pickups");
        } else {
            alert("Invalid Entry");
        }
    };

    const onSubmit = (requestData) => {
        if (!otpFieldVisible) {
            otpRequest();
        } else {
            requestData.country_code = "+91";
            requestData.device_name = navigator.userAgent;
            requestData.device_id = "unique Device Id";
            requestData.device_token = navigator.appVersion;
            requestData.device_type = "1";
            requestData.otp = getValues("otp");

            loginRequest(
                {
                    method: "POST",
                    url: "/login",
                    data: requestData,
                },
                loginResponse
            );
        }
    };

    useEffect(() => {
        if (loginError) {
            if (
                loginError.response.data.hasOwnProperty("errors") &&
                loginError.response.data.errors.hasOwnProperty("otp")
            ) {
                toast.warn("Error:" + loginError.response.data.errors.otp[0]);
            } else if (
                loginError.response.data.hasOwnProperty("errors") &&
                loginError.response.data.errors.hasOwnProperty("message")
            ) {
                toast.warn("Error:" + loginError.response.data.errors.message);
            } else {
                toast.warn("Error:" + loginError.response.data.message);
            }
        }
    }, [loginError]);

    return (
        <>
            <section
                // id="auth-login"
                className="row flexbox-container"
            >
                <div className="col-xl-9 col-12">
                    <div className="card bg-authentication mb-0">
                        <div className="row m-0">
                            <div className="col-md-6 col-12 px-0">
                                <div
                                    className="card shadow"
                                    style={{ height: "100%" }}
                                >
                                    <div className="card-body">
                                        <h4 className="text-center mb-2">
                                            Login
                                        </h4>
                                        {!isLogging && (
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <div className="form-group mb-4">
                                                    <div className="row">
                                                        <div className="col-sm-1"></div>

                                                        {/* <div className="col-sm-1"></div>
                                                    <div className="col-sm-3">
                                                        <Input
                                                            label="Country"
                                                            id="country_code"
                                                            type="text"
                                                            register={register}
                                                            required
                                                            value="+91"
                                                        />
                                                    </div> */}
                                                        <div className="col-sm-10">
                                                            {/* <Input2 label="FirstName" register={register} required /> */}
                                                            <InputPhoneNumber
                                                                label="Mobile Number"
                                                                id="phone_number"
                                                                type="text"
                                                                placeholder="Enter Mobile Number"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                                errors={errors}
                                                            />
                                                            <span className="text-danger">
                                                                {/* {errors.phone_number &&
                                                                "Mobile Number is Required"} */}
                                                            </span>

                                                            {/* <span
                                                            className="font-weight-bold
                                                                         text-success
                                                                         cursor-pointer	
                                                                         pull-right
                                                                         text-decoration-underline"
                                                            onClick={otpRequest}
                                                        >
                                                            Send OTP
                                                        </span> */}
                                                        </div>

                                                        <div className="col-sm-1"></div>
                                                    </div>
                                                </div>

                                                <div className="form-group mb-50">
                                                    <div className="row">
                                                        <div className="col-sm-1"></div>

                                                        <div className="col-sm-10">
                                                            {/* <Input
                                                            id="password"
                                                            label="Password"
                                                            type="password"
                                                            placeholder="Enter Password"
                                                            register={register}
                                                            required
                                                        /> */}
                                                            {otpFieldVisible && (
                                                                <>
                                                                    <InputOTPNumber
                                                                        id="otp"
                                                                        label="OTP"
                                                                        type="text"
                                                                        placeholder="Enter OTP"
                                                                        register={
                                                                            register
                                                                        }
                                                                        required
                                                                        errors={
                                                                            errors
                                                                        }
                                                                    />
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
                                                                            <div className="text-center">
                                                                                <small className="mr-25">
                                                                                    Didn't
                                                                                    get
                                                                                    the
                                                                                    code ? &nbsp; 
                                                                                </small>
                                                                                <a
                                                                                    onClick={
                                                                                        otpRequest
                                                                                    }
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "underline",
                                                                                        cursor: "pointer",
                                                                                    }}
                                                                                >
                                                                                    <small style={{color:"#006837"}}>
                                                                                        Resend
                                                                                    </small>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}
                                                            {/* <span className="text-danger">
                                                            {errors.otp && "OTP is Required"}
                                                        </span> */}
                                                        </div>
                                                        <div className="col-sm-1"></div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-1"></div>

                                                    <div className="col-sm-10">
                                                        {!otpFieldVisible && (
                                                            <>
                                                                <Button
                                                                    type="submit"
                                                                    // onClick={
                                                                    //     otpRequest
                                                                    // }
                                                                >
                                                                    Send OTP
                                                                </Button>
                                                            </>
                                                        )}
                                                        {otpFieldVisible && (
                                                            <Button type="submit">
                                                                LOGIN
                                                            </Button>
                                                        )}
                                                    </div>
                                                    <div className="col-sm-1"></div>
                                                </div>
                                            </form>
                                        )}
                                        <div
                                            style={{
                                                marginTop: "70px",
                                                marginLeft: "150px",
                                            }}
                                        >
                                            {isLogging && (
                                                <div class="dots-3"></div>
                                            )}
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                <img
                                    className="img-fluid-login"
                                    src="../../../app-assets/images/pages/login.png"
                                    alt="branding logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default LoginForm;
