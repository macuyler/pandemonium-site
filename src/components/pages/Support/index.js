import React from "react";
import SupportStyles from "./styles";
import pageInject from "../inject";
import { db } from "../../../firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const SupportPage = ({ classes }) => {
  const [email, setEmail] = React.useState("");
  const [content, setContent] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || content.length === 0) {
      setStatus("Error: Invalid Input!");
    } else {
      setDoc(doc(collection(db, "reports")), { email, content })
        .then(() => setStatus("Report Submitted! :D"))
        .catch((error) => setStatus(`Error: ${error.message}`));

      setEmail("");
      setContent("");
    }
  };

  return (
    <div className={classes.page}>
      <h1 className={classes.h1}>Support Page</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Need Help?"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {status.length > 0 && (
        <h2
          className={
            status.includes("Error:") ? classes.error : classes.success
          }
        >
          {status}
        </h2>
      )}
    </div>
  );
};

export default pageInject(SupportStyles)(SupportPage);
