import HeroImg from "../../assets/hero-img-cap.png";
import ShadowCard from "../../components/card/ShadowCard";

import "./styles.scss";

export default function Home() {
  return (
    <div className="home">

      <div class="hero-section">
        <div class="left col">
          <div class="sub-header">
            Hello Every Bun <i class="fa-solid fa-carrot fa-bounce"></i>
          </div>
          <div class="header">
            let's me help you to take better care of your pet rabbits!
            <br />
            <span>get started &#8594;</span>
          </div>
        </div>
        <div class="right col">
          <img src={HeroImg} alt="hero-img.png" />
        </div>
      </div>
      
      <div className="feature-section">
        <h1>Features</h1>
        <div className="features">
          <ShadowCard
            content={
              <div className="feature">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h2>Safe and Unsafe Rabbit Foods</h2>
                <p>
                  A database of safe and unsafe foods for rabbits allows users to easily and quickly look up what foods are safe for their rabbits, eliminating the need to search multiple websites and sort through conflicting information found on Google.
                </p>
              </div>
            }
          />
          <ShadowCard
            content={
              <div className="feature">
                <i class="fa-solid fa-virus"></i>
                <h2>Illness Prediction</h2>
                <p>
                  A rabbit illness prediction tool uses machine learning algorithms to predict the diseases of the rabbit based on the symptoms provided by the user. The tool aims to help rabbit owners quickly identify potential health issues and seek appropriate treatment.
                </p>
              </div>
            }
          />
        </div>
      </div>
      
    </div>
      
  );
}
