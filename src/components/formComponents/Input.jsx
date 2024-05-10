import React from "react";

const Input = ({ label, onChange, value, className, id, placeholder, type }) => {
    return (
        <div>
            {label ? <label htmlFor={id}>{label}</label> : ""}
            <input className={className} type={type} required id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;