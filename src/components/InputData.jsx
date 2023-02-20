import React from "react";
import "../Styles/styles.css";
import BookingButton from "./Inputs/BookingButton";
import Class from "./Inputs/Class";
import DestinationFrom from "./Inputs/DestinationFrom";
import DestinationTo from "./Inputs/DestinationTo";
import Guests from "./Inputs/Guests";
import JourneyDate from "./Inputs/JourneyDate";

const InputData = () => {
  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform">
            <DestinationFrom />
            <DestinationTo />
            <JourneyDate />
            <Guests />
            <Class />
            <BookingButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputData;
