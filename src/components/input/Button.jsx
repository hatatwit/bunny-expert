import "./styles.scss";

export default function Button({type, value}) {
    return (
        <input type={type} value={value} />
    )
}