import React from 'react';

const InputField = ({
    type,
    name,
    value,
    placeholder,
    onChange,
    error
}) => {
    const style = { color: 'red', fontSize: '13px' };
    return (
        <div className="col-md-12 form-group"> 
            <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className="form-control" />
            {error ? <i style={style}> {error} </i> : ''}
        </div>
    );
}

export default InputField;
