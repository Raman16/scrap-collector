import { Button, Modal } from "react-bootstrap";
import InputH from "../../UI/InputH";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { useEffect } from "react";

const AddAgent = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const onSubmit = (data) => {
        props.agentRegistration(data);
    };

    return (
        <Modal show={props.modalShow} aria-labelledby="contained-modal-title">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="none">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                        Add Pickup Agent
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                label="Country"
                                id="country_code"
                                type="text"
                                register={register}
                                required
                                value="+91"
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                label="Phone Number"
                                id="phone_number"
                                type="text"
                                placeholder="Enter Phone Number"
                                register={register}
                                required
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Enter Password"
                                register={register}
                                required
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                id="first_name"
                                label="First Name"
                                type="text"
                                placeholder="Enter First Name"
                                register={register}
                                required
                                errors={errors}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                id="last_name"
                                label="Last Name"
                                type="text"
                                placeholder="Enter Last Name"
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <InputH
                                id="username"
                                label="Username"
                                type="text"
                                placeholder="Enter Username"
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                        <div className="col-sm-12">
                            <InputH
                                id="email"
                                label="E-mail"
                                type="email"
                                placeholder="Enter Email"
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleModalShow}>Close</Button>
                    <Button type="submit">Register</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};
export default AddAgent;
