import CenteredCont from "./reusableComponents/CenteredCont"
import Projects from "./Projects";
import Testemonials from "./Testemonials";
import Contact from "./Contact";
import Header from "./Header";
import Nav from "./reusableComponents/Nav";
import Footer from "./reusableComponents/Footer";
import icons8Github from "../images/icons8Github.svg";
import icons8Linkedin from "../images/icons8Linkedin.svg";


const Home = ({ calcAge, projects, testemonials }) => {

    return (
        <div className="home-background">
            <header>
                <Nav />
                <CenteredCont>
                    <Header calcAge={calcAge} />
                </CenteredCont>
            </header>
            <CenteredCont>
                <div className="paralaxTop"></div>
                <main>
                    <Projects projects={projects} />
                    <div className="paralaxMid"></div>
                    <Testemonials testemonials={testemonials} />
                    <div className="paralaxBottom"></div>
                    <Contact />
                </main>
            </CenteredCont>

            <Footer githubIcon={icons8Github} linkedinIcon={icons8Linkedin} />
        </div >
    )
}

export default Home;