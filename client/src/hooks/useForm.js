// write your custom hook here to control your checkout form
import React, { useState } from 'react'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
};

export const useForm = () => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    


    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log(showSuccessMessage)
        e.preventDefault();
        setShowSuccessMessage(true)
        console.log(showSuccessMessage)
    };

    return [values, handleChanges, handleSubmit, showSuccessMessage];
}
