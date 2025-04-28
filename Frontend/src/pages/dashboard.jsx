// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import CalendarSection from "../components/CalenderSection";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-200 p-4">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Left Section: Profile and Calendar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <ProfileCard />
            <CalendarSection />
          </div>

          {/* Right Section: Chatbot */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg p-6 shadow-md h-full">
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;