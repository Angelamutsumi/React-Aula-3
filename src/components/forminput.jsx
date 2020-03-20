import React from 'react';

   export const FormInput = ({
        name, 
        label, 
        type, 
        placeholder, 
        value, 
        onChangeInput
        }) => {
        const onChangeFunction = (event) => {
            onChangeInput(event.target.name, event.target.value)
        }

        return <div className = "form-input-container">
            <label>{label}</label><br/>
            <input
                    name={name} 
                    type={type} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChangeFunction}>
            </input>
        </div>
    }
    
    
    

