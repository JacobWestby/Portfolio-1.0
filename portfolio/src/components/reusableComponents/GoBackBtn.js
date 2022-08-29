import { Link } from "react-router-dom";

const GoBackBtn = ({ BackArrow }) => {
  return (
    <>
      <Link to="/" className="GoBackBtn">
        <img src={BackArrow} alt="Back arrow" />
      </Link>
    </>
  )
}

export default GoBackBtn