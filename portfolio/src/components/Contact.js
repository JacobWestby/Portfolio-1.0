const FORM_ENDPOINT = "https://public.herotofu.com/v1/ce433710-0918-11ed-be50-e78da9ee852d"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__form">
                <h4>contact me</h4>
                <form action={FORM_ENDPOINT} method="POST">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" required placeholder="Your name.." />

                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" required placeholder="Your email.." />

                    <label htmlFor="message">Message</label>
                    <input name="message" type="textarea" required placeholder="Your question or message here.." />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact