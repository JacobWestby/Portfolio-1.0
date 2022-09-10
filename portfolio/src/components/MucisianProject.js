import GoBackBtn from "./reusableComponents/GoBackBtn";

const MucisianProject = ({ BackArrow }) => {
    return (
        <div className="mucisian-body">
            <GoBackBtn BackArrow={BackArrow} />
            <div className="mucisian-header">
                <div className="mucisian-nav">
                    <h1>Head.</h1>
                    <div className="mucisian-nav__links">
                        <a href="#">Works</a>
                        <a href="#">Services</a>
                        <a href="#">Contacts</a>
                    </div>
                </div>

                <div className="mucisian-header__content">
                    <div className="mucisian-header__content-text">
                        <h2>Musician</h2>
                        <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcor.</p>
                    </div>
                    <div className="mucisian-header__content-head-shot"></div>
                </div>
            </div>
        </div >
    )
}

export default MucisianProject