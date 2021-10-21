import React from "react";
import "./submission-styles.css";

const Submission = () => {
  return (
    <div>
      <h1 className="title">SUBMISSION FORM</h1>

      <form action="">
        <div>
          <label htmlFor="gname">Group Name: </label>
          <input type="text" id="gname" name="gname" />
        </div>
        <div>
          <label htmlFor="aid">Application ID: </label>
          <input type="text" id="aid" name="aid" />
        </div>
        <div>
          <label htmlFor="topic">Topic: </label>
          <input type="text" id="topic" name="topic" />
        </div>
        <div>
          <label htmlFor="link">Submission Link: </label>
          <input type="url" id="link" name="link" />
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default Submission;