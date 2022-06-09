import React from "react";
const TextArea = (props) => {
    const { label, register, required, errors } = props;

    // if (typeof errors !== "undefined") {
    //     errorMessage = (
    //         <span className="text-danger">
    //             {errors.message && `${label} is required`}
    //         </span>
    //     );
    // }
    let errorMessage = "";

    if (!_.isEmpty(errors)) {
        if (errors.hasOwnProperty(props.id)) {
            errorMessage = (
                <>
                    <span className="text-danger">
                        {`${label} is required`}
                    </span>
                </>
            );
        }
    } else {
        errorMessage = "";
    }

    return (
        <div className="form-group row">
            <label htmlFor={props.id} className="col-sm-4 col-form-label">
                {label}
            </label>
            <div className="col-sm-8">
                <textarea
                    className="form-control"
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    placeholder={props.placeholder}
                    autoComplete="none"
                    {...register(props.id, { required })}
                />
                {errorMessage}
            </div>
        </div>
    );
};
export default TextArea;
