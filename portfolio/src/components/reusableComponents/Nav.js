import { useState } from 'react';



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
        <>
            <div className="navbar">
                <div className="navbar__items">
                    <h1>jw</h1>
                    <ul className="navbar__items-list hidden">
                        <li>About Me</li>
                        <li>Contact</li>
                    </ul>
                    <img className="burgerMenu" onClick={showMenuToggle} src={menuBurger} alt="Burger" />
                    {/* Menu icon by Icons8 */}
                    {burgerMenu()}
                </div>
            </div>
        </>
    )
}

export default Nav