import { useContext } from "react";
import { HealthContext } from "../../DataContext";
import RadioButton from "../input/RadioButton";

import "./styles.scss";

export default function Option({optionList, topic}) {
    const [symptoms, setSymptoms] = useContext(HealthContext);

    const handleChange = (event) => {
        let {name, value} = event.target;
        
        if (value==="Lips")  {
            value=5
        } else if (value==="Abdomen") {
            value=4
        } else if (value==="Nose") {
            value=3
        } else if (value==="Usual" || value==="Body" || value==="Eyelids" || value==="High" || value==="Frequent") {
            value=2
        } else if (value==="Yes" || value==="Low" || value==="Inner Ears" || value==="Eyes" || value==="Infrequent") {
            value = 1
        } else {
            value=0
        }

        setSymptoms(prevValue => {
            return {
              ...prevValue,
              [name]: value
            }
        })
    }

    return (
        <div className="option">
            {optionList.map((option,index) => (
                <RadioButton
                    key={index}
                    name={topic} 
                    value={option} onChange={handleChange}
                />
            ))}
        </div>
    )
}