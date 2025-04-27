import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-assistant" element={<AIAssistantPage />} />
      </Routes>
    </Router>
  );
}

// Home Page Component
const HomePage = () => {
  return (
    <div className="App">
      <Navbar />
      <Academics />
      <AIButton />
    </div>
  );
};

// Navigation Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-800 shadow-lg' : 'bg-blue-800 bg-opacity-90'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-xl text-white">Engineering College</h1>
            <p className="text-xs text-blue-200">Excellence in Education</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation - Only Academic link */}
        <div className="hidden md:flex space-x-6">
          <a href="#academics" className="text-white hover:text-blue-300 font-medium">Academics</a>
        </div>
      </div>
      
      {/* Mobile Navigation - Only Academic link */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#academics" className="block py-2 px-4 text-white hover:bg-blue-600 rounded">Academics</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Academic Programs Section
const Academics = () => {
  const programs = [
    { title: "Computer Science & Engineering", description: "Learn software development, algorithms, AI, and more." },
    { title: "Electrical Engineering", description: "Study power systems, electronics, and electrical machines." },
    { title: "Mechanical Engineering", description: "Explore mechanics, thermodynamics, manufacturing processes." },
    { title: "Civil Engineering", description: "Focus on structures, construction, and infrastructure design." },
    { title: "Electronics & Communication", description: "Study communication systems, signal processing, VLSI." },
    { title: "Information Technology", description: "Learn networks, databases, and information systems." }
  ];

  return (
    <section className="pt-28 pb-16 bg-gray-100" id="academics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Academic Programs</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">Discover our comprehensive range of undergraduate and postgraduate engineering programs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// AI Button Component - UPDATED: Removed SVG and now using text "AI"
const AIButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Redirect to AI page using Link from react-router */}
      <Link to="/ai-assistant">
        <button 
          className="bg-blue-400 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg font-bold text-xl"
          aria-label="Open AI Assistant"
        >
          AI
        </button>
      </Link>
    </div>
  );
};

