import React from "react";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import "./DashBoard.css";
import Card from "../Card/Card";
import { iconType } from "../../icons";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer,
  );

  console.log(selectedData);

  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div
                    className="leftView"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {!user ? (
                      iconType[elem[index]?.title]
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                          }}
                        >
                          <img
                            style={{
                              width: "120%",
                              height: "120%",
                              borderRadius: "50%",
                            }}
                            src="https://i.pinimg.com/736x/18/fd/64/18fd644e9cdf81ab785d606584a384fb.jpg"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span style={{ margin: "10px" }}>
                      {" "}
                      <span style={{ fontSize: "16px" }}>
                        {elem[index]?.title}
                      </span>{" "}
                      <span style={{ color: "grey", paddingLeft: "10px" }}>
                        {elem[index]?.value?.length}
                      </span>
                    </span>
                  </div>
                  <div className="rightView">
                    <IoMdAdd size={20} />{" "}
                    <span style={{ paddingLeft: "8px" }}>
                      <IoIosMore size={20} />
                    </span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card
                        id={elem.id}
                        title={elem.title}
                        tag={elem.tag}
                        status={elem.status}
                        priority={elem.priority}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
