import React from 'react';
import { Link } from 'react-router-dom';
import truckImg from '../assets/truck.png';
import groupImg from '../assets/office-people.png'
import GoogleMapImg from "../assets/google-map.jpeg";
import CartLoadImg from '../assets/cart-load.png';
import GlobalTransportImg from '../assets/global-transport1.png';
import FastDeliveryImg from '../assets/fast-delivery.png';
import HighwayImg from '../assets/highway.png';

const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: '#c3edea' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h1 style={{ fontSize: '60px' }}><b>Transport</b></h1>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a document.</p>
                            <div>
                                <Link to="/login"><button type="button" className="btn btn-danger title-button">Book Services</button></Link>
                            </div>
                        </div>
                        <div className='col-6' style={{ paddingLeft: '203px', paddingTop: '50px', paddingBottom: '50px' }}>
                            <img style={{ width: '90%' }} src={truckImg} alt="truck" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div className='row' style={{ backgroundColor: 'white', width: '100%' }}>
                <h1 style={{ textAlign: 'center', padding: '0px', margin: '62px 0' }}><b>About Us</b></h1>
                <div className='col-6' style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', textAlign: 'center', padding: '0px 200px' }}>
                    <p>Welcome to EasyVahan, your number one source for all things [product]. We're dedicated to providing you the very best of Transport services.
                        Founded in 2020 by Bytecoder , EasyVahan has come a long way from its beginnings in West Bengal.</p>

                    <p>&nbsp;&nbsp; When Bytecoder first started out, their passion for Reduce cost of Tranport drove them to start their own business.
                        We hope you enjoy our Services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                </div>
                <div className='col-6' style={{ padding: '0px' }} >
                    <img src={groupImg} alt="people" width={'70%'} />
                </div>
            </div>

            {/* Our Services */}
            <div style={{ backgroundColor: '#ffeadb', marginTop: '92px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ padding: '5%' }}><b>Our Services</b></h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={CartLoadImg} alt="cart" style={{ width: '20%' }} />
                            <h4 style={{ marginTop: '10px' }}><b>Packaging And Storage</b></h4>
                            <p style={{ margin: '3% 20%' }}>Packaging is the technology of enclosing or protecting products for distribution, storage, sale, and use.</p>
                        </div>

                        <div className="col-lg-6">
                            <img src={GlobalTransportImg} alt="transport" style={{ width: '20%' }} />
                            <h4><b>Worldwide Transport</b></h4>
                            <p style={{ margin: '3% 20%' }}>We are one of teh worlwide transport company in the world, we provide on time service.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-6">
                            <img src={FastDeliveryImg} alt="delivery" style={{ width: '20%' }} />
                            <h4><b>Door to Door delivery</b></h4>
                            <p style={{ margin: '3% 20%' }}>Technology of enclosing or protecting products for distribution, storage, sale, and use.</p>
                        </div>

                        <div className=" col-lg-6">
                            <img src={HighwayImg} alt="highWay" style={{ width: '20%' }} />
                            <h4><b>Ground Transport</b></h4>
                            <p style={{ margin: '3% 20%' }}>Worlwide transport company in the world, we provide on time service through ground.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Contact us */}
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
                                    Admin@EasyVahan.com<br />
                                    www.EasyVahan.com</p>
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

            {/* Footer */}
            <div style={{ backgroundColor: '#27323a', padding: '0% 10%', textAlign: 'center', marginTop: '5%', paddingTop: '40px' }}>
                <div className="row">
                    <div className="col-lg-4 col-md-2" style={{ color: 'white' }}>
                        <h4>Contact</h4>
                        <div className="footer-contact">
                            <div className="address">
                                <h6><i className="fas fa-map-marker-alt"></i> Address</h6>
                                <p>56,Kolkata xyz market <br />West Bengal -700112</p>
                            </div>
                            <div className="Contact">
                                <h6><i className="fas fa-phone-alt"></i> Contact us</h6>
                                <p>(033) 56568989 <br />
                                    Admin@EasyVahan.co <br />
                                    www.EasyVahan.com</p>
                            </div>
                            <div className="Social-media">
                                <h6><i className="fas fa-hashtag"></i> Social media</h6>
                                <div className="Social-media-icon-bottom" style={{ color: 'white' }}>
                                    <a href="/" style={{ padding: '0% 2%' }}><i className="fab fa-twitter "></i></a>
                                    <a href="/" style={{ padding: '0% 2%' }}><i className="fab fa-facebook-f "></i></a>
                                    <a href="/" style={{ padding: '0% 2%' }}><i className="fab fa-instagram "></i></a>
                                    <a href="/" style={{ padding: '0% 2%' }}><i className="fas fa-envelope "></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-2" >
                        <h4 style={{ color: 'white' }}>Navigation</h4>
                        <div className="navigation">
                            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>Home</h6>
                            </a>
                            <a href="/Services" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>Services</h6>
                            </a>
                            <a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>Contact Us</h6>
                            </a>
                            <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>About Us</h6>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-2">
                        <h4 style={{ color: 'white' }}>Useful links</h4>
                        <div className="navigation">
                            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>privacy Policy</h6>
                            </a>
                            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>Forum</h6>
                            </a>
                            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>Support</h6>
                            </a>
                            <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
                                <h6>FAQ</h6>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyright" style={{ textAlign: 'center', padding: "30px 0" }}>
                    <p style={{ color: 'white', marginBottom: '0%' }}>copyright @ 2020 EasyVahan</p>
                </div>
            </div>
        </>
    )
}

export default Home