// Questions Database
const questionsData = [
  // 1st Year Questions
  {
    "question": "Where can I find the 1st year academic calendar?",
    "answer": "You can [view the 1st Year Academic Calendar here](https://yourbackend.com/static/first_year_calendar.pdf)."
  },
  {
    "question": "How to download syllabus for 1st year CSE?",
    "answer": "Download [CSE 1st Year Syllabus](https://yourbackend.com/static/cse_1st_year_syllabus.pdf)."
  },
  {
    "question": "When is the orientation program for freshers?",
    "answer": "Orientation program is scheduled on 15th August 2025."
  },
  {
    "question": "Where can I submit the anti-ragging affidavit?",
    "answer": "Submit the [Anti-Ragging Affidavit here](https://yourbackend.com/static/anti_ragging_affidavit.pdf)."
  },
  {
    "question": "How to apply for hostel accommodation?",
    "answer": "Fill out the [Hostel Admission Form](https://yourbackend.com/static/hostel_form.pdf)."
  },
  {
    "question": "How to generate smart card for ID purposes?",
    "answer": "Go to Student Portal > Smart Card > Generate Data File."
  },
  {
    "question": "Where can I find timetable for 1st-year classes?",
    "answer": "Timetable is available under Student Portal > Academics > Timetable."
  },
  {
    "question": "What documents are needed for admission?",
    "answer": "You need 10th and 12th Marksheet, Transfer Certificate, Migration Certificate, Passport photos."
  },
  {
    "question": "How to pay first-year tuition fees?",
    "answer": "Tuition fees can be paid via Student Portal > Admissions > Pay Fees."
  },
  {
    "question": "How to contact assigned faculty mentor?",
    "answer": "Faculty mentor list is available under Student Portal > Mentorship Program."
  },
  {
    "question": "How to apply for SC/ST scholarship?",
    "answer": "Apply under Student Portal > Scholarships > Government Scholarship section."
  },
  {
    "question": "How to report missing classes issue?",
    "answer": "Contact your class coordinator or HOD."
  },
  {
    "question": "What is CBCS system?",
    "answer": "CBCS (Choice Based Credit System) allows choosing elective subjects for personalized learning."
  },
  {
    "question": "Where do I find online classes link?",
    "answer": "Online class links are shared via Student Portal > Announcements section."
  },
  {
    "question": "How to reset my student portal password?",
    "answer": "Use 'Forgot Password' option on the portal login page."
  },

  // 2nd Year Questions
  {
    "question": "Where can I download syllabus for 2nd year CSE?",
    "answer": "Here is [CSE 2nd Year Syllabus PDF](https://yourbackend.com/static/cse_2nd_year_syllabus.pdf)."
  },
  {
    "question": "When does minor project allotment start?",
    "answer": "Minor project allotment generally starts in January of 2nd year."
  },
  {
    "question": "How to check updated subject list for 2nd year?",
    "answer": "Updated subjects are available on the Academics > Curriculum page."
  },
  {
    "question": "Where can I download scholarship renewal form?",
    "answer": "Download [Scholarship Renewal Form](https://yourbackend.com/static/scholarship_renewal_form.pdf)."
  },
  {
    "question": "How to apply for branch change after 1st year?",
    "answer": "Apply for branch change under the Student Services section after results."
  },
  {
    "question": "How can I participate in tech fests?",
    "answer": "Register for fests through Student Portal > Event Registrations."
  },
  {
    "question": "How to check 2nd year academic calendar?",
    "answer": "Academic calendar is available under Student Portal > Academics > Calendar."
  },
  {
    "question": "Where to find previous year question papers?",
    "answer": "Previous question papers are available in the Central Library Archives."
  },
  {
    "question": "Where to fill backlog examination form?",
    "answer": "Fill [Backlog Exam Form](https://yourbackend.com/static/backlog_form.pdf) from the Student Portal."
  },
  {
    "question": "How to join coding clubs or societies?",
    "answer": "Membership form available at Student Clubs > Join Now section."
  },

  // 3rd Year Questions
  {
    "question": "How to register for internships?",
    "answer": "Internship registration is open at the Training and Placement Cell."
  },
  {
    "question": "Where can I get NOC for industrial training?",
    "answer": "Download [NOC for Industrial Training](https://yourbackend.com/static/noc_industrial_training.pdf)."
  },
  {
    "question": "When is the major project topic selection for 3rd year?",
    "answer": "Major project topic selection happens in November of 3rd year."
  },
  {
    "question": "What are the attendance rules for 3rd year students?",
    "answer": "Minimum 75% attendance is required to appear for exams."
  },
  {
    "question": "Where can I find 3rd-year academic calendar?",
    "answer": "Check the [3rd Year Academic Calendar](https://yourbackend.com/static/third_year_calendar.pdf)."
  },
  {
    "question": "Where to upload industrial training report?",
    "answer": "Upload reports under Training and Placement Portal > Internship Submissions."
  },
  {
    "question": "How can I apply for study abroad programs?",
    "answer": "Details are available under International Cell > Study Abroad Opportunities."
  },
  {
    "question": "How to apply for placement preparation workshops?",
    "answer": "Register via the Placement Portal > Workshops section."
  },
  {
    "question": "Where to submit major project synopsis?",
    "answer": "Submit to your project guide and upload it on Student Portal > Projects section."
  },
  {
    "question": "Where can I check semester exam results?",
    "answer": "Results are published under Student Portal > Examination > View Results."
  },
  {
    "question": "How to apply for merit scholarship?",
    "answer": "Top 10% students automatically qualify. Check under Scholarship Notifications."
  },
  {
    "question": "When does pre-placement training start?",
    "answer": "Pre-placement training begins from July for 3rd-year students."
  },
  {
    "question": "Where to find aptitude training material?",
    "answer": "Materials are available under Placement Resources in Student Portal."
  },
  {
    "question": "What is the eligibility criteria for campus placements?",
    "answer": "Minimum CGPA 6.0 and no active backlogs."
  },
  {
    "question": "When to apply for summer internships?",
    "answer": "Start applying between February and March."
  },

  // 4th Year Questions
  {
    "question": "How to apply for provisional degree certificate?",
    "answer": "Download the [Provisional Certificate Application Form](https://yourbackend.com/static/provisional_certificate_form.pdf)."
  },
  {
    "question": "When does final semester project evaluation happen?",
    "answer": "Evaluation occurs in April-May after project submission."
  },
  {
    "question": "Where can I find 4th-year final timetable?",
    "answer": "Final semester timetable is posted under Student Portal > Academics > Timetables."
  },
  {
    "question": "How to download convocation registration form?",
    "answer": "Download [Convocation Registration Form](https://yourbackend.com/static/convocation_registration.pdf)."
  },
  {
    "question": "How to collect the final mark sheet?",
    "answer": "Final mark sheets are issued by the Examination Cell after convocation."
  },
  {
    "question": "Where to check final placement offers?",
    "answer": "Final offers are listed in Student Portal > Placements > Final Offers."
  },
  {
    "question": "How to apply for migration certificate?",
    "answer": "Apply via Student Services or download [Migration Certificate Form](https://yourbackend.com/static/migration_form.pdf)."
  },
  {
    "question": "How to apply for degree certificate?",
    "answer": "Degree application process details are published under Registrar's Office Notifications."
  },
  {
    "question": "When to register for alumni association?",
    "answer": "Alumni registration starts immediately after final year results."
  },
  {
    "question": "What happens if final year student has backlog?",
    "answer": "You must clear backlog exams in the special supplementary schedule."
  },

  // Common Questions (All Students)
  {
    "question": "Where can I find important college forms?",
    "answer": "You can [access all important forms here](https://yourbackend.com/static/forms_list.pdf)."
  },
  {
    "question": "How can I check my attendance online?",
    "answer": "Login to Student Portal > Attendance section."
  },
  {
    "question": "Where to download the anti-ragging affidavit format?",
    "answer": "Download [Anti-Ragging Affidavit Format](https://yourbackend.com/static/anti_ragging_affidavit.pdf)."
  },
  {
    "question": "Where is the Training and Placement Cell located?",
    "answer": "T&P Cell is located in Block A, Ground Floor."
  },
  {
    "question": "How to find student council contacts?",
    "answer": "Council contacts are listed on the Student Portal > Contacts."
  },
  {
    "question": "Can I apply for library membership online?",
    "answer": "No, visit the Library Office physically for membership."
  },
  {
    "question": "What is the college website URL?",
    "answer": "Official website is [https://www.satiengg.in/](https://www.satiengg.in/)."
  },
  {
    "question": "Who to contact for exam grievances?",
    "answer": "Contact Examination Grievance Cell through portal or in person."
  },
  {
    "question": "How to raise IT service complaints?",
    "answer": "Use the Student Portal > IT Helpdesk."
  },
  {
    "question": "Where can I get transcripts for foreign applications?",
    "answer": "Apply at the Registrar's Office and pay processing fees."
  }
];

