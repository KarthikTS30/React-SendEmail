import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3m6wxei",
        "template_nodxy81",
        form.current,
        "Sn4xxKKxUShXngKkM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact Us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user-name"
            required
          />
          <input type="text" placeholder="Email" name="user-email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea
            name="message"
            placeholder="Enter your message here"
            cols="30"
            rows="10"
          />
          <button type="submit" className="--btn --btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
