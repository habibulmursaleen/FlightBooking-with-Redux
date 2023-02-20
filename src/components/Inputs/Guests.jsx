import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import icon from "../../assets/icons/Vector (1).svg";
import { guestsSelection } from "../../redux/booking/actionsCreators";

const Guests = () => {
  const dispatch = useDispatch();
  const guests = useSelector((state) => state.bookings.guests);

  const guestsSelectionHandler = (value) => {
    dispatch(guestsSelection(value));
  };

  return (
    <div className="des-from">
      <p>Guests</p>
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <select
          className="outline-none px-2 py-2 w-full"
          name="guests"
          id="lws-guests"
          required
          value={guests}
          onChange={(event) => guestsSelectionHandler(event.target.value)} // Call desFromSelectionHandler on select change
        >
          <option value="" hidden>
            Please Select
          </option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
        </select>
      </div>
    </div>
  );
};

export default Guests;
