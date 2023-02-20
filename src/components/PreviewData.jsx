import React from "react";
import { useSelector } from "react-redux";
import "../Styles/styles.css";
import DeleteButton from "../components/Inputs/DeleteButton";

const PreviewData = () => {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <div>
      <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {/* <!-- Row 1 --> */}
            {bookings.map((booking, index) => (
              <tr
                key={booking.BookingId}
                className="lws-bookedTable text-black"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <p className="lws-bookedFrom">{booking.desFrom}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="lws-bookedTo">{booking.desTo}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="lws-bookedDate">{booking.journeyDate}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <p className="lws-bookedGustes">{booking.guests}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="lws-bookedclassName">
                    {" "}
                    {booking.classs}{" "}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-4">
                    <DeleteButton BookingId={booking.BookingId} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreviewData;
