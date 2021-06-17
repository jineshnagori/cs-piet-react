import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="full-width-header header-style1 home1-modifiy home12-modifiy">
                <header id="rs-header" className="rs-header">
                    <div className="topbar-area home11-topbar">
                        <div className="container">
                            <div className="row y-middle">
                                <div className="col-md-5">
                                    <ul className="topbar-contact">
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <a href="mailto:info@poornima.org">info@poornima.org</a>
                                        </li>
                                        <li>
                                            <i className="fa flaticon-call"></i>
                                            <a href="tel:+919928666222"> +91-9928 666 222</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-7 text-right">
                                    <ul className="toolbar-sl-share">
                                        <li className="opening"> <i className="flaticon-location"></i> Poornima Group of Colleges ISI-2, RIICO Institutional Area Sitapura, Jaipur </li>
                                        <li><a href="https://www.facebook.com/Poornima.College.Engineering" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/poornimacollege" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UC2msVsvmUenma6MNv_KWCZw?view_as=subscriber" target="_blank"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="https://www.linkedin.com/school/15112254" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/poornimacollege" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="row y-middle">
                                <div className="col-lg-2">
                                    <div className="logo-cat-wrap">
                                        <div className="logo-part">
                                            <Link to="/">
                                                <img src="assets/images/piet-logo.png" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 text-right">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <div className="mobile-menu">
                                                <Link className="rs-menu-toggle">
                                                    <i className="fa fa-bars"></i>
                                                </Link>
                                            </div>
                                            <nav className="rs-menu">
                                                <ul className="nav-menu">
                                                    <li>
                                                        <Link to="/">Home</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/About">About</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/Contact">Contact</Link>
                                                    </li>

                                                    <li>
                                                        <a href="https://accounts.google.com/o/oauth2/auth?response_type=code&redirect_uri=http%3A%2F%2Fwww.cspiet.poornima.org%2Findex.php&client_id=146462189985-ujocifeekp8s68tae66j9oafgcogm533.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=force">Login</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </header>

            </div>

        </>
    )
}
