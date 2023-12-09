import React from "react";
import "./Card.css";
import { FaCircle } from "react-icons/fa";
import { iconType } from "../../icons";

const Card = ({ id, title, tag, status, priority }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://i.pinimg.com/736x/18/fd/64/18fd644e9cdf81ab785d606584a384fb.jpg"
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div
          className="tags color-grey"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {iconType[status]}{" "}
        </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span style={{ marginRight: "8px" }}>
                <FaCircle size={9} />
              </span>
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
