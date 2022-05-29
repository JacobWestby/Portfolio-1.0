
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contact__form">
                    <h4>contact me</h4>
                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" required placeholder="Your name.." />
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" required placeholder="Email.." />
                        <label htmlFor="message">Message</label>
                        <input name="message" type="textarea" required placeholder="Your question or message here.." />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact