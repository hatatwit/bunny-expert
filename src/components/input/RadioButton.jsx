import "./styles.scss";

export default function RadioButton({name, value, onChange}) {
    return (
      <label>
        <input name={name} type="radio" onChange={onChange} value={value} required/>
        <span class="label">{value}</span>
      </label>
    );
}
