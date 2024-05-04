import React, { useState } from "react";
import Contacts from "../components/Contacts";
import AddContact from "../components/AddContact";

export default function Contact() {
  const [showAddContact, setShowAddContact] = useState(false);

  function toggleAddContact() {
    setShowAddContact(!showAddContact);
  }

  return (
    <div className="main-content">
      <div className="d-flex justify-content-between">
        <h1>Contact</h1>
        {!showAddContact && (
          <button
            type="button"
            onClick={toggleAddContact} // Uncomment and define function to use
            className="save grow-on-hover link"
          >
            Add New Contact
          </button>
        )}
      </div>
      {showAddContact ? (
        <AddContact toggleAddContact={toggleAddContact} />
      ) : (
        <Contacts />
      )}
    </div>
  );
}
