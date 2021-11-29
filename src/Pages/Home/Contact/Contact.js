import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import { Modal } from 'react-bootstrap';

const Contact = () => {
  const [modal, setModal] = useState(false);
  const [result, setResult] = useState(false);
  const sendEmail =e => {
    e.preventDefault();

    emailjs.sendForm("service_56u7b09", "template_y702p9b", e.target,
      "user_0R3ka1p9ZBl1NUhJGrV46")
      .then(res => {
      setResult(res);
      })
      .catch(err => console.log(err))
    e.target.reset();
    setResult(true);
  }
  
    return (
      <div>
        <div>
          <form className="form-style-4 text-center" onSubmit={sendEmail} action="" method="post">
          <h2 className="text-center text-white fw-bolder mb-5"> Contact Me</h2>
            <label for="field1">
              <span>Enter Your Name</span>
              <input type="text" name="name" required="true" />
            </label>
            <label for="field2">
              <span>Email Address</span>
              <input type="email" name="email" required="true" />
            </label>
            <label for="field3">
              <span>Short Subject</span>
              <input type="text" name="subject" required="true" />
            </label>
            <label for="field4">
              <span>Your Message</span>
              <textarea
                name="message"
                onkeyup="adjust_textarea(this)"
                required="true"
              ></textarea>
            </label>
            <label>
              <span> </span>
              <input
                onClick={
                  () => setModal(true)|| null} type="submit" value="Send Letter" />
            </label>
          </form>
        </div>
        <div>
          {
            result ? 
            <div>
      <Modal
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Thanks!!! For Your Message.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been successfully sent. I will contact soon.</Modal.Body>
      </Modal>
   </div>: null
          }
        </div>
      </div>
    );
};

export default Contact;