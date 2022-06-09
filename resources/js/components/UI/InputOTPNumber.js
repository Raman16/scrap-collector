import _ from "lodash";
import React from "react";

const InputOTPNumber = (props) => {
    const { label, register, required, errors } = props;

    const style = {
        color : "#475F7B",
        // textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:"14px"
    }
    
    let errorMessage = "";
    if (!_.isEmpty(errors)) {
        if (errors.hasOwnProperty(props.id)) {
            errorMessage = (
                <>
                    <span className="text-danger">
                        {`${label} is required, ${errors.otp.message}`}
                    </span>
                </>
            );
        }
    } else {
        errorMessage = "";
    }

    return (

        <>
            <label htmlFor={props.id} className="text-bold-600" style={style}>
                {label}
            </label>
            <input
                className="form-control"
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                autoComplete="off"
                {...register(props.id, {
                    required: true,
                    pattern: {
                        value: /^\d{6}$/,
                        message: "It should be 6 digits",
                    },
                })}
            />
            {errorMessage}
        </>
    );
};
export default InputOTPNumber;
