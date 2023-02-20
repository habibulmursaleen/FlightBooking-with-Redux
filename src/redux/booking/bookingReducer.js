import {
  BOOK,
  CLASS_SELECTED,
  DELETE_BOOKING,
  DES_FROM_SELECTED,
  DES_TO_SELECTED,
  GUESTS_SELECTED,
  JOURNEY_DATE_SELECTED,
  RESET_DROPDOWNS,
} from "./actionTypes";

const initialState = {
  BookingId: 0,
  desFrom: "",
  desTo: "",
  journeyDate: "",
  guests: 0,
  classs: "",
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DES_FROM_SELECTED:
      return { ...state, desFrom: action.payload };
    case DES_TO_SELECTED:
      return { ...state, desTo: action.payload };
    case JOURNEY_DATE_SELECTED:
      return { ...state, journeyDate: action.payload };
    case GUESTS_SELECTED:
      return { ...state, guests: action.payload };
    case CLASS_SELECTED:
      return { ...state, classs: action.payload };
    case BOOK:
      if (state.bookings.length < 3) {
        return {
          ...state,
          bookings: [...state.bookings, action.payload],
          BookingId: state.BookingId + 1,
        };
      } else {
        return state;
      }

    case DELETE_BOOKING:
      const updatedBookings = state.bookings.filter(
        (booking) => booking.BookingId !== action.payload.BookingId
      );
      return {
        ...state,
        bookings: updatedBookings,
      };

    case RESET_DROPDOWNS:
      return {
        ...state,
        desFrom: "",
        desTo: "",
        journeyDate: "",
        guests: 0,
        classs: "",
      };

    default:
      return state;
  }
};

export default bookingReducer;
