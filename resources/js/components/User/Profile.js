import { useRef, useContext, useState } from "react";
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
    const [img, setImg] = useState();
    const chooseFileStyle = {
        width: "232px",
        height: "32px",
        margin: "2px",
        color: "teal",
        fontSize: "12px",
        overflow: "hidden",
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: auth.user.first_name,
            last_name: auth.user.last_name,
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

    const profileResponse = (data) => {

        if (img != null) {
            let file = img;
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
        }
        else{
            toast.success("Update Success");
            auth.updateProfile(data);

        }
    };

    // if (isLoading) {
    //     toastId.current = toast("Updating your profile.");
    // }

    const onSubmit = (requestData) => {
        
        // requestData.image = img;
        // uploadedImage = requestData.image;
        // console.log(uploadedImage);
        updateProfile(
            {
                method: "PUT",
                url: "/user",
                data: requestData,
            },
            profileResponse
        );
    };
    const handleUploadImage = (event) => {
        if (event.target.files.length > 0) {
            setImg(event.target.files[0]);
            var src = URL.createObjectURL(event.target.files[0]);
            var preview = document.getElementById("profile_image");
            preview.src = src;
            preview.style.display = "block";
        }
    };

    return (
        <div className="card shadow">
            <div className="card-body">
                <div className="tab-content">
                    <form
                        className="validate-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        {/* <div className="media">
                            <div
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    border: "1px solid #888",
                                }}
                            >
                                <img
                                    src={auth.user.image}
                                    className="rounded mr-75"
                                    alt="profile image"
                                    id="profile_image"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            <div className="media-body mt-25">
                                <div className="col-4 px-0 d-flex flex-sm-row flex-column justify-content-start fileUpload ">
                                    <input
                                        id="image"
                                        label="Image"
                                        type="file"
                                        className="upload"
                                        style={chooseFileStyle}
                                        onChange={handleUploadImage}
                                    />
                                   
                                </div>
                            </div>
                        </div> */}
                            <div className="row">
                                <div className="col-sm-6  mb-4">
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
                                <div className="col-sm-6 mb-4">
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
                            <div className="row">
                                {/* <div className="col-sm-6">
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
                                </div> */}
                                <div className="col-sm-6 mb-4">
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
                        <Button type="submit">Update Profile</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Profile;
