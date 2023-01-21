import Option from "./Option";
import ShadowCard from "../card/ShadowCard";

import "./styles.scss";

export default function Question({ questionItem }) {
  // console.log(questionItem);
  return (
    <div className="question">
      <ShadowCard
        content={
          <div className="question-item">
            <p className="question-title">{questionItem.question}</p>
            <p className="question-description">{questionItem.description}</p>
            <div className="options">
              <Option
                optionList={questionItem.options}
                topic={questionItem.topic}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
