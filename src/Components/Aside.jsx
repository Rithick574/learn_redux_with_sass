import React from "react";
import { useDispatch } from "react-redux";
import randomColor from "randomcolor";
import { useSelector } from "react-redux";
import { change_color } from "../Redux/Color/ColorSlice";



const Aside = () => {
  const color = useSelector(state=> state.color.value)
  const dispatch = useDispatch()
  const changeColor=()=>{
    dispatch(change_color({
      color:randomColor()
    }))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Aside;
