import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="maincontainer">
      <div className="leftitem">
        <img
          src="https://img.freepik.com/premium-vector/online-video-conference-colleagues-meeting-from-home_318237-65.jpg?w=2000"
          alt="image"
        />
      </div>

      <div className="rightitem">
        <h3>Company Description</h3>
        <img
          src="https://nextwhatbusiness.com/wp-content/uploads/2018/03/cake-shop-business.jpg"
          alt="image"
        />
        <p>
          Gnaga Confectionery is listed under sweet shops in rajendrea nagar sector 5,Sahibabad, Delhi.
          From Cakes to brownies, and cupcakes to macarons, cake shops in Sahibabad, Delhi are your go-to-hotspon for treating your sweet toothe.
        </p>
        <h3>About the interviewer</h3>
        <p>
           <b>Madhuri Rao </b>is the operations manager of ganga confectioner pvt.ltd. She's ans Executive MBA in operations managaement, carrying along rich 14+ years of experience earned from companies like Amul, cadbuary, pizza hut,etc.
        </p>
      </div>
    </div>
  );
};

export default Home;
