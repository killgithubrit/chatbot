import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calendarData from "../assets/calendarData.json";

const CalendarSection = () => {
  const [value, setValue] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getTileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const event = calendarData.find((item) => item.date === formattedDate);
      if (event) {
        return "highlight-date"; 
      }
    }
    return null;
  };

  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const event = calendarData.find((item) => item.date === formattedDate);
      return event ? (
        <div className="relative">
          <div className="event-dot w-3 h-3 bg-purple-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
      ) : null;
    }
    return null;
  };

  const handleDateClick = (value) => {
    setValue(value);
    const formattedDate = value.toISOString().split("T")[0];
    const event = calendarData.find((item) => item.date === formattedDate);
    setSelectedEvent(event || null);
  };

  // Format date for better display
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-md mx-auto my-2 flex justify-center flex-col bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Calendar Header */}
      <div className="p-4 pl-8 flex justify-center flex-col">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="text-blue
          -600">Academic</span> Calendar
        </h2>
        <p className="text-gray-500 text-sm">Click on highlighted dates to see events</p>
      </div>

      {/* Calendar Styling */}
      <style jsx>{`
        :global(.react-calendar) {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        :global(.react-calendar__tile) {
          position: relative;
          height: 3rem;
          border-radius: 0.5rem;
        }
        :global(.react-calendar__tile--now) {
          background: #f3f4f6;
        }
        :global(.react-calendar__tile--active) {
          background: #ddd6fe !important;
          color: #6d28d9;
        }
        :global(.react-calendar__navigation button) {
          border-radius: 0.5rem;
        }
        :global(.highlight-date) {
          font-weight: bold;
          color: #6d28d9;
        }
      `}</style>

      {/* Calendar Component */}
      <div className="flex justify-center">
        <Calendar
          onChange={handleDateClick}
          value={value}
          tileContent={getTileContent}
          tileClassName={getTileClassName}
          className="react-calendar"
        />
      </div>
      
      {/* Event Details */}
      {selectedEvent ? (
        <div className="p-4 bg-gray-50 ">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-purple-600">{selectedEvent.event}</h3>
              <span className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                {formatDate(selectedEvent.date)}
              </span>
            </div>
            
            {selectedEvent.description && (
              <p className="text-gray-700 mb-3">{selectedEvent.description}</p>
            )}
            
            {selectedEvent.location && (
              <p className="mt-1 text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {selectedEvent.location}
              </p>
            )}
            
            {selectedEvent.time && (
              <p className="mt-1 text-gray-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {selectedEvent.time}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="p-4 bg-gray-50 border-t text-center">
          <p className="text-gray-500">Select a highlighted date to view event details</p>
        </div>
      )}
    </div>
  );
};

export default CalendarSection;