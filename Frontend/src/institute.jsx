import React from 'react';
import logo from './assets/logo.png';
import { RiRobot2Fill } from "react-icons/ri";

export default function InstitutePage() {


  const handleRedirectToDashboard = () => {
    window.open('/dashboard', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Accessibility Bar */}
      <div className="bg-black text-white flex justify-between items-center px-4 py-2">
        <div className="flex items-center space-x-4">
          <button className="px-2 py-1 bg-gray-800">Screen Reader</button>
          <div className="flex space-x-2">
            <button className="px-2 border border-white">A</button>
            <button className="px-2 border border-white font-bold">A</button>
          </div>
          <div className="flex items-center space-x-2">
            <button>A-</button>
            <button>A</button>
            <button>A+</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>Technical Support No: 8989011204</span>
          <span>Email - satiengg01@gmail.com</span>
          <button className="hover:underline">Student Login</button>
          <button className="hover:underline">Institute Login</button>
        </div>
      </div>

      {/* Header with Logo */}
      <header className="bg-white p-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full mr-4">
            <div className="w-30 h-30 rounded-full bg-blue-200 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div>
            <h1 className="text-blue-800 font-bold text-xl">SAMRAT ASHOK TECHNOLOGICAL INSTITUTE</h1>
            <p className="text-gray-700">A grant-in-aid Autonomous Engineering College Estd. in 1960</p>
            <p className="text-gray-600">(Approved from AICTE and affiliated to RGPV & BU, Bhopal)</p>
            <p className="text-gray-600">NBA Accredited (B.Tech. Civil, Mech., E&I, CSE) and NAAC Accredited</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4 md:mt-0">
          <div className="bg-blue-500 text-white rounded-full px-6 py-2 flex items-center">
            <div className="mr-2 bg-white rounded-full p-1">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <p>For Student Grievance Redressal</p>
              <p className="font-bold">Click Here</p>
            </div>
          </div>
          <div className="bg-blue-500 text-white rounded-full px-6 py-2 flex items-center">
            <div className="mr-2 bg-white rounded-full p-1">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <p>For Admission Enquiries</p>
              <p><span className="font-bold">+91-7999810576</span> Click Here</p>
            </div>
          </div>
        </div>
      </header>

      
{/* Navigation */}
<nav className="bg-blue-900 text-white">
<ul className="flex flex-wrap">
  <li className="px-6 py-4 bg-white text-blue-900 font-bold">Home</li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    About Us 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Academics 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Departments 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Admission 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Campus Life 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Gallery 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800 flex items-center">
    Placement Cell 
    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </li>
  <li className="px-6 py-4 hover:bg-blue-800">Contact Us</li>
</ul>
</nav>

      {/* Main Image */}
      <div className="relative flex-grow">
        <div>
          <img
            src="src/assets/college.png"  
            alt="College" 
            className="w-full h-96 object-cover"
          />
        </div>
        
        {/* Notification Bar */}
        <div className="bg-red-600 text-white p-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            <circle cx="18" cy="8" r="3"></circle>
          </svg>
          <span className="font-bold">NOTIFICATIONS</span>
          <span className="mx-4 border-r border-white h-6"></span>
          <marquee className="flex-grow">Admissions open for 2024-25 Academic Year | New Research Center inauguration on May 15, 2024</marquee>
        </div>
      </div>

      {/* React Icon for Dashboard Redirect */}
      <button 
        onClick={handleRedirectToDashboard}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 text-white rounded-full p-4 shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:ring-4 hover:ring-blue-300 hover:animate-pulse animate-bounce"
        aria-label="Go to Dashboard"
      >
        <RiRobot2Fill className="w-8 h-8 text-white" />
      </button>    
    </div>
  );
}