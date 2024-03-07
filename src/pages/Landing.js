import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            with <span>careerPilot</span> ,<br /> your Job hunt made faster
          </h1>
          <p>
            Introducing CareerPilot, your ultimate companion in the job search
            journey. With CareerPilot, stay organized, focused, and motivated as
            you navigate through the complexities of job hunting. Effortlessly
            track job applications, interviews, and networking activities in one
            centralized platform. Stay on top of deadlines with customizable
            reminders and notifications. Gain insights into your job search
            progress with intuitive analytics and reporting features. Whether
            you're a seasoned professional or just starting your career,
            CareerPilot empowers you to take control of your job search and land
            your dream job faster.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
