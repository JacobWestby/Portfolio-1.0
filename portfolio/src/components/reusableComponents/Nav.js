import { useState } from 'react';
import { Link } from 'react-router-dom';


const Nav = ({ menuBurger }) => {
    const [showMenu, setShowMenu] = useState(false);

    const showMenuToggle = () => {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    };

    const burgerMenu = () => {
        if (showMenu) {
            return (
                <ul className="burger__menu">
                    <li>About Me</li>
                    <li>Contact</li>
                </ul>
            )
        } else return;
    }

    return (
        <header>
            <div className="navbar">
                <div className="navbar__items">
                    <Link to="/" className='logo'>jw</Link>
                    <ul className="navbar__items-list hidden">
                        <Link to="/components/aboutpage" className="navbar__items-list-link">About Me</Link>
                        <Link to="/components/contactpage" className="navbar__items-list-link">Contact</Link>
                    </ul>
                    <img className="burgerMenu" onClick={showMenuToggle} src={menuBurger} alt="Burger" />
                    {/* Menu icon by Icons8 */}
                    {burgerMenu()}
                </div>
            </div>
        </header>
    )
}

export default Nav