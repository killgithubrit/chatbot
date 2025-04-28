// src/components/ProfileCard/ProfileCard.jsx
import React from "react";
import profileData from "../assets/profileData.json";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-2 text-center w-80 mx-auto">
      {/* Name */}
      <h2 className="text-2xl font-semibold text-gray-800">
        {profileData.name}
      </h2>

      {/* Details */}
      <div className="text-gray-600 ">
        <p>
          <span className="font-medium text-purple-600">Enrollment No:</span> {profileData.enrollmentNo}
        </p>
        <p>
          <span className="font-medium text-purple-600">Department:</span> {profileData.department}
        </p>
        <p>
          <span className="font-medium text-purple-600">Year:</span> {profileData.year}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
