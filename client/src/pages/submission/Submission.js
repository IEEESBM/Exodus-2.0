import SubmissionPageBody from "./submission-page-body";
import './submission-page.css';
import rocket from '../../images/rocket.svg';
import Nav from '../../componenets/Nav';
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import {submitWebsite} from "../../actions/dashboard";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

function Submission(props) {
  const form = useRef();
  const checkBtn = useRef();
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [websiteLink,setWebsiteLink] = useState("");
  const [details,setDetails] = useState("");
  const [topic,setTopic] = useState("");
  const [teamName,setTeamName] = useState("");

  const onChangeTeamName = (e) => {
    const teamName = e.target.value;
    setTeamName(teamName);
  };

  const onChangeWebsiteLink = (e) => {
    const websiteLink = e.target.value;
    setWebsiteLink(websiteLink);
  };

  const onChangeDetails = (e) => {
    const details = e.target.value;
    setDetails(details);
  };

  const onChangeTopic = (e) => {
    const topic = e.target.value;
    setTopic(topic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      // console.log(websiteLink,details,topic);
      dispatch(submitWebsite(websiteLink,details,topic))
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <SubmissionPageBody imge={rocket} /> */}
      <Nav />
        <div className="container submission-bg">
      <section className="left-submission-container">
        <h1 className="heading head-sub">Exodus - Final Call</h1>
        <Form onSubmit={handleSubmit} ref={form} className="subm-form">
          
          {/* <div>
            <label className="submission-form-label" htmlFor="name">
              Group name:
            </label>
            <Input
              type="text"
              className="submission-form-input"
              name="name"
              id="name"
              value={teamName}
              onChange={onChangeTeamName}
              validations={[required]}
            />
          </div> */}
          <div>
            <label className="submission-form-label" htmlFor="topic">Topic:
            </label>
            <Select 
            className="submission-form-input" 
            value={topic} 
            validations={[required]} 
            onChange={onChangeTopic}>
                <option value="airline">Airline</option>
                <option value="cryopreservation">Cryopreservation</option>
                <option value="2">Airline2</option>
            </Select>
          </div>
          <div>
            <label className="submission-form-label" htmlFor="link">
              Submission Link:{" "}
            </label>
            <Input
              type="url"
              className="sub-link submission-form-input"
              name="websiteLink"
              id="websiteLink"
              value={websiteLink}
              onChange={onChangeWebsiteLink}
              validations={[required]}
            />
          </div>
          <div>
            <label className="submission-form-label" htmlFor="aid">
              Other:{" "}
            </label>
            <textarea
              className=" submission-form-input"
              rows="4"
              id="aid"
              name="aid"
              value={details}
              onChange={onChangeDetails}
            />
          </div>

          <button className="btn submission-form-btn" type="submit">
            Submit
          </button>
       
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
       </Form>
      </section>
 </div>
    </>
  );
}

export default Submission;