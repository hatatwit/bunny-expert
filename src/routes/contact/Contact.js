import { useState } from "react";
import { send } from "emailjs-com";

import ShadowCard from "../../components/card/ShadowCard";
import HeroImg from "../../assets/hero-img.png"
import Button from "../../components/input/Button";
import Modal from "../../components/card/Modal";

import "./styles.scss";

export default function Contact() {
  
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mes: ""
  })

  const [openModal, setOpenModal] = useState(false);
  const [noticeMes, setNoticeMes] = useState("")
  
  //----- Medthod to track user's inputs -----//
  const handleChange = (event) => {
    const {name, value} = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  //----- Medthod to send the mail using EmailJS -----//
  const handleSubmit =  (event) => {
    event.preventDefault();
    send(
      "service_d9i3mma",  // Service id
      "template_4uer6b7", // Template id
      contact,
      "7HPI6_nLiQW8fioVW" // User id
    ).then((response) => {
      console.log("Success!", response.status, response.text);
      // Clean up fields after submit
      setContact({
        name: "",
        email: "",
        mes: ""
      });
      setNoticeMes("Message Sent Successfully!");
      setOpenModal(true);
    }).catch((err) => {
      console.log("Failed ... ", err);
      setNoticeMes("Message Sent Unsuccessfully!");
    })
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="logo">
          <img src={HeroImg} alt="" srcset="" />
        </div>
        <ShadowCard content={<form onSubmit={handleSubmit}>
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
          <Button type="submit" value="Send"/>
        </form>}/>
        {/* If email sent, display notice message */}
        <Modal content={<p>{noticeMes}</p>} open={openModal} onClose={() => setOpenModal(false)}/>
      </div>
    </div>
  );
}
