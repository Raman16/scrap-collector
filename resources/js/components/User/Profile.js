import { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Profile = () => {
    const auth = useContext(AuthContext);
    const toastId = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: auth.user.first_name,
            last_name: auth.user.last_name,
            username: auth.user.username,
            email: auth.user.email,
        },
    });

    const {
        isLoading: isLoading,
        error: profileError,
        sendRequest: updateProfile,
    } = useAxios();

    const profileResponse = (data) => {
        toast.dismiss(toastId.current);
        toast.success(data.message);
    };
    if (isLoading) {
        toastId.current = toast("Updating your profile.");
    }

    const onSubmit = (requestData) => {
        updateProfile(
            {
                method: "PUT",
                url: "/user",
                data: requestData,
            },
            profileResponse
        );
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="tab-content">
                    <form
                        className="validate-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="media">
                            <a>
                                <img
                                    src="../../../app-assets/images/portrait/small/avatar-s-16.jpg"
                                    className="rounded mr-75"
                                    alt="profile image"
                                    height="64"
                                    width="64"
                                />
                            </a>
                            <div className="media-body mt-25">
                                <div className="col-12 px-0 d-flex flex-sm-row flex-column justify-content-start">
                                    <label
                                        htmlFor="select-files"
                                        className="btn btn-sm btn-light-primary ml-50 mb-50 mb-sm-0"
                                    >
                                        <span>Upload new photo</span>
                                        <input
                                            id="select-files"
                                            type="file"
                                            hidden=""
                                        />
                                    </label>
                                    <button className="btn btn-sm btn-light-secondary ml-50">
                                        Reset
                                    </button>
                                </div>
                                <p className="text-muted ml-1 mt-50">
                                    <small>
                                        Allowed JPG, GIF or PNG. Max size of
                                        800kB
                                    </small>
                                </p>
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
                                        register={register}
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
                                        register={register}
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
                                        register={register}
                                        required
                                    />
                                    <span className="text-danger">
                                        {errors.email &&
                                            "Enter Email is Required"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Update Profile</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Profile;
