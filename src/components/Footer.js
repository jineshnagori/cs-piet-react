import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer id="rs-footer" className="rs-footer home9-style home12-style">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 footer-widget md-mb-50">
                                <div className="footer-logo mb-30">
                                    <Link to="/Main"><img src="assets/images/piet-logo.png" alt="" /></Link>
                                </div>
                                <ul className="footer_social">
                                    <li><a href="https://www.facebook.com/Poornima.College.Engineering" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/poornimacollege" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UC2msVsvmUenma6MNv_KWCZw?view_as=subscriber" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="https://www.linkedin.com/school/15112254" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.instagram.com/poornimacollege" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 footer-widget md-mb-50">
                                <h3 className="widget-title">Quick Links</h3>
                                <ul className="footer-quick-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/About">About</Link></li>
                                    <li><Link to="/Contact">Contact</Link></li>
                                    <li><a href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Fwww.cspiet.poornima.org%2Findex.php&client_id=146462189985-ujocifeekp8s68tae66j9oafgcogm533.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=force">Login</a></li>
                                </ul>

                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 footer-widget">
                                <h3 className="widget-title">Address</h3>
                                <ul className="address-widget">
                                    <li>
                                        <i className="flaticon-location"></i>
                                        <div className="desc">Poornima Group of Colleges (PGC) ISI-2, RIICO Institutional Area
                                            Sitapura, Jaipur - 302022</div>
                                    </li>
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <div className="desc">
                                            <a href="tel:(+880)155-69569">+91-9928 555 222</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="flaticon-email"></i>
                                        <div className="desc">
                                            <a href="mailto:info@poornima.org">info@poornima.org</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row y-middle">
                            <div className="col-lg-6 md-mb-20">
                                <div className="copyright">
                                    <p>&copy; <script>document.write(new Date().getFullYear())</script> All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
