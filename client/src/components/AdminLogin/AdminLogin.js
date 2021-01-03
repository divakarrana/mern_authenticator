import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AdminLogin = (props) => {
    const history = useHistory();

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const handleAdminInput = (e) => {
        let updatedDetails = {...loginDetails};
        updatedDetails[e.target.name] = e.target.value;
        setLoginDetails(updatedDetails);
    }

    const validateInputs = (loginDetails) => {
        if(!loginDetails.email || !loginDetails.password){
            return "Both Email and Password is mandatory."
        } else {
            return 'Validation Successful';
        }
    }

    const onLogin = (e) => {
        e.preventDefault();
        const validationMsg = validateInputs(loginDetails);
        if(validationMsg === 'Validation Successful'){
            axios.post('/api/v1/users/admin-login', loginDetails)
                .then((response) => {
                    //Redirect to dashboard
                    if(response.data.status === 'success'){
                        history.push({
                            pathname: '/dashboard',
                            state: { detail: response.data }
                        });
    
                    }
                }, (error) => {      
                    alert('Login Failed, Email or Password is not a valid match!');
                    console.log(error);
                });
        } else{
            alert(validationMsg);
        }

        //Reset login form
        setLoginDetails({
            email: '',
            password: ''
        });
    }

    return (
        <form className="Form">
            <header>Admin Login</header>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email*" 
                    value={loginDetails.email} 
                    onChange={e => handleAdminInput(e)} />
                
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password*"
                    value={loginDetails.password} 
                    onChange={e => handleAdminInput(e)} />

                <button type="submit" onClick={e => onLogin(e)}>LOGIN</button>
            </form>
    )
}

export default AdminLogin;
