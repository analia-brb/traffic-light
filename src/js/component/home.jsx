import React, { useState } from "react"; //1. importar el hook useState

const Home = () => {
  const [color1, setColor1] = useState("btn-light");
  const [color2, setColor2] = useState("btn-light");
  const [color3, setColor3] = useState("btn-light");

  function encenderRojo() {
    if (color1 === "btn-danger") {
      setColor1("btn-light");
    } else {
      setColor1("btn-danger");
      setColor2("btn-light");
      setColor3("btn-light");
    }
  }

  function encenderAmarillo() {
    if (color2 === "btn-warning") {
      setColor2("btn-light");
    } else {
      setColor2("btn-warning");
      setColor1("btn-light");
      setColor3("btn-light");
    }
  }

  function encenderVerde() {
    if (color3 === "btn-success") {
      setColor3("btn-light");
    } else {
      setColor3("btn-success");
      setColor2("btn-light");
      setColor1("btn-light");
    }
  }

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div
          className="bg-dark"
          style={{ height: "200px", width: "7px" }}
        ></div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="text-center d-flex flex-column bg-dark">
          <button
            style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            className={"m-2 mt-3 btn " + color1}
            onClick={encenderRojo}
          ></button>
          <button
            style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            className={"m-2 btn " + color2}
            onClick={encenderAmarillo}
          ></button>
          <button
            style={{ borderRadius: "50%", height: "70px", width: "70px" }}
            className={"m-2 mb-3 btn " + color3}
            onClick={encenderVerde}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Home;
