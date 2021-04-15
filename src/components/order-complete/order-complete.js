import React from 'react';
import Confetti from '../../assets/images/confetti.jpg';
import Icon from '@mdi/react';
import { Link } from '@reach/router';
import { mdiBadgeAccount, mdiStorefrontOutline } from '@mdi/js';
import { mdiBagPersonalOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import './order-complete.css';

const OrderComplete = () => {
    return(
        <div>
            <nav className="nav">
                <div className="upper-nav">
                <p className="nav-p">Store made with soko</p>
                </div>
                <div className="lower-nav">
                    <div className="left-nav">
                        <div className="left-icon">
                            <Icon path={mdiStorefrontOutline} size={1.6} />
                        </div>
                        <div className="left-note">
                            <p>Target</p>
                            <p>Cham Towers, plot 12 Nkruma Rd, Kampala, Ug</p>
                        </div>
                    </div>
                    <div className="right-nav">
                        <div className="right-nav-flex">
                            <Icon path={mdiBagPersonalOutline} size={1} className="right-icon"/>
                            <p>Bag</p>
                        </div>
                        <div className="right-nav-flex">
                            <Icon path={mdiAccountOutline} size={1} className="right-icon"/>
                            <p>Account</p>
                        </div>
                    </div>
                </div>
            </nav>
            <hr />
            <section className="complete">
                <img src={Confetti} alt="A confetti to celebrate a successful order" className="confetti"/>
                <p><strong>Thank You!</strong></p>
                <p><strong>Your order has been placed successfully</strong></p>
                <p className="grey">You will receive a confirmation message as soon as the order is completed</p>
                <p className="grey">Order Number: John - 271e</p>
                <div className="buttons">
                    <button className="track">Track Order</button>
                    <button className="continue"><Link to="/" className="a-link">Continue Shopping</Link></button>
                </div>
            </section>
        </div>
    )
}

export default OrderComplete;