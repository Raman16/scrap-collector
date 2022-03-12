import React from "react";
const Input = (props) => {
    const { label, register, required } = props;
    return (
        <>
            <label htmlFor={props.id} className="text-bold-600">
                {label}
            </label>
            <input
                className="form-control shadow"
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                {...register(props.id, { required })}
            />
        </>
    );
};
export default Input;
