import CenteredCont from "./reusableComponents/CenteredCont"
import Footer from "./reusableComponents/Footer";

import jacobWestby2 from '../images/jacobWestby2.jpg';
import menuBurger from '../images/menuBurger.svg';
import ourVan2 from '../images/ourVan2.jpg';
import Nav from "./reusableComponents/Nav";
import icons8Github from "../images/icons8Github.svg";
import icons8Linkedin from "../images/icons8Linkedin.svg";
import about_me_header from "../images/about_me_header.svg";

const AboutPage = () => {
    return (
        <>
            <Nav menuBurger={menuBurger} />
            <div className="about-background">
                <CenteredCont>
                    <header>
                        <div className="about__cont-top">
                            <h2>About Me</h2>
                            <img src={about_me_header} alt="Jacob Westby eating icecream" />
                            <div className="about__cont-top-text">
                                <p>Jacob Westby</p>
                            </div>
                        </div>
                    </header>
                    <main className="about__main">
                        <h3 className="about__main-heading-top">What i did before</h3>
                        <div className="about__main__cont-1">
                            <div className="about__main__cont-1-text">
                                <p>Before I started my web development journey I was working as a Lighttechnician in the event industry. Being a lighttech is a very demanding job both physically and mentally, there are a lot of heavy things to carry and push around and there are a lot of problems to solve.
                                </p>
                                <p>I worked in the event industry for several years but my last position before corona hit was at Stockholm International Fairs as Head of Lights and the fairs only Lightoperator.
                                </p>
                            </div>
                            {/* <div className="about__main__cont-1__img-cont">
                                <img src={ourVan2} alt="Mercedes sprinter van" className="about__main__cont-1__img-cont_img1" />
                                <img src={jacobWestby2} alt="" className="about__main__cont-1__img-cont_img2" />
                            </div> */}
                        </div>
                        <h3 className="about__main-heading-mid">What i've studied</h3>
                        <div className="about__main__cont-2">
                            <div className="about__main__cont-2-text">
                                <p>When corona hit, my last job shut down rather quickly and showed no signs of starting back up. So I started taking online courses in web development. I started with freecodecamp and some apps but soon found my way to Codecademy where I paid for a pro membership and really got into it.</p>
                                <p>I completed 85% of codecademy's fullstack course before some life stuff got in the way that led me to taking a break from coding. At this point I had been coding everyday for almost 1 year but working and building our van left no time for me to continue studying.</p>
                                <p>A few months after moving into the van I started an intensive front-end course that went on for 6 months which ended in May 2022.</p>
                            </div>
                            {/* <img src={ourVan2} alt="Mercedes sprinter van" className="van" /> */}
                        </div>
                        <h3 className="about__main-heading-bottom">What i do now</h3>
                        <div className="about__main__cont-3">
                            <div className="about__main__cont-3-text">
                                <p>Right now me and my fiance are still living in the van with our dogs and traveling around. I take temporary jobs when possible to have an income but the end goal is to earn a good income from doing web development work remotely.
                                    <br />
                                    <br />
                                    To that end I am doing some kind of coding everyday, whether that is working on a new or old project, improving my portfolio or contacting possible customers.
                                </p>
                            </div>
                            {/* <img src={ourVan2} alt="Mercedes sprinter van" className="van" /> */}
                        </div>
                    </main>
                </CenteredCont>
            </div>
            <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
        </>
    )
}

export default AboutPage