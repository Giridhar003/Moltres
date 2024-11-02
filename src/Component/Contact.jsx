import React, { useState } from 'react';
import Logo from '../assets/3870798.png';
import Logo1 from '../assets/firefighter-logo-design-with-fire-illustration_567423-40.avif';
import "./Contact.css";

export default function Contact() {
    const [showCard, setShowCard] = useState(false);
    const [showContact, setShowContact] = useState(true);

    const toggleContactCard = () => {
        setShowCard(true);
        setShowContact(false);
    };

    const hideContact = () => {
        setShowContact(true);
        setShowCard(false);

    };

    return (
        <div className="Contact-Container">
            {showContact && (
                <a className='Contact-anchor' onClick={toggleContactCard}>
                    <img src={Logo} alt="Logo" />
                </a>
            )}
            {showCard && (
                <div className="Card-Container">
                    <div className="Sub-container">
                        <button onClick={hideContact} className='card-button'>X</button>
                        <img src={Logo1} alt="Emergency" className='card-image' />
                        <p>Emergency Number</p>
                        <a href="/" className='card-anchor'>101</a>
                    </div>
                </div>
            )}
        </div>
    );
}
