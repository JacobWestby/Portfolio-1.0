import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Contact = () => {
    const [initialState, setInitialState] = useState({
        name: "",
        email: "",
        message: "",
        id: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitialState({ ...initialState, [name]: value })
    };

    const [message, setMessage] = useState({});

    const sendMessage = (e) => {
        e.preventDefault();

        setMessage({
            name: initialState.name,
            email: initialState.email,
            message: initialState.message,
            id: uuidv4(),
        })

        console.log(message);
    };

    return (
        <div className="contact">
            <div className="contact__form">
                <h4>contact me</h4>
                <form onSubmit={sendMessage}>
                    <label htmlFor="name">Name</label>
                    <input value={initialState.name} name="name" type="text" required placeholder="Your name.." onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input value={initialState.email} name="email" type="text" required placeholder="Email.." onChange={handleChange} />

                    <label htmlFor="message">Message</label>
                    <input value={initialState.message} name="message" type="textarea" required placeholder="Your question or message here.." onChange={handleChange} />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact