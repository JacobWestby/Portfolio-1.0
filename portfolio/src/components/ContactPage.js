import CenteredCont from "./reusableComponents/CenteredCont";
import Contact from "./Contact";
import Nav from "./reusableComponents/Nav";

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
        </>
    )
}

export default ContactPage