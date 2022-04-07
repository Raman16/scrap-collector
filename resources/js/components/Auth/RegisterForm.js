import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ReactModal from "../UI/ReactModal";
import OTPForm from "./OTPForm";

const RegisterForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(false);

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm();
    // {
    //     defaultValues: {
    //         first_name: "Raman Sai",
    //         last_name: "bandari",
    //         username: "bandariraman",
    //         password: "e_wate@2022",
    //         password_confirmation: "e_wate@2022",
    //         email: "bandariraman@hotmail.com",
    //         country_code: "+91",
    //         phone_number: "9886426570",
    //         device_name: "Raman's Postman",
    //         device_id: "unique Device Id",
    //         device_token: "Token generated by fcm",
    //         device_type: "1",
    //     },
    // });

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

    const navigate = useNavigate();

    const otpResponse = (data) => {
        setShowModal(!showModal);
        toast.success(data.message);
    };


    const otpRequest = () => {
        setShowModal(true);

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
        navigate("/login");
    };
    const onSubmit = (requestData) => {
        setFormData(requestData);
        setShowModal(!showModal);
        otpRequest();
    };

    const handleSendOTP = () => {
        otpRequest();
    };
    const submitForm = (otpValues) => {
       
        formData.device_name = navigator.userAgent;
        formData.device_id = "unique Device Id";
        formData.device_token = navigator.appVersion;
        formData.device_type = "1";
        //setting user entered otp
        formData.otp = otpValues;


        registerUser(
            {
                method: "POST",
                url: "/register",
                data: formData,
            },
            registerResponse
        );
    };
    useEffect(() => {
        if (otpError) {
            toast.warn("Error:" + otpError.message);
        }
        // if (registerError) {
        //     console.log(registerError.response.data.message);
        //     toast.error(registerError);
        // }
    }, [otpError, registerError]);
    

    return (
        <>
            <section
                // id="auth-login"
                className="row flexbox-container"
            >
                <div className="col-xl-10 col-11">
                    <div className="card bg-authentication mb-0">
                        <div className="row m-0">
                            <div className="col-md-6 col-12 px-0">
                                {!showModal ? (
                                    <div
                                        className="card shadow"
                                        style={{
                                            borderRadius: "0px !important",
                                        }}
                                    >
                                        <div className="card-body">
                                            <h4 className="text-center mb-2">
                                                SignUp
                                            </h4>
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                                // autoComplete="off"
                                            >
                                                <div className="form-group mb-50">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <Input
                                                                label="Country"
                                                                id="country_code"
                                                                type="text"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                                value="+91"
                                                            />
                                                        </div>
                                                        <div className="col-sm-7">
                                                            {/* <Input2 label="FirstName" register={register} required /> */}
                                                            <Input
                                                                label="Phone Number"
                                                                id="phone_number"
                                                                type="text"
                                                                placeholder="Enter Phone Number"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-sm-2"></div>
                                                        <span className="text-danger">
                                                            {errors.phone_number &&
                                                                "Phone Number is Required"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-50">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <Input
                                                                id="password"
                                                                label="Password"
                                                                type="password"
                                                                placeholder="Enter Password"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.password &&
                                                                    "Password is Required"}
                                                            </span>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Input
                                                                id="password_confirmation"
                                                                label="Confirm Password"
                                                                type="password"
                                                                placeholder="Enter Confirm Password"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.password_confirmation &&
                                                                    "Confirm Password is Required"}
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
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.first_name &&
                                                                    "First Name is Required"}
                                                            </span>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Input
                                                                id="last_name"
                                                                label="Last Name"
                                                                type="text"
                                                                placeholder="Enter Last Name"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.last_name &&
                                                                    "Last Name is Required"}
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
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.username &&
                                                                    "Username is Required"}
                                                            </span>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <Input
                                                                id="email"
                                                                label="E-mail"
                                                                type="email"
                                                                placeholder="Enter Email"
                                                                register={
                                                                    register
                                                                }
                                                                required
                                                            />
                                                            <span className="text-danger">
                                                                {errors.email &&
                                                                    "Enter Email is Required"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button type="submit">
                                                    SIGN UP
                                                </Button>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <small className="mr-25">
                                                    Already have an account?
                                                </small>
                                                <a href="auth-login.html">
                                                    <small>Sign in</small>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="card shadow"
                                        style={{
                                            borderRadius: "0px !important",
                                            height: "100%",
                                        }}
                                    >
                                        <div className="card-body">
                                            <div
                                                style={{
                                                    top: "10%",
                                                    left: "0%",
                                                    position: "sticky",
                                                }}
                                            >
                                                <OTPForm
                                                    submitForm={submitForm}
                                                    handleSendOTP={
                                                        handleSendOTP
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                <img
                                    className="img-fluid"
                                    src="../../../app-assets/images/pages/register.png"
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
export default RegisterForm;
