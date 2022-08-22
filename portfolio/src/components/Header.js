import { useEffect } from 'react';

import TypeWriterEffect from 'react-typewriter-effect';

import jacobWestby from "../images/jacobWestby.jpg";


function Header({ calcAge }) {

    // New plan Add li items as displaynone or hidden, check for classname somhow
    // If show classname is not pressent, add it.
    // Goal, Fade in individual li items.

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
                <img src={jacobWestby} alt="Jacob Westby" />
                <ul>
                    <li id="tech" >React</li>
                    <li id="tech" >HTML/CSS</li>
                    <li id="tech" >Sass</li>
                    <li id="tech">Git/Github</li>
                    <li id="tech" >Figma</li>
                    <li id="tech" >And more..</li>
                </ul>
            </div>
            <div className="home__content-text">
                <TypeWriterEffect className="home__content-text-typewriter"
                    startDelay={3000}
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
