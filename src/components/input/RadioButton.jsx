import "./styles.scss";

export default function RadioButton({name, value, onChange}) {
    return (
      <label>
        <input name={name} type="radio" onChange={onChange} value={value} />
        <span class="label">{value}</span>
      </label>
    );
}
