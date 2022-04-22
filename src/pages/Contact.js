import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mknypwkz");
  if (state.succeeded) {
    return (
      <div className="container mt-5 text-primary">
        <center>
          <h1>Thanks for your message!</h1>
          <br />
          <p>We will try to get back to you as soon as possible.</p>
        </center>
      </div>
    );
  }
  return (
    <div className="container mt-2">
      <div className="row gap-2 justify-center">
        <form onSubmit={handleSubmit}>
          <div className="col-12-xs col-6-md col-6-lg">
            <div id="input-email">
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                name="email"
                className="p-2 m-2 text-box-secondary text-white"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div id="input-msg">
              <textarea
                id="message"
                name="message"
                className="p-2 m-2 text-box-secondary text-white"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div id="submit-button" className="row gap-2 justify-center ml-5">
              <button
                className="btn-primary text-white"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
