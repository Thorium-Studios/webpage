import React from "react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container mt-5">
      <center>
        <h1>Reach out to us!</h1>
      </center>
      <div className="row gap-2 justify-center">
        <div className="col-12-xs col-6-md col-6-lg">
          <center>
            <div id="contact-form">
              <input
                className="p-2 m-2 btn-outlined-secondary"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2 m-2 btn-outlined-secondary"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="row gap-2 justify-center">
                <div className="col-12-xs col-12-md col-12-lg">
                  <textarea
                    className="p-2 m-2 btn-outlined-secondary"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <button
                className="btn-primary text-white font-md p-2 m-2"
                onClick={submit}
              >
                Send Message
              </button>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Contact;
