
const test = () => {
    return (
        <div className="genesis-body">
            <div className="genesis-header">
                <nav>
                    <h1 className="genesis-logo"><a className="genesis-logo-a" href="index.html">Genesis</a></h1>
                    <ul className="genesis-nav__list">
                        <li className="genesis-nav__list-item"><a href="./pages/projects.html">Projects</a></li>
                        <li className="genesis-nav__list-item"><a href="./pages/contact.html">Contact</a></li>
                    </ul>
                </nav>


                <div className="genesis-genesis-header__content">
                    <h2>Shooting stars</h2>
                    <div className="genesis-header__content-flex">
                        <p className="genesis-header__content-flex-text">Hello, I’m Bakhtiyar Sattarov, <span className="genesis-header__content-flex-purple">product designer</span> with experience in studios and startups</p>
                        <p className="genesis-header__content-flex-quote">Design is about process</p>
                    </div>
                </div>
            </div>

            <div className="genesis-main">
                <div className="genesis-grid__container">
                    <img src={require("../projects/genesis/images/cactus-img4.png")} alt="Statue" className="genesis-grid__container-item1 grid-item" />
                    <img src="images/thinking-img2.png" alt="Person thinking" className="genesis-grid__container-item2 grid-item" />
                    <img src="images/flower-face-img3.png" alt="Face cracked with flowers" className="genesis-grid__container-item3 grid-item" />
                    <img src="images/cactus-img4.png" alt="Person on a cactus" className="genesis-grid__container-item4 grid-item" />
                    <img src="images/liberty-img5.png" alt="Statue of Liberty illustration" className="genesis-grid__container-item5 grid-item" />
                    <img src="images/face-white-img6.png" alt="Face with white paint" className="genesis-grid__container-item6 grid-item" />
                    <img src="images/moon-img7.png" alt="Moon illustration" className="genesis-grid__container-item7 grid-item" />
                    <img src="images/color-balls-img8.png" alt="Colored lines and balls" className="genesis-grid__container-item8 grid-item" />
                    <img src="images/piano-img9.png" alt="Piano illustration" className="genesis-grid__container-item9 grid-item" />
                    <img src="images/flower-field-img10.png" alt="Person in a field of flowers" className="genesis-grid__container-item10 grid-item" />
                    <img src="images/sunset-img11.png" alt="Person walking towards a sunset" className="genesis-grid__container-item11 grid-item" />
                    <img src="images/green-ikmg12.png" alt="Green flowers" className="genesis-grid__container-item12 grid-item" />
                </div>


                <div className="genesis-text__content">
                    <h3>We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details</h3>

                    <div className="genesis-text__content-items-cont">
                        <div className="genesis-flex__left">
                            <p className="genesis-text__content-items-cont-items">Multimedia</p>
                            <p className="genesis-text__content-items-cont-items">Interactive Design</p>
                            <p className="genesis-text__content-items-cont-items">Branding</p>
                        </div>
                        <div className="genesis-flex__right">
                            <p className="genesis-text__content-items-cont-items">Creative Design</p>
                            <p className="genesis-text__content-items-cont-items">Packaging</p>
                            <p className="genesis-text__content-items-cont-items">Coding</p>
                        </div>
                    </div>
                </div>

                <div className="genesis-awards__grid">
                    <h2 className="genesis-awards-item1">Awards</h2>

                    <h3 className="genesis-awards-item2">Site of the day</h3>

                    <div className="genesis-awards-item3">
                        <h4>Genisis UI kit</h4>
                        <p>Application that helps to find nearest sport centres in your area</p>
                    </div>

                    <p className="genesis-awards-item4">2018</p>

                    <h3 className="genesis-awards-item5">Best navigation</h3>

                    <div className="genesis-awards-item6">
                        <h4>Genesis Template</h4>
                        <p>Application that helps to find nearest sport centres in your area</p>
                    </div>

                    <p className="genesis-awards-item7">2018</p>
                </div>

                <div className="genesis-design__grid">
                    <h2 className="genesis-awards-item1">CSSDesign Awards</h2>

                    <h3 className="genesis-awards-item2">Site of the day</h3>

                    <div className="genesis-awards-item3">
                        <h4>Genisis UI kit</h4>
                        <p>Application that helps to find nearest sport centres in your area</p>
                    </div>

                    <p className="genesis-awards-item4">2017</p>

                    <h3 className="genesis-awards-item5">Best navigation</h3>

                    <div className="genesis-awards-item6">
                        <h4>Genesis Template</h4>
                        <p>Application that helps to find nearest sport centres in your area</p>
                    </div>

                    <p className="genesis-awards-item7">2017</p>
                </div>
            </div>

            <div className="genesis-footer">
                <h2 className="genesis-footer__logo">Genesis</h2>
                <div className="genesis-footer__links">
                    <div className="genesis-footer__links-pages">
                        <a href="./pages/projects.html">Projects</a>
                        <a href="./pages/contact.html">Contact</a>
                    </div>
                    <div className="genesis-footer__links-socials">
                        <img src="images/fotter-logo-ball.png" alt="Link to not sure what social that is" />
                        <img src="images/fotter-logo-insta.png" alt="Link to instagram" />
                        <img src="images/fotter-logo-twitter.png" alt="Link to twitter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default test