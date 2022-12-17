import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.css";
import "./stackOverflow.component.scss";
import allLogos from "../images/Logos.js";
import { React, useEffect, useState } from "react";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";

const StackOverflow = () => {
  const [result, setResult] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/users/15657255/answers?order=desc&sort=activity&site=stackoverflow&filter=!LJIdoaPLxUEUAuYs8xa7z5"
    );

    const res = await response.json();
    setResult(res.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center animate__animated animate__fadeIn">
        {result.map((item, index) => {
          return (
            <div className="card mt-4" key={index} style={{ width: "80%" }}>
              <div className="stack-header card-header d-flex justify-content-between mt-2">
                <img src={allLogos.stackLogo} alt="StackOverflow Logo" />
                <a className="stack-link" href={item.link}>
                  {" "}
                  Click here to view question
                </a>
              </div>
              <div className="stack-card-body card-body">
                <div className="question-title card-title">
                  <h5>{item.title}</h5>
                </div>
                <h6>My Answer:</h6>
                <div
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                ></div>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div>
                  <img
                    className="stack-profile-image"
                    src={item.owner.profile_image}
                    alt="profile"
                  />
                </div>

                {item.is_accepted ? (
                  <div>
                    <BsCheckSquareFill color="green" />
                  </div>
                ) : (
                  <div>
                    <BsCheckSquare color="green" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  //return <div></div>;
};

export default StackOverflow;
