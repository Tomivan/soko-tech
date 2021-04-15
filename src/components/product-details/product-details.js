import React from 'react';
import Icon from '@mdi/react'
import { mdiStorefrontOutline } from '@mdi/js';
import { mdiBagPersonalOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiTruckDeliveryOutline } from '@mdi/js';
import { mdiShieldStarOutline } from '@mdi/js';
import { mdiHours24 } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import Woodenleg from '../../assets/images/woodenleg.png';
import { Link } from '@reach/router';
import './product-details.css';

const ProductDetails = () => {
    return (
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
            <section className="upper-section">
                    <div className="product-box">
                        <img src={Woodenleg} alt="" className="product-icon"/>
                        <div className="product-info">
                            <p><strong>Norbury Scandinavian Wooden Leg Ottoman</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat</p>
                            <div className="price">
                                <p><strong>UGX 118,000</strong></p>
                                <s>UGX 148,000</s>
                                <p className="red">-20%</p>
                            </div>
                            <div className="quantity">
                                <p className="minus"> - </p>
                                <p className="number"> 1 </p>
                                <p className="plus"> + </p>
                            </div>
                            <button className="add-button">Add to Bag</button>
                            <button className="buy-button"><Link to="/bag" className="a-link">Buy Now</Link></button>
                        </div>
                    </div> 
            </section>
            <section className="lower-section">
                <div className="lower-box">
                    <Icon path={mdiTruckDeliveryOutline} size={2} className="lower-icon" color="yellow"/>
                    <p>Fast delivery</p>
                </div>
                <div className="lower-box">
                    <Icon path={mdiShieldStarOutline} size={2} className="lower-icon"  color="yellow"/>
                    <p>Buyer Protection</p>
                </div>
                <div className="lower-box">
                    <Icon path={mdiHours24} size={2} className="lower-icon"  color="yellow"/>
                    <p>Customer support</p>
                </div>
            </section>
            <footer className="footer">
                <p className="footer-p">STORE DETAILS</p>
                <div className="footer-middle">
                    <p><strong>Target</strong></p>
                    <p>Cham Towers, plot 12 Nkrumard, Kampala,Ug</p>
                </div>
                <button className="chat"><Icon path={mdiWhatsapp} size={1} className="chat-icon"/>Chat with us</button>
            </footer>
        </div>
    )
}

export default ProductDetails;