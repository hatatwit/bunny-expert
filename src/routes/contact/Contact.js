import { useState } from "react";
import ShadowCard from "../../components/card/ShadowCard";
import HeroImg from "../../assets/hero-img.png"

import "./styles.scss";

export default function Contact() {
  
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mes: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="logo">
          <img src={HeroImg} alt="" srcset="" />
        </div>
        <ShadowCard content={<form>
          <h1>Contact</h1>
          <p>Send message whether you have questions, bug reports, feedback or simply get in touch, I'd love to here from you.</p>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" value={contact.name} name="name" onChange={handleChange} required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" value={contact.email} name="email" onChange={handleChange} required />
          </div>
          <div class="form-group">
            <label for="mes">Message</label>
            <textarea value={contact.mes} name="mes" onChange={handleChange} required></textarea>
          </div>
          <input type="submit" value="Send" />
        </form>}/>
       
      </div>
    </div>
  );
}
