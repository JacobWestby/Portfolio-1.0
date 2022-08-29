import quote from "../images/quote-left-solid.svg";
import facebook_icon from "../images/facebook-icon.svg";
import linkedin_icon from "../images/linkedin-icon.svg";
import pintrest_icon from "../images/pintrest-icon.svg";
import twitter_icon from "../images/twitter-icon.svg";
import youtube_icon from "../images/youtube-icon.svg";
import GoBackBtn from "./reusableComponents/GoBackBtn";


const BhramonProject = ({ BackArrow }) => {
    return (
        <div className="bhramon-body">
            <GoBackBtn BackArrow={BackArrow} />
            <header className="bhramon-header">
                <div className="bhramon-top__container">
                    <div className="bhramon-search">
                        <div className="bhramon-search__text">
                            <h1>BHROMAON</h1>
                            <p>Safe Travel Anywhere</p>
                        </div>
                        <div className="bhramon-search__search">
                            <form action="#">
                                <input type="text" name="search" id="search" placeholder="Search Your Travel Destination" />
                                <input type="button" value="Search" />
                            </form>
                        </div>
                        <div className="bhramon-search__scroll">
                            <a href="#scroll">Scroll Down</a>
                            <a href="#scroll"><img src={require("../images/arrow down.png")} alt="arrow down" /></a>
                        </div>
                    </div>
                </div>

                <nav>
                    <div className="bhramon-nav__cont">
                        <h2 className="bhramon-nav__cont-logo" id="scroll">BHROMAON</h2>
                        <ul className="bhramon-nav__cont-links">
                            <li><a href="#">who we are</a></li>
                            <li><a href="#">what we do</a></li>
                            <li><a href="#">travel with us</a></li>
                            <li><a href="#">contact us</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="bhramon-main">
                <div className="bhramon-choose__background">
                    <div className="bhramon-choose__">
                        <div className="bhramon-choose__content">
                            <h3>Why Choose Us</h3>
                            <p>Tion and dislike men who are so beguiled and demoralized by desire by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
                            <p>Ddislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that.</p>
                            <button type="button">Explore Places</button>
                        </div>
                        <div className="bhramon-choose__images">
                            <img src={require("../images/house-over-water.png")} alt="House by a lake" />
                            <img src={require("../images/mountains-small.png")} alt="Mountains" />
                        </div>
                    </div>
                </div>

                <div className="bhramon-how__it-works"></div>

                <div className="bhramon-spain__top">
                    <div className="bhramon-spain__top-cont bhramon-spain__content">
                        <h5>spain</h5>
                        <h4>grand spain madrid</h4>
                        <p>But I must explain to you how all this mistaken idea of account to denouncing pleasure and praising pain was account born and I account will give you a complete account of the system</p>
                        <button type="button">BOOK NOW</button>
                    </div>
                </div>

                <div className="bhramon-spain__bottom">
                    <div className="bhramon-spain__bottom-cont bhramon-spain__content">
                        <h5>spain</h5>
                        <h4>grand spain madrid</h4>
                        <p>But I must explain to you how all this mistaken idea of account to denouncing pleasure and praising pain was account born and I account will give you a complete account of the system</p>
                        <button type="button">BOOK NOW</button>
                    </div>
                </div>

                <div className="bhramon-tourist__">
                    <h3>What Our Tourists Say</h3>
                    <div className="bhramon-tourist__cont">
                        <img src={require("../images/person-mountain.png")} alt="Person looking out over mountains" />
                        <div className="bhramon-tourist__cont-text">
                            <h5>Sam Sumon</h5>
                            <p>
                                <span><img className="bhramon-quote" src={quote} alt="quote" /></span>But I must explain to you how all this mistaken idea of account to denouncinpleasure and praising pain
                                But I must explain to you how all this mistaken idea of account to nai denouncing pleasure and praising pain was account born and I account will give you a complete account of the system
                                was account born and I account will give you a nai the complete account of the system
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="bhramon-footer">
                    <div className="bhramon-footer__cont">
                        <h6>BHROMAON</h6>
                        <p>Safe Travel Anywhere</p>
                        <div className="bhramon-footer__cont-links">
                            <a href="#"><img src={facebook_icon} alt="Facebook" /></a>
                            <a href="#"><img src={twitter_icon} alt="Twitter" /></a>
                            <a href="#"><img src={linkedin_icon} alt="Linked-in" /></a>
                            <a href="#"><img src={youtube_icon} alt="Youtube" /></a>
                            <a href="#"><img src={pintrest_icon} alt="Pintrest" /></a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default BhramonProject