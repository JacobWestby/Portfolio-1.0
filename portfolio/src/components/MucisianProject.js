import GoBackBtn from "./reusableComponents/GoBackBtn";

const MucisianProject = ({ BackArrow }) => {
    return (
        <div className="mucisian-body">
            <GoBackBtn BackArrow={BackArrow} />
            <header className="mucisian-header">
                <nav className="mucisian-nav">
                    <h1>Head.</h1>
                    <div class="mucisian-nav__links">
                        <a href="#">Works</a>
                        <a href="#">Services</a>
                        <a href="#">Contacts</a>
                    </div>
                </nav>

                <div class="mucisian-header__content">
                    <div class="mucisian-header__content-text">
                        <h2>Musician</h2>
                        <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcor.</p>
                    </div>
                    <div class="mucisian-header__content-head-shot"></div>
                </div>
            </header>
        </div>
    )
}

export default MucisianProject