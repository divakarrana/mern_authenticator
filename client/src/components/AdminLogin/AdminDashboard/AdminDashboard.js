import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AdminDashboard = (props) => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('/api/v1/users/listUsers')
        .then((response) => {
            setUsers(response.data.data.usersList);
            setLoading(false);
        }, (error) => {
            alert('Authentication Failed! Redirecting to Login Page.');
            console.log(error);
            history.push('/admin-login');

        })
    },[history]);

    if(loading){
        return <div className="Loading">Loading...</div>
    }
    if(users.length === 0){
        return <div className="NoData">No User Present!</div>
    }

    return (
        <div className="Dashboard">
            <table>
                <caption>Admin Dashboard</caption>
                <thead>
                    <tr>
                        <th height="50">S.No.</th>
                        <th height="50">First Name</th>
                        <th height="50">Last Name</th>
                        <th height="50">Telephone</th>
                        <th height="50">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user._id}>
                                <td>{index+1}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.telephone}</td>
                                <td>{user.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard;
