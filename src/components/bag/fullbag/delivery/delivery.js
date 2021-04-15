import React from 'react';
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import './delivery.css';

const Delivery = () => {
    return (
        <div>
            <p>Select your delivery address from the existing one or add a new one</p>
            <div className="address">
                <div className="address-box">
                    <p><strong>Shrey Karah</strong></p>
                    <p>Quench Ville, Plot 12 Nkrumah Rd, Kampala, Uganda</p>
                </div>
                <div className="address-box">
                    <p><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add New Address</p>
                </div>
            </div>
        </div>
    )
}

export default Delivery;