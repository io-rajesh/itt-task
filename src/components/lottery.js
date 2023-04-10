import React, { useState, useEffect } from "react";
import Ball from "./ball";
import { Button, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "../redux/count";
import { useLocation } from "react-router-dom";

const Lottery = () => {
  const [name, setName] = useState("Reset");
  // const [count, setCount] = useState(0)
  const num = useSelector((state) => state.countReducer.num);
  const reduxstate = useSelector((state) => state);
  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();

  console.log("reduxstate is ::", reduxstate);
  console.log("num is :::", num);
  const dispatch = useDispatch();
  const data = {
    title: "Game-1",
    numbers: [1, 2, 3, 4, 5, 6],
  };
  const container = {
    border: "2px solid grey",
    borderRadius: "7px",
    width: "40em",
    textAlign: "center",
    margin: "1em auto auto",
    padding: "2em",
  };

  const handleClickBall = (val) => {
    console.log(num);

    if (val === num) {
      api.open({
        message: "WOW!!",
        description: "Both Are same Value ",
      });
    }
  };

  const Balls = () => {
    return (
      <>
        {data.numbers.map((val, i) => (
          <Ball
            key={i}
            num={val}
            onClick={() => {
              console.log(":::::::");
              handleClickBall(val);
            }}
          />
        ))}
      </>
    );
  };

  // useEffect(()=>{
  //     if(count >0){
  //         console.log('Inside useEffect count .....')
  //         document.title = `ITT Training`;
  //     }
  // },[count])

  useEffect(() => {
    console.log("Inside useEffect name .....");
    document.title = `ITT Training`;
  }, [name]);

  useEffect(() => {
    console.log("Inside useEffect .....", location);
  });

  return (
    <div style={container}>
      {contextHolder}
      <h3>{location.pathname.split("/")[1].toUpperCase()}</h3>
      <div>
        <Balls />
      </div>
      <Button
        onClick={(e) => {
          setName(e.target.innerHTML === "Reset" ? "Set" : "Reset");
          if (e.target.innerHTML === "Reset") {
            dispatch(reset());
          }
        }}
      >
        {name}
      </Button>
      <Button onClick={() => dispatch(increment())}>{num}</Button>
    </div>
  );
};

export default Lottery;
