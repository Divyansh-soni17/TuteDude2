import React from "react";
import "./homecard.css";
  
const Homecard = ({ item }) => {
  const { name, date, coursesnumber, courses, referrelamount } = item;
  return (
    <>
      <div className="card">
        <div className="cardupper">
          <h3 className="paracolor">{name}</h3>
          <p className="paracolor">{date}</p>
        </div>

        <p className="paracolor">Courses Enrolled ({coursesnumber})</p>
        <div className="eachcourse">
          {courses.map((courseitem) => (
            <p className="eachcoursepara paracolor">{courseitem}</p>
          ))}
        </div>
        <div className="cardreferrelamount">
          <p className="paracolor">Referrel Amount</p>
          <p className="cardreferrelamountitem2 paracolor">{referrelamount}</p>
        </div>
      </div>
    </>
  );
};

export default Homecard;
