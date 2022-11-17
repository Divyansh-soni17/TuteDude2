import React from "react";
import "./home.css";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { data } from "./data.js";
import Homecard from "./Homecard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Home = () => {
  console.log(data);
  return (
    <>
      <div className="navbar">
        <div className="leftnavbar">
          <AutoStoriesOutlinedIcon />
          <h2 className="samecolor">TuteDude</h2>
        </div>
        <div className="rightnavbar">
          <h3>My Assignment</h3>
          <h3>Chat with Mentor</h3>
          <div className="profile samecolor">
            <AccountCircleIcon />
            <h3>ProfileName</h3>
          </div>
        </div>
      </div>

      <div className="middlebody">
        <p>UI/UX > Refer & Earn > Friends Referred </p>
        <div className="referrel">
          <div>
            <h4 className="samecolor">Your Referrel Code</h4>
            <div className="code">
              <p>E</p>
              <p>D</p>
              <p>C</p>
              <p>H</p>
              <p>5</p>
              <p>4</p>
            </div>
          </div>
          <div className="balance">
            <p className="samecolor">Wallet Balance</p>
            <p>₹ 500</p>
          </div>
        </div>
      </div>

      <div className="bottombody">
        <h3 className="samecolor">Friends who enrolled(3)</h3>
        <div className="datacard">
          {data.map((item) => {
            return <Homecard item={item} />;
          })}
        </div>
        <div className="endbody">
          <h3 className="samecolor">Terms & Conditions</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
