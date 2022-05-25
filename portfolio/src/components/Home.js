import Nav from "../reusableComponents/Nav"
import CenteredCont from "../reusableComponents/CenteredCont"
import jacobWestby from "../images/jacob-westby.jpg";

const Home = () => {
    return (
        <header>
            <Nav />
            <CenteredCont>
                <div className="home__content">
                    <img src={jacobWestby} alt="Jacob Westby" />
                    <div className="home__content-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quo dolorem adipisci deserunt ullam vero eveniet sed possimus reprehenderit quidem provident, aut modi amet sunt quos perferendis consequatur asperiores! Reprehenderit?</p>
                    </div>
                </div>
            </CenteredCont>
        </header>
    )
}

export default Home