import { Link } from "react-router-dom";

import AboutTrang from "../../assets/aboutTrang.jpg";
import AboutHobbies from "../../assets/aboutHobbies.png";
import AboutBunnyExpert from "../../assets/aboutBunnyExpert.png";
import AboutSpunkie from "../../assets/aboutSpunkie.jpeg";

import ShadowCard from "../../components/card/ShadowCard";
import Polaroid from "../../components/card/Polaroid";

import "./styles.scss";

export default function About() {
  const aboutContent = [
    {
      alt: "about-trang",
      pos: "r",
      img: AboutTrang,
      text: (
        <p>
          I'm <a href="https://www.instagram.com/missha_1999/?hl=en"
            className="special-text">Trang</a>
          , and <a href="https://www.instagram.com/spunkie_thebun/?hl=en" className="special-text">Spunkie</a> is the first ever pet rabbit that I have owned. I have had a cat and
          dog before, but rabbits are my favorite pet. One of the
          main reasons is that I hate touching meat (I know I'm a weirdo, lol), so taking care of a rabbit
          is much more comfortable for me because rabbits only eat hay, veggies,
          pellets and fruits. Additionally, showering and walking dogs or cats
          was a hassle, but with rabbits, those tasks are not necessary.
          Furthermore, rabbits are generally quiet, clean, and litter box
          trained. Their droppings are odorless and easy to clean, unlike cats
          and dogs. Overall, having a rabbit is much easier and more enjoyable
          for me.
        </p>
      ),
    },
    {
      alt: "about-hobbies",
      pos: "l",
      img: AboutHobbies,
      text: (
        <p>
          I have a lot of hobbies. Caring for my rabbit is a source of great joy for me as I love to ensure he is well-cared for, comfortable,and happy. Indoor plants also bring me a lot of pleasure as I enjoy nurturing them and watching them grow. I also have a passion for traveling and exploring new places, as well as coding and being creative with it. Playing The Sims 4 is a great way for me to unwind and relax after a long day in reality, and listening to K-pop music is a favorite pastime of mine that always puts me in a good mood.
        </p>
      ),
    },
    {
      alt: "about-bunnyExpert",
      pos: "r",
      img: AboutBunnyExpert,
      text: (
        <p>
          I created the <Link to="/" className="special-text">Bunny Expert</Link> website to help rabbit owners take better care of their pet rabbits. The website has a wide variety, including vegetables, fruits, flowers, plants, houseplants, and some human food that users can look up what they should and should not feed their rabbits. With the <Link to="/" className="special-text">Bunny Expert</Link> website, bunny owners can now identify common diseases of rabbits by their early signs, such as GI stasis, ear mites, heatstroke, snuffles, bladder sludge, overgrown teeth, abscesses, and fur mites, with detail information about the illnesses including causes, symptoms, prevention, and treatment.<br/><br/> Although I am not a professional or a veterinarian, I have done extensive research on rabbit care and have gained a lot of experience with my own bunny. My sources of information include the <a href="https://rabbit.org/" className="special-text">House Rabbit Society</a>, <a href="https://www.rabbitnetwork.org/" className="special-text">House Rabbit Network</a>, <a href="https://bunnylady.com/" className="special-text">The Bunny Lady</a>, and other resources found on Google. However, I am aware that there is always more to learn about rabbit care, and I am open to receiving advice and suggestions to improve the accuracy of the information on this website. If you have any suggestions or advice, please don't hesitate to reach out to me through the contact form, I will make sure
          to check it out. It's important to keep in mind that the information and advice provided on this website should be used as a guide, and it's always a good idea to consult with a veterinarian and conduct your own research when caring for your rabbit.
        </p>
      ),
    },
    {
      alt: "about-spunkie",
      pos: "l",
      img: AboutSpunkie,
      text: (
        <p>
          <a href="https://www.instagram.com/spunkie_thebun/?hl=en" className="special-text">Spunkie</a> is a male Lop-Eared rabbit living in Boston, MA. He was adopted from the <a href="https://www.rabbitnetwork.org/" className="special-text">House Rabbit Network</a> on April 12, 2021, as a stray rabbit with no information. Despite his past, he has exposed his personality as spunky, curious, smart, affectionate, and territorial. One of the special things about Spunkie is that he had to remove all four incisors because they were overgrown and couldn't grind down naturally, which is a common disease that lop rabbits have. It doesn't stop him from enjoying food, in fact, he's not a picky eater, and his favorite food is everything. Spunkie has quickly become a beloved member of my family and brings joy to everyone he meets. He has already mastered 13 tricks such as spinning, high-fiving, perching, snooting, walking on hind legs in between my legs, jumping over obstacles, on my back, and inside my legs, going through a tunnel, putting paws on my shoulders, coming when called, giving kisses, and ringing the bell for food. I'm grateful to have Spunkie as part of my family, as he brings joy and entertainment every day.
        </p>
      ),
    },
  ];

  return (
    <div className="about">
      <h1>About</h1>
      {aboutContent.map((content) => (
        <>
          {content.pos === "l" ? (
            <div className="container">
              <Polaroid
                polaroidImg={content.img}
                alt={content.alt}
                pos={content.pos}
              />
              <ShadowCard content={content.text} />
            </div>
          ) : (
            <div className="container">
              <ShadowCard content={content.text} />
              <Polaroid
                polaroidImg={content.img}
                alt={content.alt}
                pos={content.pos}
              />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
