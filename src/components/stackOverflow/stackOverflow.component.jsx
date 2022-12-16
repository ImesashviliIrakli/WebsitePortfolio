import { React, useEffect, useState } from "react";
const StackOverflow = () => {
  const [result, setResult] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/users/15657255/answers?order=desc&sort=activity&site=stackoverflow&filter=!nOedRLj6*S"
    );

    const res = await response.json();
    setResult(res.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      {result.map((item, index) => {
        return (
          <div key={index}>
            <p>{index}</p>
            <p>account_id: {item.owner.account_id}</p>
            <a href={item.link}>Question Link</a>
          </div>
        );
      })}
    </div>
  );

  //return <div></div>;
};

export default StackOverflow;
