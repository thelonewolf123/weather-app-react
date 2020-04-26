import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer footer-dark bg-dark text-center'>
            <footer>
                <div className="form inline-form">
                    <a href="#facebook" className="social"><i className="fa fa-facebook"></i> </a>
                    <a href="#instagram" className="social"><i className="fa fa-instagram"></i> </a>
                    <a href="#telegram" className="social"><i className="fa fa-telegram"></i> </a>
                </div>
                <div className='copyright text-center'>
                    &copy; Weather App 2019 - 2020
                </div>
            </footer>
        </div>
    );
}

export default Footer;