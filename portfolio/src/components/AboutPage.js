import CenteredCont from "./reusableComponents/CenteredCont"
import Footer from "./reusableComponents/Footer";

import jacobWestby2 from '../images/jacobWestby2.jpg';
import ourVan2 from '../images/ourVan2.jpg';
import Nav from "./reusableComponents/Nav";
import icons8Github from "../images/icons8Github.svg";
import icons8Linkedin from "../images/icons8Linkedin.svg";

const AboutPage = () => {
    return (
        <>
            <Nav />
            <div className="about-background">
                <CenteredCont>
                    <header>
                        <div className="about__cont-top">
                            <img src={jacobWestby2} alt="Jacob Westby eating icecream" />
                            <div className="about__cont-top-text">
                                <h2>Jacob Westby</h2>
                                <p>- Get to know me</p>
                            </div>
                        </div>
                    </header>
                    <main className="about__main">
                        <div className="about__main__cont-1">
                            <div className="about__main__cont-1-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta, quam non hic corporis laborum nulla repellendus aut quo impedit nemo molestiae totam autem optio ea iure! Similique, illum voluptate!</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi optio eveniet laboriosam explicabo illo odio nobis consequatur dolorem esse, iste tempora iusto obcaecati molestiae quibusdam dignissimos! Quam, minus recusandae.</p>
                            </div>
                            <div className="about__main__cont-1__img-cont">
                                <img src={ourVan2} alt="Mercedes sprinter van" className="about__main__cont-1__img-cont_img1" />
                                <img src={jacobWestby2} alt="" className="about__main__cont-1__img-cont_img2" />
                            </div>
                        </div>

                        <div className="about__main__cont-2">
                            <div className="about__main__cont-2-text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates soluta, quam non hic corporis laborum nulla repellendus aut quo impedit nemo molestiae totam autem optio ea iure! Similique, illum voluptate!</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi optio eveniet laboriosam explicabo illo odio nobis consequatur dolorem esse, iste tempora iusto obcaecati molestiae quibusdam dignissimos! Quam, minus recusandae.</p>
                            </div>
                            <img src={ourVan2} alt="Mercedes sprinter van" className="van" />
                        </div>
                    </main>
                </CenteredCont>
            </div>
            <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
        </>
    )
}

export default AboutPage