import React from 'react';

    function FormInput(props) {
        const {
            name, label,type,placeholder,value, onChangeInput
        } = props;

        const onChangeFuntion = (event) => {
            onChangeInput(event.target.name, event.target.value)
        }

        return <div>
                <label>{label}</label><br/>
                <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChangeFuntion}/>
            </div>
    }

    export default FormInput;
    
    
    

