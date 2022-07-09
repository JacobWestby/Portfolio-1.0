import jacobWestby from "../images/jacobWestby.jpg";

import TypeWriterEffect from 'react-typewriter-effect';


function Header({ calcAge }) {
    return (
        <div className="home__content top">
            <img src={jacobWestby} alt="Jacob Westby" />
            <div className="home__content-text">
                <TypeWriterEffect className="home__content-text-typewriter"
                    startDelay={100}
                    cursorColor="black"
                    multiText={[`Hi! My name is Jacob. i'm a ${calcAge} year old Webdeveloper from Sweden.`,
                        `Check out my stuff below!`]}
                    multiTextDelay={2000}
                    typeSpeed={70}
                />
            </div>
        </div>
    )
}

export default Header