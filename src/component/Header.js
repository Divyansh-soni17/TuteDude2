import React from "react";
import { Link } from "react-router-dom";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import GradingIcon from '@mui/icons-material/Grading';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./header.css";
const Header = () => {
  return (
    <>
       
      <div className="headerdata">
        <div className="headerdataitem">
          <HandshakeIcon />
          <Link to="/">Welcome</Link>
        </div>
        <div className="headerdataitem">
          <SettingsApplicationsIcon />
          <Link to="/">Setup</Link>
        </div>
        <div className="headerdataitem">
          <PhotoCameraFrontIcon />
          <Link to="/">Meet</Link>
        </div>
        <div className="headerdataitem">
          <GradingIcon />
          <Link to="/">Review</Link>
        </div>
        <div className="headerdataitem">
          <AssignmentIcon />
          <Link to="/">Write</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
