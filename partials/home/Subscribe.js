import { useState } from "react";
import { Modal } from "react-bootstrap";

const sendSubscribeRequest = (email) => {
  const body = {
    auth: process.env.API_AUTH_TOKEN,
    email: email,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch("/api/add-subscriber", requestOptions)
    .then((response) => response.json())
    .then((response) => console.log(response));

  return true;
};

export const Subscribe = () => {
  const [email, updateEmail] = useState("");
  const [showModal, updateShowModal] = useState(false);
  return (
    <>
      <div
        style={{
          backgroundColor: "#F4F6F8",
          width: "100%",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ marginBottom: "24px" }}>Get the latest updates</h4>
        <div class="subscribe-container">
          <input
            id={"email"}
            type="email"
            placeholder="Enter your email"
            onChange={(event) => updateEmail(event.target.value)}
            value={email}
          />
          <button
            onClick={() => {
              sendSubscribeRequest(email);
              updateShowModal(true);
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
      <Modal
        size="md"
        show={showModal}
        onHide={() => {
          updateEmail("");
          updateShowModal(false);
        }}
        aria-labelledby="user-subscribed"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="user-subscribed">
            Jazakallah! You are subscribed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ margin: "0px 10px" }}>
          <div className="body1">
            We have collected your email and will reach out when a new
            opportunities opens up.
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
