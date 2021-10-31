import React from 'react';
import Nav from '../../componenets/Nav'
const SubmissionPageBody = (props) => {
    return (
        <>
        <Nav />
        <div className="container submission-bg">
      <section className="left-submission-container">
        <h1 className="heading">Exodus -<br /> Final Call</h1>
        <form action="">
          
          <div>
            <label className="submission-form-label" htmlFor="name">
              Group name:{" "}
            </label>
            <input
              className="submission-form-input"
              type="url"
              id="name"
              name="name"
            />
          </div>
          <div>
            <label className="submission-form-label" htmlFor="topic">Topic:
            </label>
            <input
              className="submission-form-input"
              type="url"
              id="topic"
              name="topic"
            />
          </div>
          <div>
            <label className="submission-form-label" htmlFor="link">
              Submission Link:{" "}
            </label>
            <input
              className="submission-form-input"
              type="url"
              id="link"
              name="link"
            />
          </div>
          <div>
            <label className="submission-form-label" htmlFor="aid">
              Other:{" "}
            </label>
            <textarea
              className="submission-form-input"
              rows="4"
              id="aid"
              name="aid"
            />
          </div>

          <button className="btn submission-form-btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="right-submission-container">
        <div className="animation">
          <img src={props.imge} alt="" />
        </div>
        <div className="details">
          <p className="location">
            <i class="fas fa-map-marker-alt"></i> 151 New Par Ave, Hartford, CT
            06106 <br /> United States
          </p>
          <p className="phone">
            <i class="fas fa-phone-alt"></i> +91 9090909090
          </p>
          <p className="email">
            <i class="fas fa-envelope"></i> contactus@submission.com
          </p>
        </div>
        <div className="social">
          <i class="fab fa-facebook submission-social"></i>
          <i class="fab fa-twitter-square submission-social"></i>
          <i class="fab fa-instagram-square submission-social"></i>
        </div>
      </section>
    </div>
    </>
  );
};

export default SubmissionPageBody;