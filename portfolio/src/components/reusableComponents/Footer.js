import { Link } from "react-router-dom";

const Footer = ({ githubIcon, linkedinIcon }) => {
    return (
        <footer>
            <div className="footer__cont">
                <a className="footer__cont-logo-link" href="#top"><h3 className="footer__cont-logo">JW</h3></a>
                <ul className="footer__cont-social">
                    <a href="https://github.com/JacobWestby" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github icon link" /></a>
                    <a href="https://www.linkedin.com/in/jacob-westby-dev93/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="Linkedin icon link" /></a>
                </ul>
                <ul className="footer__cont-links">
                    <Link to="/components/aboutpage" className="footer__cont-links-Link">About Me</Link>
                    <Link to="/components/contactpage" className="footer__cont-links-Link">Contact</Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer