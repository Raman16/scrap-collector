import { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../hooks/use-axios";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import InputH from "../UI/InputH";

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

    const {
        isLoading: isImageUploading,
        error: imageUploadError,
        sendRequest: uploadImageRequest,
    } = useAxios();

    const imageUploadResponse = (data) => {
        toast.success("Update Success");
    };

    let uploadedImage;
    const profileResponse = (data) => {
        let file = uploadedImage[0];
        console.log(file);
        let reader = new FileReader();
        reader.onloadend = function () {
            uploadImageRequest(
                {
                    method: "POST",
                    url: "/image",
                    data: {
                        imageable_type: "user",
                        imageable_id: data.user.id,
                        image: reader.result,
                    },
                },
                imageUploadResponse
            );
        };
        reader.readAsDataURL(file);
    };

    // if (isLoading) {
    //     toastId.current = toast("Updating your profile.");
    // }

    const onSubmit = (requestData) => {
        uploadedImage = requestData.image;
        console.log(uploadedImage);
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
                                    src={auth.user.image}
                                    className="rounded mr-75"
                                    alt="profile image"
                                    height="64"
                                    width="64"
                                />
                            </a>
                            <div className="media-body mt-25">
                                <div className="col-12 px-0 d-flex flex-sm-row flex-column justify-content-start">
                                    <InputH
                                        id="image"
                                        label="Image"
                                        type="file"
                                        placeholder="upload image"
                                        register={register}
                                        // errors={errors}
                                        // required
                                    />
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
