import React from "react";

const Select = React.forwardRef(
    (
        { onChange, onBlur, label, options, id, errors, register, require },
        ref
    ) => {

        const dropdownOptions = options.map((option) => (
            <option value={option.id} key={option.id}>
                {option.value}
            </option>
        ));

        //console.log(errors);
        //console.log(id);

        let errorMessage = "";

        if (!_.isEmpty(errors)) {
            if (errors.hasOwnProperty(id)) {
                errorMessage = (
                    <>
                        <span className="text-danger"  id={`error${id}`}>
                            {`${label} is required`}
                        </span>
                    </>
                );
            }
        } else {

            errorMessage = "";
        
        }
        // if (typeof errors !== "undefined") {
        //     errorMessage = (
        //         <span className="text-danger">
        //             {errors.message && `${label} is required`}
        //         </span>
        //     );
        // }

        return (
            <div className="form-group row">
                <label htmlFor={id} className="col-sm-4 col-form-label">
                    {label}
                </label>
                <div className="col-sm-8">
                    <select
                        {...register(id, { required: true })}
                        name={id}
                        className="form-control form-select"
                        id={id}
                        ref={ref}
                        onChange={onChange}
                        onBlur={onBlur}
                    >
                        {dropdownOptions}
                    </select>
                    {errorMessage}
                </div>
            </div>
        );
    }
);
export default Select;
