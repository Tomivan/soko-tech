import React from 'react';
import Icon from '@mdi/react'
import { mdiStorefrontOutline } from '@mdi/js';
import { mdiBagPersonalOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import Sad from '../../assets/images/sad.jpg';
import Fullbag from './fullbag/fullbag';
import './bag.css';

const Bag = () => {
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
            {/* <section className="empty">
                <img src={Sad} alt="" className="sad-smiley"/>
                <div className="empty-info">
                        <p>It's empty here</p> 
                        <p>Start shopping to add items to your bag</p> 
                        <button className="buy-button">Back to home page</button>  
                </div>
            </section> */}
            <Fullbag />
        </div>
    )
}

export default Bag;