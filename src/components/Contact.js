import React, { useEffect } from 'react';
import GoogleMapImg from '../assets/google-map.jpeg';


const Contact = () => {

    return (
        <div className='container'>
            <h1 style={{ padding: '5%', marginLeft: '480px' }}><b>Contact Us</b></h1>
            <div className="row">
                <div className="col-lg-6" style={{ marginLeft: '100px' }}>
                    <h4 style={{ paddingBottom: '3%' }}><b>CONTACT INFORMATION</b></h4>
                    <div className="column">
                        <img src={GoogleMapImg} style={{ width: '80%' }} alt="map" />
                    </div>
                    <div className="contact-information">
                        <h5 style={{ marginTop: '25px' }}><b>WANT TO HELP OR HAVE QUESTIONS ?</b></h5>
                        <div className="address" >
                            <h6><i className="fas fa-map-marker-alt"></i><b>Address</b></h6>
                            <p style={{ margin: '3% 15%' }}>56,Kolkata xyz market<br /> West Bengal -700112</p>
                        </div>
                        <div className="Contact">
                            <h6><i className="fas fa-phone-alt"></i><b>Contact us</b></h6>
                            <p style={{ margin: '3% 15%' }}>(033) 56568989<br />
                                Admin@XYZ.com<br />
                                www.XYZ.com</p>
                        </div>
                        <div className="social-media">
                            <h6><i className="fas fa-hashtag"></i><b>Social media</b></h6>
                            <div className="social-media-icon" style={{ margin: '3% 15%' }}>
                                <a href="/" style={{ padding: '0% 2%' }} ><i className="fab fa-twitter  "></i></a>
                                <a href="/" style={{ padding: '0% 2%' }} ><i className="fab fa-facebook-f "></i></a>
                                <a href="/" style={{ padding: '0% 2%' }} ><i className="fab fa-instagram "></i></a>
                                <a href="/" style={{ padding: '0% 2%' }} ><i className="fas fa-envelope  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{ marginLeft: '51%', marginTop: '-58%' }}>
                    <h4><b>GET IN TOUCH WITH US</b></h4>
                    <div className="column">
                        <div className="form-section">
                            <form action="#" style={{ marginRight: '86%' }}>
                                <label htmlFor="fname" style={{ margin: '10px 0' }}>First Name:</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your first name.." style={{ padding: '12px', paddingRight: '384%', border: '1px solid #00000059', borderRadius: '5px' }} />
                                <label htmlFor="lname" style={{ margin: '10px 0' }}>Last Name:</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={{ padding: '12px', paddingRight: '384%', border: '1px solid #00000059', borderRadius: '5px' }} />
                                <label htmlFor="email" style={{ margin: '10px 0' }}>Email:</label>
                                <input type="email" id="email" name="email" placeholder="Your email id.." style={{ padding: '12px', paddingRight: '384%', border: '1px solid #00000059', borderRadius: '5px' }} />
                                <label htmlFor="country" style={{ margin: '10px 0' }}>Country:</label>
                                <select id="country" name="country" style={{ padding: '14px', paddingRight: '485%', border: '1px solid #00000059', borderRadius: '5px' }}>
                                    <option value="australia">India</option>
                                    <option value="canada">Nepal</option>
                                    <option value="usa">China</option>
                                    <option value="usa">Bangladesh</option>
                                    <option value="usa">Myanmar</option>
                                    <option value="usa">Pakistan</option>
                                </select>
                                <label htmlFor="subject" style={{ margin: '10px 0' }}>Subject:</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '170px', padding: '12px', paddingRight: '411%', border: '1px solid #00000059', borderRadius: '5px' }}></textarea>
                                <button type="button" className="btn btn-danger btn-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact