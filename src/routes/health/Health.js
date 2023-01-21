import { useContext } from "react";
import axios, { all } from "axios";
import { HealthContext } from "../../DataContext";
import Survey from "../../assets/survey.json";
import Question from "../../components/survey/Question";

import "./styles.scss";
import Button from "../../components/input/Button";

export default function Health() {
  const [symptoms, setSymptoms] = useContext(HealthContext);

  const resetSymptoms = () => {
    setSymptoms({
      appetite: null,
      digestion: null,
      defecation: null,
      posture: null,
      lethargy: null,
      scratching: null,
      hd_shaking: null,
      crust_area: null,
      drooling: null,
      swollen_area: null,
      red_ears: null,
      balance: null,
      hd_lifting: null,
      sneezing: null,
      watery_eyes: null,
      runny_nose: null,
      breathing: null,
      hd_titl: null,
      peeing_frq: null,
      peeing_sludge: null,
      peeing_bloody: null,
      weght_loss: null,
      discharged_eyes: null,
      overgwn_teeth: null,
      lump: null,
      fur_lost: null,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(symptoms);
    //Make API call and store in data
    axios
      .post("https://vadu81.deta.dev/prediction", symptoms)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(symptoms);
        const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`;
        alert(msg);
        resetSymptoms();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="health">
      <h1>Health</h1>
      <form onSubmit={handleSubmit}>
        {Survey.survey.map((questionItem) => (
          <Question key={questionItem.id} questionItem={questionItem} />
        ))}
        <Button type="submit" value="Submit"/>
      </form>
    </div>
  );
}
