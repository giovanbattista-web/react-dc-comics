const Footer = () => {
    return (
        <footer>
            <div className="footer_alto">
                <div className="container">
                    <div className="row">
                        <div className="column_footer">
                            <div>
                                <h4 className="color_lista">DC COMICS</h4>
                                <ul>
                                    <li><a href="#">Characters</a></li>
                                    <li><a href="#">Comics</a></li>
                                    <li><a href="#">Movies</a></li>
                                    <li><a href="#">TV</a></li>
                                    <li><a href="#">Games</a></li>
                                    <li><a href="#">Videos</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                                <h4 className="color_lista">SHOP</h4>
                                <ul>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column_footer">
                        <h4 className="color_lista">DC</h4>
                        <ul>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy(New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings </a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="column_footer">
                        <h4 className="color_lista">SITES</h4>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
            </div >
            <div className="footer_basso">
                <div className="container">
                    <div className="col-50">
                        <button className="button">SIGN-UP NOW!</button>
                    </div>
                    <div className="text-right">
                        <div className="col-50 flex gap">
                            <h3 className="color_azzurro_testo padding-top ">FOLLOW US</h3>
                            <img className="padding_logo" src="./public/img/footer-facebook1.png" alt="foto" />
                            <img className="padding_logo" src="./public/img/footer-twitter1.png" alt="foto" />
                            <img className="padding_logo" src="./public/img/footer-youtube1.png" alt="foto" />
                            <img className="padding_logo" src="./public/img/footer-pinterest1.png" alt="foto" />
                            <img className="padding_logo" src="./public/img/footer-periscope1.png" alt="foto" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;