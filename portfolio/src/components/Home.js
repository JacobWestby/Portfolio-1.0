import Nav from "./reusableComponents/Nav"
import CenteredCont from "./reusableComponents/CenteredCont"
import jacobWestby from "../images/jacob-westby.jpg";
import Projects from "./Projects";
import Testemonials from "./Testemonials";
import Contact from "./Contact";
import Footer from "./reusableComponents/Footer";
import TypeWriterEffect from 'react-typewriter-effect';


import menuBurger from "../images/menuBurger.svg";
import icons8Github from "../images/icons8Github.svg";
import icons8Linkedin from "../images/icons8Linkedin.svg";


const Home = () => {
    const calcAge = () => {
        const date = new Date()
        const currentAge = date.getFullYear() - 1993;

        return currentAge;
    };



    // const typeWriter = () => {
    //     const text = `Hi! My name is Jacob. i'm a ${calcAge()} year old Webdeveloper from Sweden.
    //     Check out my stuff below!`

    //     const tL = text.length;
    //     let i = 0;

    //     for (i; i < tL; i++) {
    //         console.log(text.charAt(i))
    //         // return text.charAt(i)
    //     }
    // }

    return (
        <>
            <header>
                <Nav menuBurger={menuBurger} />
                <CenteredCont>
                    <div className="home__content top">
                        <img src={jacobWestby} alt="Jacob Westby" />
                        <div className="home__content-text">
                            <TypeWriterEffect className="home__content-text-typewriter"
                                startDelay={100}
                                cursorColor="black"
                                multiText={["Hi! My name is Jacob. i'm a 29 year old Webdeveloper from Sweden.",
                                    " Check out my stuff below!"]}
                                multiTextDelay={2000}
                                typeSpeed={70}
                            />
                        </div>
                    </div>
                </CenteredCont>
            </header>
            <CenteredCont>
                <main>
                    <Projects />
                    <Testemonials />
                    <Contact />
                </main>
            </CenteredCont>
            <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
        </>
    )
}

export default Home;