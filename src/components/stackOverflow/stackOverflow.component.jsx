import "bootstrap/dist/css/bootstrap.min.css";
import "./stackOverflow.component.scss";
import allLogos from "../images/Logos.js";
import { React, useEffect, useState } from "react";

const StackOverflow = () => {
  const [result, setResult] = useState([]);

  const getData = async () => {
    const response = await fetch(
      ""
      //"https://api.stackexchange.com/2.3/users/15657255/answers?order=desc&sort=activity&site=stackoverflow&filter=!)qOzVaFZMxnuRG2dXa-d"
    );

    const res = await response.json();
    setResult(res.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center ">
        {result.map((item, index) => {
          return (
            <div className="card m-3" key={index} style={{ width: "25rem" }}>
              <div className="card-header">
                <img src={allLogos.stackLogo} alt="StackOverflow Logo" />
                <a href={item.link}> Click here to view question</a>
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="card-footer">
                <img
                  className="stack-profile-image"
                  src={item.owner.profile_image}
                  alt="profile"
                />
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
