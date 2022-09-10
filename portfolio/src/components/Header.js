import { useEffect } from 'react';

import TypeWriterEffect from 'react-typewriter-effect';

import jacobWestby from "../images/jacobWestby.jpg";


function Header({ calcAge }) {

    useEffect(() => {
        document.querySelectorAll("#tech").forEach((item, index) => {
            setTimeout(() => {
                item.id = "show";
            }, index * 1000);
        })
    }, [])

    return (
        <div className="home__content top">
            <div className="home__content-inner">
                <div className="home__content-inner-hello">
                    <img src={jacobWestby} alt="Jacob Westby" />
                    <div className="home__content-inner-hello-text">
                        <TypeWriterEffect className="home__content-hello-text-typewriter"
                            startDelay={3000}
                            cursorColor="black"
                            multiText={[`Hi! My name is Jacob. i'm a ${calcAge} year old Webdeveloper from Sweden.`,
                                `Check out my stuff below!`]}
                            multiTextDelay={2000}
                            typeSpeed={70}
                        />
                    </div>
                </div>
                <div className="home__content-inner-list">
                    <h1>Hire me for:</h1>
                    <ul>
                        <li id="tech" >React</li>
                        <li id="tech" >HTML/CSS</li>
                        <li id="tech" >Sass</li>
                        <li id="tech">Git/Github</li>
                        <li id="tech" >Figma</li>
                        <li id="tech" >And more..</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
