import productlyLogo from "../images/ProductlyLogo.svg";
import ToTopBtn from "./reusableComponents/ToTopBtn";

const ProductlyProject = () => {
    return (
        <div className="productly-body">
            <ToTopBtn />
            <header className="productly-header">
                <nav className="productly-nav">
                    <img src={productlyLogo} alt="page logo" className="productly-logo" />
                    <ul className="productly-nav__list">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                    <button className="productly-nav__btn productly-sign-in">Sign In</button>
                    <button className="productly-nav__btn productly-sign-up">Sign Up</button>
                </nav>

                <div className="productly-header__cont">
                    <h1>The Design Thinking superpowers</h1>
                    <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                    <button className="productly-get__started">Get started</button>
                    <img src={require("../images/watch_video_triangle.png")} alt="Play triangle" className="productly-play" />
                    <a href="#" className="productly-watch__video">Watch the video</a>
                </div>
                <img src={require("../images/header__img.png")} alt="Illustration of people jumping" className="productly-header__img" />
            </header>


            <main className="productly-main">

                <section className="productly-cards">
                    <h2>
                        We design tools to unveil <br />
                        your superpowers
                    </h2>
                    <div className="productly-container">
                        <div className="productly-cont__card">
                            <img src={require("../images/card-img-mouse.png")} alt="Illustration of a mouse pointer" className="productly-cont__card-img" />
                            <h3>First click tests</h3>
                            <p>While most people enjoy casino gambling,</p>
                        </div>
                        <div className="productly-cont__card">
                            <img src={require("../images/card-img-squiggly.png")} alt="Illustration of a Squiggly line" className="productly-cont__card-img" />
                            <h3>Design surveys</h3>
                            <p>Sports betting, lottery and bingo playing for the fun</p>
                        </div>
                        <div className="productly-cont__card">
                            <img src={require("../images/card-img-heart.png")} alt="Illustration of a heart" className="productly-cont__card-img" />
                            <h3>Preference tests</h3>
                            <p>The Myspace page defines the individual.</p>
                        </div>
                        <div className="productly-cont__card">
                            <img src={require("../images/card-img-time.png")} alt="Illustration of an Hourglass" className="productly-cont__card-img" />
                            <h3>Five second tests</h3>
                            <p>Personal choices and the overall personality of the person.</p>
                        </div>
                        <button className="productly-sign__up-now">Sign up now</button>
                    </div>
                </section>

                <section className="productly-text__content-1">
                    <div className="productly-text__content-container-1">
                        <p>Effortless Validation for</p>
                        <h2>Design Professionals</h2>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                        <h3>Accessory makers</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3>Alterationists</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                        <h3>Custom Design designers</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                    </div>
                    <img src={require("../images/text-content-img1.png")} alt="Illustration of person recieving messages" className="productly-text__content-img-1" />
                </section>


                <section className="productly-text__content-2">
                    <div className="productly-text__content-container-2">
                        <p>Easier decision making for</p>
                        <h2>Product Managers</h2>
                        <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                        <div className="productly-cont__checkmark">
                            <div className="productly-inner__checkmark">
                                <img src={require("../images/checkmark.png")} alt="checkmark" />
                                <p>Never worry about overpaying for your energy again.</p>
                            </div>
                            <div className="productly-inner__checkmark">
                                <img src={require("../images/checkmark.png")} alt="checkmark" />
                                <p>We will only switch you to energy companies that we trust and will treat you right</p>
                            </div>
                            <div className="productly-inner__checkmark">
                                <img src={require("../images/checkmark.png")} alt="checkmark" />
                                <p>We track the markets daily and know where the savings are.</p>
                            </div>
                        </div>
                    </div>
                    <img src={require("../images/text-content-img2.png")} alt="Illustration of person sending messages" className="productly-text__content-img-2" />
                </section>


                <section className="productly-text__content-3">
                    <div className="productly-text__content-container-3">
                        <p>Optimisation for</p>
                        <h2>Marketers</h2>
                        <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior.</p>
                        <h3>Accessory makers</h3>
                        <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h3>Alterationists</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                        <h3>Custom Design designers</h3>
                        <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
                    </div>
                    <img src={require("../images/text-content-img3.png")} alt="Illustration of person recieving messages" className="productly-text__content-img-3" />
                </section>
            </main>


            <footer className="productly-footer">
                <img src={productlyLogo} alt="Logo" className="productly-logo" />
                <div className="productly-footer__cont">
                    <div className="productly-footer__cont-links productly-links-cont-left">
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className="productly-footer__cont-links productly-links-cont-right">
                        <a href="#">Disclaimer</a>
                        <a href="#">Financing</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <div className="productly-footer__sign-up">
                        <input type="text" />
                        <button className="productly-sign-up productly-footer__sign-up-btn">Sign Up</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ProductlyProject