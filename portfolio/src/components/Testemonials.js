
const Testemonials = ({ testemonials }) => {

    return (
        <div className="testemonials">
            {testemonials.map((testemonial) => (
                <div className="testemonials__cont">
                    <div className="testemonials__cont-inner">
                        <img src={testemonial.img} alt="Profile" />
                        <p>{testemonial.name}</p>
                    </div>
                    <p>{testemonial.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Testemonials
