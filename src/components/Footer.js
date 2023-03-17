import React from 'react'


const Footer = () => {
    return (
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
                            <h6>Contact-us</h6>
                        </a>
                        <a href="/about" style={{ textDecoration: 'none', color: 'white' }}>
                            <h6>About-us</h6>
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
    )
}

export default Footer