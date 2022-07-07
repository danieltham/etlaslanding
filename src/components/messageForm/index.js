import React from "react";
import "./index.css";

export default function MessageForm() {
  return (
    <div className="message_form_section">


      <div className="msg_form_container">
        <div className="message_form">
          <h4>Leave a Message</h4>
          <p>
            Let us know how can we help
          </p>

          <div className="form_inps">
            <div>
              <input placeholder="first name" />
              <input placeholder="last name" />
              <input placeholder="email" />
              <input placeholder="phone" />
            </div>

            <input placeholder="subject" />
            <input placeholder="How can we help you" />
          </div>

          <button>Submit</button>
        </div>
      </div>

      <div className="form_section_txt">
          <h2>How We Are Better!</h2>
          <div>
          <h6>Donec a massa vel enim ultricies bibendm. </h6>
          <span>Vivamus ac semper ante, sit amet tincidunt nisi. Sed placerat magna diam, eu digniss im justo ornare ac. Sed dictum as tristique phare ra. Aenean sed posuere hendrerit justo, at iaculis orci molestie hendrerit. </span>
          </div>

          <p>Nunc dictum libero nec arcu maximus consectetur</p>
          <p>Pellen tesque non nunc arcu</p>
          <p>Aenean egestas id lectus vitae placerat.</p>
          <p>Nulla imperdiet dui at eros vehicula vehicula.</p>
      </div>
    </div>
  );
}
