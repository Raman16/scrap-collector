import { Button, Modal } from "react-bootstrap";
import InputH from "../../UI/InputH";
import { useForm } from "react-hook-form";
import _ from "lodash";
import { useEffect } from "react";

const AddState = (props) => {

    const { editValue } = props;

    let defaultValues =
        _.isEmpty(editValue) != true
            ? {
                  id: editValue.id,
                  name: editValue.name,
              }
            : {};

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
    } = useForm();

    const onSubmit = (data) => {
        props.handleAddOrUpdate(data);
        // setValue('name','')
    };

    useEffect(() => {
        setValue("name", defaultValues.name);
        setValue("id", defaultValues.id);
    }, [defaultValues.name]);

    // console.log(_.isEmpty(editValue));
    return (
        <Modal show={props.modalShow} aria-labelledby="contained-modal-title">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                        Add State
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12">
                            <input
                                type="hidden"
                                id="id"
                                defaultValue={getValues("id")}
                            />
                            <InputH
                                label="State Name"
                                id="name"
                                type="text"
                                placeholder="Enter State"
                                register={register}
                                required
                            />
                            <span className="text-danger">
                                {errors.name && "State is Required"}
                            </span>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleModalShow}>Close</Button>
                    <Button type="submit">Submit</Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
};
export default AddState;
