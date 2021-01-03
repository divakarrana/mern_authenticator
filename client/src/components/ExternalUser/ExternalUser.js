import React, { useState } from 'react';
import axios from 'axios';

const ExternalUser = () => {
    const [userDetails, setUserDetails] = useState({
        firstname: '',
        lastname: '',
        telephone: '',
        address: '',
        ssn:''
    });

    const validateInputs = (user) => {
        if(!user.firstname || !user.lastname || !user.telephone || !user.address || !user.ssn){
            return "Plese fill out all fields. All fields are Manadatory.";
        } else if(typeof(+user.telephone) !== "number"){
            return 'Telephone should be a number';
        }else{
            return "Validation Success";
        }
    }

    const handleUserInput = (e) => {
        let updatedDetails = {...userDetails};
        updatedDetails[e.target.name] = e.target.value;
        setUserDetails(updatedDetails);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const validationMsg = validateInputs(userDetails);
        if(validationMsg === "Validation Success"){
            axios.post('/api/v1/users/signup', userDetails)
                .then((response) => {
                    //Resetting input fields
                    setUserDetails({
                        firstname: '',
                        lastname: '',
                        telephone: '',
                        address: '',
                        ssn:''
                    });
                    alert(response.data.message);
                }, (error) => {
                    console.log(error);
                    alert(error.response.data.message);
                });
        } else {
            alert(validationMsg);
        }
    }
    return (
            <form className="Form">
                <header>External Users Form</header>
                <input 
                    type="text" 
                    name="firstname" 
                    placeholder="First Name*" 
                    value={userDetails.firstname} 
                    onChange={e => handleUserInput(e)} />
                
                <input 
                    type="text" 
                    name="lastname" 
                    placeholder="Last Name*" 
                    value={userDetails.lastname} 
                    onChange={e => handleUserInput(e)} />

                <input 
                    type="text" 
                    name="telephone" 
                    placeholder="Telephone*" 
                    value={userDetails.telephone} 
                    onChange={e => handleUserInput(e)} />

                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address*" 
                    value={userDetails.address} 
                    onChange={e => handleUserInput(e)} />
                <input 
                    type="text" 
                    name="ssn" 
                    placeholder="SSN*" 
                    value={userDetails.ssn} 
                    onChange={e => handleUserInput(e)} />

                <button type="submit" onClick={e => onSubmit(e)}>SUBMIT</button>
            </form>
    )
}

export default ExternalUser;
