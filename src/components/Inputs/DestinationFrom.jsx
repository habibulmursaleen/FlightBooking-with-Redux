import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import icon from "../../assets/icons/Frame.svg";
import { desFromSelection } from "../../redux/booking/actionsCreators";

const DestinationFrom = () => {
  const dispatch = useDispatch();
  const desFrom = useSelector((state) => state.bookings.desFrom);

  const desFromSelectionHandler = (value) => {
    dispatch(desFromSelection(value));
  };

  return (
    <div className="des-from">
      <p>Destination From</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="from"
          id="lws-from"
          required
          value={desFrom}
          onChange={(event) => desFromSelectionHandler(event.target.value)} // Call desFromSelectionHandler on select change
        >
          <option value="" hidden>
            Please Select
          </option>
          <option>Dhaka</option>
          <option>Sylhet</option>
          <option>Saidpur</option>
          <option>Cox's Bazar</option>
        </select>
      </div>
    </div>
  );
};

export default DestinationFrom;
