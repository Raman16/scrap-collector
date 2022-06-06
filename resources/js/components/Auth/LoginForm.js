import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
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
        // console.log(data);
        await authCtx.login(data);
        if (data.user.role[0].role_id == 1) {
            navigate("/admin/user-pickups");
        }
        if (data.user.role[0].role_id == 2) {
            navigate("/book-a-pickup");
        }
    };

    const onSubmit = (requestData) => {
        if (!isLogging) {
            toast("Loggin In...");
        }
        requestData.country_code = "+91";
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

    useEffect(() => {
        if (loginError) {
            toast.warn("Error:" + loginError.response.data.message);
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
                                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                                        <Input
                                                            label="Mobile Number"
                                                            id="phone_number"
                                                            type="text"
                                                            placeholder="Enter Mobile Number"
                                                            register={register}
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {errors.phone_number &&
                                                                "Mobile Number is Required"}
                                                        </span>
                                                    </div>

                                                    <div className="col-sm-1"></div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-50">
                                                <div className="row">
                                                    <div className="col-sm-1"></div>

                                                    <div className="col-sm-10">
                                                        <Input
                                                            id="password"
                                                            label="Password"
                                                            type="password"
                                                            placeholder="Enter Password"
                                                            register={register}
                                                            required
                                                        />
                                                        <span className="text-danger">
                                                            {errors.password &&
                                                                "Password is Required"}
                                                        </span>
                                                    </div>
                                                    <div className="col-sm-1"></div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-1"></div>

                                                <div className="col-sm-10">
                                                    <Button type="submit">
                                                        LOGIN
                                                    </Button>
                                                </div>
                                                <div className="col-sm-1"></div>
                                            </div>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <small className="mr-25">
                                                Don't have an account ?
                                            </small>
                                            {/* <a onClick={handleSignup} href="#">
                                                <small>Sign up</small>
                                            </a> */}
                                            <NavLink to="/register">
                                                <small
                                                    style={{
                                                        color: "#006837",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {" "}
                                                    Register
                                                </small>
                                            </NavLink>
                                        </div>
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
