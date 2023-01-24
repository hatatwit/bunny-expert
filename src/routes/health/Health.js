import { useContext, useState } from "react";
import axios from "axios";
import { PredictionContext } from "../../DataContext";
import HealthDB from "../../assets/healthDB.json";

import Question from "../../components/survey/Question";
import Button from "../../components/input/Button";
import Modal from "../../components/card/Modal";

import "./styles.scss";

export default function Health() {
  const [symptoms, setSymptoms] = useContext(PredictionContext);
  const [result, setResult] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Update symptoms with user inputs and send it to BunnyDiseasesAPI
  const handleSubmit = (event) => {
    event.preventDefault();
    // Make BunnyDiseasesAPI call
    axios
      .post("https://vadu81.deta.dev/prediction", symptoms)
      .then((res) => {
        console.log(
          "Result: " +
            JSON.stringify(res.data.data.result) +
            "\n Interpretation: " +
            res.data.data.interpretation +
            "\n Parameters: " +
            JSON.stringify(symptoms)
        );

        // Send BunnyDiseaseAPI interpretation to diseaseChecker to get specific disease info
        diseaseChecker(res.data.data.interpretation);
        setOpenModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Check if each item in BunnyDiseasesAPI interpretation is in HealthDB, then return diseases info

  const diseaseChecker = (interpretation) => {
    const matches = HealthDB.diseases.filter((disease) =>
      interpretation.includes(disease.disease)
    );
    setResult(matches);
  };

  // Clear result and refresh the page
  const clearForm = () => {
    setOpenModal(false);
    setResult([]);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className="health">
      <h1>Health</h1>
      <form onSubmit={handleSubmit}>
        {/* Loop through each question in HeathDB and render it using Question component */}
        {HealthDB.survey.map((questionItem) => (
          <Question key={questionItem.id} questionItem={questionItem} />
        ))}
        <Button type="submit" value="Submit" />
      </form>
      {/* Display result */}
      <Modal
        open={openModal}
        onClose={() => clearForm()}
        content={
          <div className="prediction-content">
            {result.length === 0 ? (
              <div className="result">
                <h2>Healthy</h2>
                <span className="note">
                  *** Please remember that the advice and information provided
                  should be used as references. If you notice that your rabbit
                  is not feeling well, please seek guidance from your
                  veterinarian as soon as possible.
                </span>
              </div>
            ) : (
              <div className="disease-info">
                {result.map((item) => (
                  <div className="result">
                    <h2>{item.disease}</h2>
                    <p>
                      <span className="special-text">Cause:</span> {item.cause}
                    </p>
                    <p>
                      <span className="special-text">Symptoms:</span>{" "}
                      {item.symptoms}
                    </p>
                    <p>
                      <span className="special-text">Prevention:</span>{" "}
                      {item.prevention}
                    </p>
                    <p>
                      <span className="special-text">Treatment:</span>{" "}
                      {item.treatment}
                    </p>
                  </div>
                ))}
                <span className="note">
                  *** Please remember that the advice and information provided
                  should be used as references. If you notice that your rabbit
                  is not feeling well, please seek guidance from your
                  veterinarian as soon as possible.
                </span>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}
