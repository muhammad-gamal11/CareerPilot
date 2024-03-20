import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaBed,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import JobInfo from "./JobInfo";
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
          <Job icon={<FaLocationArrow />} text={jobLocation} />
          <Job icon={<FaCalendarAlt />} text={date} />
          <Job icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="./add-job"
              className="btn adit-btn"
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
