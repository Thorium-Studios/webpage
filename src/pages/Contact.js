import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const formatMessage = {
        content: "New Contact Form Submission!",
        embeds: [
          {
            color: 55036,
            author: {
              name: "ThoriumStudios Website",
              icon_url: "https://thoriumstudios.us/android-chrome-512x512.png",
              url: "https://thoriumstudios.us",
            },
            title: name,
            description: message,
            footer: {
              text: "From " + email,
            },
          },
        ],
      };

      fetch(
        "https://discord.com/api/webhooks/938595044116545587/y5izXEv4OEelhBgio8Gsvnn5jlqQ374QRsMfg_3I_X_zRzvRIFCTIif0WQRg3AvKsB-X",
        {
          method: "POST",
          body: JSON.stringify(formatMessage),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div id="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={submit}>Send Message</button>

      <span className={success ? "visible" : null}>
        Thank you for your message, we will be in touch in no time!
      </span>
    </div>
  );
};

export default Contact;
