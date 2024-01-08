import { useRef, useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const service_id = "service_7h213kk";
  const template_id = "template_why1mvj";
  const public_key = "s5Pde1oB0ryC_1mpw";

  const form = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      () => {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      },
      () => {
        setError(true);
      }
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div style={{ width: "100%" }}>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} ref={form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div style={{ width: "100%" }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="from_name"
                required
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ width: "100%" }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
