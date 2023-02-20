import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/styles.css";
import { book, resetDropdowns } from "../../redux/booking/actionsCreators";

const Book = () => {
  const desFrom = useSelector((state) => state.bookings.desFrom);
  const desTo = useSelector((state) => state.bookings.desTo);
  const journeyDate = useSelector((state) => state.bookings.journeyDate);
  const guests = useSelector((state) => state.bookings.guests);
  const classs = useSelector((state) => state.bookings.classs);
  const BookingId = useSelector((state) => state.bookings.BookingId);
  const bookings = useSelector((state) => state.bookings.bookings);

  const dispatch = useDispatch();

  const [isValid, setIsValid] = useState(false);

  const handleBookClick = (event) => {
    event.preventDefault();
    const bookingData = {
      BookingId,
      desFrom,
      desTo,
      journeyDate,
      guests,
      classs,
    };
    if (desFrom && desTo && journeyDate && guests && classs) {
      dispatch(book(bookingData));
      dispatch(resetDropdowns()); // reset the dropdown menus
      console.log(bookings);
      setIsValid(false);
    }
  };

  let disabled = false;
  console.log(bookings.length);

  if (bookings.length >= 3) {
    disabled = true;
  } else {
    disabled = false;
  }

  return (
    <button
      className="addCity"
      type="submit"
      id="lws-addCity"
      onClick={handleBookClick}
      disabled={disabled}
    >
      <svg
        width="15px"
        height="15px"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <span className="text-sm">Book</span>
    </button>
  );
};

export default Book;
