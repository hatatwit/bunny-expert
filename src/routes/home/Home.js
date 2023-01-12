import "./styles.scss";
import HeroImg from "../../assets/hero-img.png";

export default function Home() {
  return (
    <div class="home">
        <div class="left col">
          <div class="sub-header">Hello Every Bun <i class="fa-solid fa-carrot fa-bounce"></i></div>
          <div class="header">
            let's me help you to take better care of your pet rabbits!<br/><span>get started &#8594;</span>
          </div>
        </div>
        <div class="right col">
          <img src={HeroImg} alt="hero-img.png"/>
        </div>
      </div>
  );
}