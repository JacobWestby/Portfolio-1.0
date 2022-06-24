import CenteredCont from "./reusableComponents/CenteredCont"
import Projects from "./Projects";
import Testemonials from "./Testemonials";
import Contact from "./Contact";
import Header from "./Header";


const Home = ({ calcAge, projects }) => {

    return (
        <div className="home-background">
            <header>
                <CenteredCont>
                    <Header calcAge={calcAge} />
                </CenteredCont>
            </header>
            <CenteredCont>
                <main>
                    <Projects projects={projects} />
                    <Testemonials />
                    <Contact />
                </main>
            </CenteredCont>
        </div>
    )
}

export default Home;