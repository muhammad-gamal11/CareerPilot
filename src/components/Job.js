import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import moment from "moment";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div className="job-info">
            <FaLocationArrow className="icon" />
            <span>{jobLocation}</span>
          </div>
          <div className="job-info">
            <FaCalendarAlt className="icon" />
            <span>{date}</span>
          </div>
          <div className="job-info">
            <FaBriefcase className="icon" />
            <span>{jobType}</span>
          </div>
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => console.log("edit")}
            >
              edit
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => console.log("edit")}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
