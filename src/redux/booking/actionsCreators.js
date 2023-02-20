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

// action creators
export const desFromSelection = (value) => {
  return {
    type: DES_FROM_SELECTED,
    payload: value,
  };
};

export const desToSelection = (value) => {
  return {
    type: DES_TO_SELECTED,
    payload: value,
  };
};

export const guestsSelection = (value) => {
  return {
    type: GUESTS_SELECTED,
    payload: value,
  };
};

export const journeyDateSelection = (value) => {
  return {
    type: JOURNEY_DATE_SELECTED,
    payload: value,
  };
};

export const classSelection = (value) => {
  return {
    type: CLASS_SELECTED,
    payload: value,
  };
};

export const book = (bookingData) => {
  return {
    type: BOOK,
    payload: bookingData,
  };
};

export const deleteBooking = (BookingId) => {
  return {
    type: DELETE_BOOKING,
    payload: {
      BookingId,
    },
  };
};

export const resetDropdowns = () => ({
  type: RESET_DROPDOWNS,
});
