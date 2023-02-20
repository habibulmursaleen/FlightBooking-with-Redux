import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import { journeyDateSelection } from "../../redux/booking/actionsCreators";

const JourneyDate = () => {
  const dispatch = useDispatch();
  const journeyDate = useSelector((state) => state.bookings.journeyDate);

  const journeyDateSelectionHandler = (value) => {
    dispatch(journeyDateSelection(value));
  };
  return (
    <div className="des-from">
      <p>Journey Date</p>
      <input
        type="date"
        className="outline-none px-2 py-2 w-full date"
        name="date"
        id="lws-date"
        required
        value={journeyDate}
        onChange={(event) => journeyDateSelectionHandler(event.target.value)} // Call desFromSelectionHandler on select change
      />
    </div>
  );
};

export default JourneyDate;
