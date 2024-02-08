import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount,decreaseCount } from "../Redux/Count/CountSlice";

const Counter = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch()

  const increment=()=>{
    dispatch(increaseCount())
  }

  const decrement = ()=>{
    dispatch(decreaseCount())
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count} </h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Counter;
