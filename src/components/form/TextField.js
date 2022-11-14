import React from 'react';
import {ErrorMessage, useField} from "formik";

const TextField = ({label, ...props}) => {
    const [field, meta] =useField(props)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control shadow-none border-5  border-info ${meta.touched && meta.error && 'is-invalid border-danger'} `}
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} style={{position: 'absolute',
                color: "red",
                paddingTop: '3px',
                fontSize: ".75rem",}} />
        </div>
    );
};

export default TextField;