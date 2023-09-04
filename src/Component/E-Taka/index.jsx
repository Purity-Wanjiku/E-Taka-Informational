import React from "react";
import { useState } from "react";
import './style.css'
import { OvalShape, VCutout, CustomerReview } from "../../Atom";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';



export const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  // Function to close the menu when a link is clicked (for small screens)
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  return (
    <div>
      <div className="nav-bar-container">
        <img src="media/logo.png" alt="Logo"></img>

        {/* Hamburger menu button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
          <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>

        {/* Navigation links */}
        <div className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/home" className={`nav-link ${selectedNav === null ? 'active' : ''}`} onClick={() => {handleNavClick(null); closeMenu();}}>
            Home
          </a>
          <a href="/services" className={`nav-link ${selectedNav === 'offer' ? 'active' : ''}`} onClick={() => {handleNavClick('offer'); closeMenu();}}>
            Services
          </a>
          <a href="/about" className={`nav-link ${selectedNav === 'service' ? 'active' : ''}`} onClick={() => {handleNavClick('service'); closeMenu();}}>
            About
          </a>
          <a href="/reviews" className={`nav-link ${selectedNav === 'menu' ? 'active' : ''}`} onClick={() => {handleNavClick('menu'); closeMenu();}}>
            Reviews
          </a>
          <a href="/contact" className={`nav-link ${selectedNav === 'about' ? 'active' : ''}`} onClick={() => {handleNavClick('about'); closeMenu();}}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};




export const Home =()=>{
    return(
        <div className="centred-section">
        <div className="section-container">
            <div className="home-section">
            <img className="home" src="media/home.png"/>
            </div>
        </div> 
        </div>
    )
}  

export const Services = () => {
    return (
        <div className="centred-section">
        <div className="section-container">
            <div className="header">
                <h1 className="title">Services</h1>
            </div>

            <div className="service-content">
                <div className="left-col">
                    <h1 className="mini-title">Give your old elctronics a new life</h1>
                    <p className="service-text">Sell them to us, and we will recycle them and sell the recycled products at a fraction of the cost of new ones.</p>
                    <a href="#"><img src="media/button.png"></img></a>
                </div>
                <div className="right-col">
                    <img className="phone-image" src="media/E-TAKA.png"/>    
                </div>
            </div>
            </div>
        </div>
    )
}


export const Team =()=>{
    return(
    <div className="centred-section"> 
      <div className="section-container">
        <div style={{marginTop:"15%"}}>
        
          <div className="header">
                <h1 className="title">Team</h1>
            </div>
      <div className="team-container">
      <OvalShape imageUrl="media/amakove.png" name="Bridgit Amakove" role="Back-end developer"/>
      <OvalShape imageUrl="media/linet.png" name="Linet Musembi" role="Android developer"/>
      <OvalShape imageUrl="media/purity.png" name="Purity Ndirangu" role="Back-end developer"/>
      <OvalShape imageUrl="media/nyeliepgiel.png" name="Nyeliep Giel" role="Front-end developer"/>
      <OvalShape imageUrl="media/kenyani.png" name="Rachel Kenyani" role="UI/UX designer"/>
    </div>
    </div>
    </div>
    </div>
    )
}



  export const About = () => {
    return (
        <div className="centred-section">
          <div className="section-container">
           
            <div className="header">
                <h1 className="title">About Us</h1>
                <h2>Vision</h2>
                <p>To empower responsible e-waste disposal in Kenya.</p>
            </div>

      <div className="header">
      <h1 className="title">Core Values</h1>
      </div>
       
        <div className="values-container">
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Customer Satisfaction"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="media/Vector.png" />
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Community Engagement"  text="We seek to engage with the community and raising awareness about the importance of e-waste recycling. " imageUrl="media/Vector (2).png"   />
        <VCutout backgroundColor="#093121" triangleColor="#093121" h1="Sustainabilty"  text="We are committed to providing a high-quality service to its customers by making it easy for people to recycle their e-waste, and providing them with a fair price for their old devices." imageUrl="media/Vector (3).png" />
      </div>
      </div>
      </div>
   
    );
  };


export const Reviews = () => {
    return (
        <div className="centred-section">
      <div className="section-container">
          <div className="header">
                <h1 className="title">Reviews</h1>
            </div>
        <div className="customer-reviews">
        <CustomerReview  h1="Rose"  text="I recently purchased a Solar battery from E-Taka, and I couldn’t be happier with my online shopping experience. Their app was user-friendly, making it easy to find the perfect item." imageUrl="media/rose.jpg" />
        <CustomerReview h1="Linet"  text="The idea of a marketplace for recyclables is fantastic, and this e-waste platform is on the right track. I appreciate the effort to turn waste into valuable products.  " imageUrl="media/pin.jpg"   />
        < CustomerReview  h1="Rachel"  text="Dealing with e-waste used to be a headache for me until I discovered this website. The process of arranging a pickup for my old electronics was incredibly simple and quick" imageUrl="media/pin.jpg" />
        </div>
      </div>
      </div>
    );
  };


 export const Contact = () => {
    return (
        <div className="centred-section">
        <div className="section-container">
            <div className="header">
                <h1 className="title">Contact Us</h1>
            </div>
           
        <div className="contact-container">
                <div className="contact">
                    <h1>Meet the Team</h1>
                    <div className="contact-info">
                        <img src="media/location.png" alt="Location" className="icon" />
                        <p>Nairobi, Kenya</p>
                    </div>
                    <div className="contact-info">
                        <img src="media/mail.png" alt="Email" className="icon" />
                        <p>xyz@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <img src="media/phone.png" alt="Phone" className="icon"/>
                        <p>+254 712 345 678</p>
                    </div>
                    </div>
             
                <div className="message-container">
                    <h1>Send a message</h1>
                    <div className="contact-input">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email address" />
                    <textarea placeholder="Message"></textarea>
                    <button className="btn" onClick={() => { /* Add send functionality here */ }}>Send</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-section">

                    <h4>COMPANY</h4>
                    <ul>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>OFFICES</h4>
                    <ul>
                        <li>
                            <a href="#">Karen, Nairobi</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <a href="#">Tel: +254000034278</a>
                        </li>
                        <li>
                            <a href="#">info@e-taka.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="foot-section">
                    <ul className="social-icons">
                        <li>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>

                    <small>E-Taka 2023, all rights reserved</small>
                </div>
                </div>
        </footer>
    );
};