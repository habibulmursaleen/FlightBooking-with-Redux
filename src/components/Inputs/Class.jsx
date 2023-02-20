import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import icon from "../../assets/icons/Vector (3).svg";
import { classSelection } from "../../redux/booking/actionsCreators";

const Class = () => {
  const dispatch = useDispatch();
  const classs = useSelector((state) => state.bookings.classs);

  const classSelectionHandler = (value) => {
    dispatch(classSelection(value));
  };

  return (
    <div className="des-from !border-r-0">
      <p>Class</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="ticketclassName"
          id="lws-ticketclassName"
          required
          value={classs}
          onChange={(event) => classSelectionHandler(event.target.value)}
        >
          <option value="" hidden>
            Please Select
          </option>
          <option>Business</option>
          <option>Economy</option>
        </select>
      </div>
    </div>
  );
};

export default Class;
