import "./about.css";
import Binar from "../../img/binar.png";
import Olan2 from "../../img/olan2.png"
import Ittp from "../../img/ittp.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Olan2}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi Welcome to my web porto here i will share some of the projects i have made
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Binar} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Study Independent at Binar Academy </h4>
            <p className="a-award-desc">
            Participate in Independent Study at Binar Academy 14 Feb 2022 - NOW
            </p>
          </div>
        </div>
        <div className="a-study">
          <img src={Ittp} alt="" className="a-study-img" />
          <div className="a-study-texts">
            <h4 className="a-study-title">Studying at Telkom Institute of Technology Purwokerto</h4>
            <p className="a-study-desc">
            Studying at the Telkom Purwokerto Institute of Technology from 2019 - Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
