import React from "react";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './upperheader.css'

const Upperheader = () => {
  return (
    <>
       
      <div className="upperheaderdata">
        <img src="https://static.wixstatic.com/media/5aaf01_98764a85ac4b462e981320313e3c8fe9~mv2.png/v1/fit/w_2500,h_1330,al_c/5aaf01_98764a85ac4b462e981320313e3c8fe9~mv2.png" alt="image" />
        <div className="upperheaderdataitem">
          <KeyboardArrowDownIcon />
          <Link to="/">Home</Link>
        </div>
        <div className="upperheaderdataitem">
          <KeyboardArrowDownIcon />
          <Link to="/">Discover</Link>
        </div>
        <div className="upperheaderdataitem">
          <KeyboardArrowDownIcon />
          <Link to="/">Reward</Link>
        </div>
        <div className="upperheaderdataitem">
          <KeyboardArrowDownIcon />
          <Link to="/">Other</Link>
        </div>
         
      </div>
    </>
  )
}

export default Upperheader