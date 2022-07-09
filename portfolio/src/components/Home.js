import CenteredCont from "./reusableComponents/CenteredCont"
import Projects from "./Projects";
import Testemonials from "./Testemonials";
import Contact from "./Contact";
import Header from "./Header";
import Nav from "./reusableComponents/Nav";


const Home = ({ calcAge, projects }) => {

    return (
        <div className="home-background">
            <header>
                <Nav />
                <CenteredCont>
                    <Header calcAge={calcAge} />
                </CenteredCont>
                <div className="paralaxTop"></div>
            </header>
            <CenteredCont>
                <main>
                    <Projects projects={projects} />
                    <div className="paralaxMid"></div>
                    <Testemonials />
                    <div className="paralaxBottom"></div>
                    <Contact />
                </main>
            </CenteredCont>
        </div >
    )
}

export default Home;