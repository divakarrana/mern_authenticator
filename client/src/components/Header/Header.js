import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    const handleExternalUser = () => {
        history.push("/");
    }

    const handleAdminLogin = () => {
        history.push("/admin-login");
    }
    return (
        <div className="Header">
            <div className="Header__titleContainer">
                <h2 className="Header__title">MERN Authenticator</h2>
            </div>
            <div>
            <button className="Header__btn" onClick={handleExternalUser}>External User</button>
            <button className="Header__btn" onClick={handleAdminLogin}>Admin Login</button>
            </div>
        </div>
    )
}

export default Header;
