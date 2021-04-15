import React from 'react';
import './account.js';

const Account = () => {
    return(
        <div>
            <p>To place your order, log in by entering your 10 digit mobile number</p>
            <div className="mobile">
                <p>Mobile Number</p>
                <div className="text-field">
                <input type="text" placeholder="Enter mobile number "/>
                <button className="login" disabled>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Account;