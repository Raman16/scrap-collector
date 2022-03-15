import React from "react";
const Input = (props) => {
    const { label, register, required } = props;
    const style = {
        color : "#475F7B",
        textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:"12px"
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
                autoComplete="none"
                {...register(props.id, { required })}
            />
        </>
    );
};
export default Input;
