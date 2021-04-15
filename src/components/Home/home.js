import React from 'react';
import Icon from '@mdi/react';
import { mdiBadgeAccount, mdiStorefrontOutline } from '@mdi/js';
import { mdiBagPersonalOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { mdiTruckDeliveryOutline } from '@mdi/js';
import { mdiShieldStarOutline } from '@mdi/js';
import { mdiHours24 } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';
import { Link, navigate } from '@reach/router';
import Carrot from '../../assets/images/carrot.jpg';
import Facemask from '../../assets/images/facemask.jpg';
import Protein from '../../assets/images/protein.png';
import Sad from '../../assets/images/sad.jpg';
import Twodoor from '../../assets/images/twodoor.jpg';
import Woodenleg from '../../assets/images/woodenleg.png';
import './home.css';

const Home = () => {
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
                            <p><Link to="/bag" className="link ">Bag</Link></p>
                        </div>
                        <div className="right-nav-flex">
                            <Icon path={mdiAccountOutline} size={1} className="right-icon"/>
                            <p>Account</p>
                        </div>
                    </div>
                </div>
            </nav>
            <hr />
            <div className="input">
                <input type="text" placeholder="Search for products..." />
                <Icon path={mdiMagnify} size={1} className="magnify-icon"/>
            </div>
            <section className="upper-section">
                <aside className="left-aside">
                    <p>Electronics [12]</p>
                    <p>Face Masks [3]</p>
                    <p>Fresh Food [8]</p>
                    <p>Grocery [6]</p>
                    <p>Home [24]</p>
                    <p>kids [9]</p>
                    <a>View all categories</a>
                </aside>
                <hr className="vertical"/>
                <main className="main">
                    <p>Electronics<span> 12</span></p>
                    <div className="main-box">
                        <img src={Facemask} alt="" className="main-icon"/>
                        <div className='middle'>
                            <p>Kids' 2pk cloth face masks</p>
                            <p>UGX 185,000</p>
                        </div>
                        <button className="add"><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add</button>
                    </div>
                    <div className="main-box">
                        <img src={Woodenleg} alt="" className="main-icon"/>
                        <div className='middle'>
                            <p><Link to="/product-details" className="link">Norbury Scandinavian Wooden leg Ottoman</Link></p>
                            <p>UGX 118,000</p>
                            <s>UGX 148,000</s>
                        </div>
                        <button className="add"><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add</button>
                    </div>
                    <div className="main-box">
                        <img src={Carrot} alt="" className="main-icon"/>
                        <div className='middle'>
                            <p>Kids' 2pk cloth face masks</p>
                            <p>UGX 185,000</p>
                        </div>
                        <button className="add"><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add</button>
                    </div>
                    <div className="main-box">
                        <img  src={Twodoor} alt="" className="main-icon"/>
                        <div className='middle'>
                            <p>Kids' 2pk cloth face masks</p>
                            <p>UGX 185,000</p>
                        </div>
                        <button className="add"><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add</button>
                    </div>
                    <div className="main-box">
                        <img src={Protein} alt="" className="main-icon"/>
                        <div className='middle'>
                            <p>Kids' 2pk cloth face masks</p>
                            <p>UGX 185,000</p>
                        </div>
                        <button className="add"><Icon path={mdiPlus} size={0.5} className="add-icon"/>Add</button>
                    </div> 
                </main>
                <hr className="vertical-1"/>
                <aside className="right-aside">
                    <p>Bag <span>0</span></p>
                    <img src={Sad} alt="" className="sad-icon"/>
                    <div>
                        <p>It's empty here</p>
                        <p>Start shopping to add items to your shopping bag</p>
                    </div>
                </aside>
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

export default Home;