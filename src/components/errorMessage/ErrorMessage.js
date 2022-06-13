import img from "./error.gif";

const ErrorMessage = () => {
    return (
        <img src={img} alt="Ошибка" style={{ display: "block", widthL: "250px", height: "250px", objectFit: "contain", margin: "0 auto" }} />
    )
}

export default ErrorMessage;