// AI Assistant Page Component
const AIAssistantPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I\'m your College AI Assistant. How can I help you today? You can ask me about admissions, academics, hostel, placements, and other college-related questions.' }
  ]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Function to find the best matching response
  const findResponseForQuery = (query) => {
    if (!query.trim()) return null;
    
    const queryLower = query.toLowerCase();
    
    // First check for exact matches
    for (const qa of questionsData) {
      if (qa.question.toLowerCase() === queryLower) {
        return qa.answer;
      }
    }
    
    // Then check for partial matches
    const matchedQAs = questionsData.filter(qa => 
      qa.question.toLowerCase().includes(queryLower) || 
      queryLower.includes(qa.question.toLowerCase().split(' ').slice(0, 3).join(' '))
    );
    
    if (matchedQAs.length > 0) {
      return matchedQAs[0].answer;
    }
    
    // Check for keywords
    const keywords = [
      { words: ['calendar', 'schedule'], response: "You can find calendars under the Student Portal > Academics > Calendar section." },
      { words: ['syllabus', 'course', 'subject'], response: "Syllabus for all courses can be downloaded from Student Portal > Academics > Syllabus section." },
      { words: ['fee', 'payment', 'tuition'], response: "Fee payments can be made through Student Portal > Finance > Pay Fees section." },
      { words: ['hostel', 'accommodation', 'dormitory'], response: "For hostel related queries, please visit the Hostel Administration office or check Student Portal > Hostel section." },
      { words: ['placement', 'job', 'company', 'interview'], response: "For placement information, visit the Training & Placement Cell or check Portal > Placements section." },
      { words: ['scholarship', 'financial aid'], response: "Scholarship information is available under Student Portal > Scholarships section." },
      { words: ['admission', 'apply', 'entrance'], response: "Admission details are available on our college website under Admissions tab." },
      { words: ['form', 'document', 'certificate'], response: "Various forms and certificates can be downloaded from Student Portal > Documents section." },
      { words: ['exam', 'test', 'assessment'], response: "Examination related information is available under Student Portal > Examination section." }
    ];
    
    for (const keyword of keywords) {
      if (keyword.words.some(word => queryLower.includes(word))) {
        return keyword.response;
      }
    }
    
    // Default response if no match
    return "I don't have specific information about that. Please visit the Student Portal or contact the respective department office for assistance. Is there anything else I can help you with?";
  };

  // Function to suggest questions
  const updateSuggestions = (inputText) => {
    if (!inputText.trim()) {
      setSuggestions([]);
      return;
    }
    
    const inputLower = inputText.toLowerCase();
    const matched = questionsData
      .filter(qa => qa.question.toLowerCase().includes(inputLower))
      .slice(0, 3)
      .map(qa => qa.question);
    
    setSuggestions(matched);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    updateSuggestions(newInput);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Find response
    const response = findResponseForQuery(input);
    
    // Clear input and suggestions
    setInput('');
    setSuggestions([]);
    
    // Simulate a short delay before bot response
    setTimeout(() => {
      const botMessage = { sender: 'bot', text: response };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">
              AI
            </div>
            <h1 className="text-xl font-bold">Engineering College AI Assistant</h1>
          </div>
          <Link to="/" className="text-white hover:text-blue-200">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Chatbot Interface */}
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4">
            <h2 className="font-bold">College AI Assistant</h2>
            <p className="text-xs text-blue-200">Ask me anything about the college</p>
          </div>
          
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50" id="chat-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.sender === 'user' ? 'text-right' : ''}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg max-w-3/4 ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline text-blue-400" target="_blank">$1</a>') }}
                >
                </div>
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="relative">
            {suggestions.length > 0 && (
              <div className="absolute bottom-full w-full bg-white border rounded-t-lg shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="border-t p-4 flex">
              <input 
                type="text" 
                value={input}
                onChange={handleInputChange}
                placeholder="Type your question about college..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-white text-blue-600 px-4 py-2 rounded-r-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Quick Questions Section */}
        <div className="mt-6 w-full max-w-2xl">
          <h3 className="text-gray-700 font-medium mb-2">Quick Questions:</h3>
          <div className="flex flex-wrap gap-2">
            {["academic calendar", "hostel accommodation", "scholarship", "placement"].map((topic, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setInput(`Where can I find information about ${topic}?`);
                  setSuggestions([]);
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;