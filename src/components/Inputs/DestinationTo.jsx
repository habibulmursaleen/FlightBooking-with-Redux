import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import icon from "../../assets/icons/Frame.svg";
import { desToSelection } from "../../redux/booking/actionsCreators";

const DestinationTo = () => {
  const dispatch = useDispatch();
  const desTo = useSelector((state) => state.bookings.desTo);

  const desToSelectionHandler = (value) => {
    dispatch(desToSelection(value));
  };
  return (
    <div className="des-from">
      <p>Destination To</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="to"
          id="lws-to"
          required
          value={desTo}
          onChange={(event) => desToSelectionHandler(event.target.value)} // Call desFromSelectionHandler on select change
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

export default DestinationTo;
