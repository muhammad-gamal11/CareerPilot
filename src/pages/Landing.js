import logo from "../assets/images/logo.png";
import main from "../assets/images/main.jpg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img
          src={logo}
          alt="logo"
          style={{ width: "12rem", margin: ".7rem 0 0 1rem" }}
          className="logo"
        />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
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
            your dream job faster. Download CareerPilot now and embark on a
            journey to professional success!
          </p>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
