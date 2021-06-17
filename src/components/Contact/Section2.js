import React from 'react'

export default function Section2() {
    return (
        <>
        <div className="contact-page-section pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="rs-contact-img mb-90">
                    <div className="row">
                        <div className="col-lg-6 md-mb-30">
                            <div className="img-part js-tilt">
                                <img src="assets/images/contact/contact4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-15">
                            <div className="contact-map3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.2416822540736!2d75.84852641500841!3d26.76856498318991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sPoornima%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1613654634518!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-90 md-mb-50">
                    <div className="col-lg-4 col-md-12 md-mb-30">
                        <div className="rs-contact-wrap">
                            <div className="inner-part text-center">
                                <h2 className="title2">General</h2>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Email Addresss</span>
                                    <span className="des">info@poornima.org</span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone Number</span>
                                    <span className="des"><a href="tel:">0000000000</a></span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-map-signs"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Address</span>
                                    <span className="des">Jaipur </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 md-mb-30">
                        <div className="rs-contact-wrap">
                            <div className="inner-part text-center">
                                <h2 className="title2">Admissions</h2>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Email Address</span>
                                    <span className="des">admission@poornima.org</span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone Number 1</span>
                                    <span className="des"><a href="tel:">0000000000</a></span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone Number 2</span>
                                    <span className="des"><a href="tel:">000000000</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="rs-contact-wrap">
                            <div className="inner-part text-center">
                                <h2 className="title2">Emergency</h2>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Email Address</span>
                                    <span className="des">emergency@poornima.org</span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone Number 1</span>
                                    <span className="des"><a href="tel:">0000000000</a></span>
                                </div>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-headphones"></i>
                                </div>
                                <div className="address-text">
                                    <span className="label">Phone Number 2</span>
                                    <span className="des"><a href="tel:">0000000000</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rs-quick-contact">
                    <div className="inner-part text-center mb-50">
                        <h2 className="title mb-15">Quick Contact</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, eius to mod<br />
                            tempor incidi dunt ut dolore.</p>
                    </div>
                    <div id="form-messages"></div>
                    <form id="contact-form" method="post"
                        action="#">
                        <div className="row">
                            <div className="col-lg-6 mb-35 col-md-12">
                                <input className="from-control" type="text" id="name" name="name" placeholder="Name"
                                    required="" />
                            </div>
                            <div className="col-lg-6 mb-35 col-md-12">
                                <input className="from-control" type="text" id="name" name="email" placeholder="Email"
                                    required="" />
                            </div>
                            <div className="col-lg-6 mb-35 col-md-12">
                                <input className="from-control" type="text" id="name" name="phone" placeholder="Phone"
                                    required="" />
                            </div>
                            <div className="col-lg-6 mb-35 col-md-12">
                                <input className="from-control" type="text" id="name" name="subject" placeholder="Subject"
                                    required="" />
                            </div>

                            <div className="col-lg-12 mb-50">
                                <textarea className="from-control" id="message" name="message" placeholder=" Message"
                                    required=""></textarea>
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <input className="btn-send" type="submit" value="Submit Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
