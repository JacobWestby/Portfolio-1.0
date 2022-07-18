import CenteredCont from "./reusableComponents/CenteredCont";
import Footer from "./reusableComponents/Footer";
import Contact from "./Contact";
import Nav from "./reusableComponents/Nav";

import icons8Github from "../images/icons8Github.svg";
import icons8Linkedin from "../images/icons8Linkedin.svg";

const ContactPage = () => {
    return (
        <>
            <Nav />
            <div className="contact-background">
                <CenteredCont>
                    <header>
                        <div className="contact__header-text">
                            <h2>Get in touch</h2>
                            <p>If you need to get in touch with me for bussiness inqueries or any question you can do so below</p>
                        </div>
                        <Contact />
                    </header>

                </CenteredCont>
            </div>
            <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />

        </>
    )
}

export default ContactPage