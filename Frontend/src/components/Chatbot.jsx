import { useState, useEffect } from "react";
import chatbotDataFile from "../assets/question[1].json";
import { RiRobot3Fill } from "react-icons/ri";


export default function CollegeChatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chatbotData, setChatbotData] = useState([]);

  useEffect(() => {
    setChatbotData(chatbotDataFile);
  }, []);

  const getBotResponse = (input) => {
    const lowercasedInput = input.toLowerCase().trim();

    const matchedData = chatbotData.find((item) =>
      lowercasedInput.includes(item.question.toLowerCase())
    );

    if (matchedData) return matchedData.answer;

    if (chatbotData.length > 0) {
      const randomIndex = Math.floor(Math.random() * chatbotData.length);
      return chatbotData[randomIndex].answer;
    }

    return "Please wait, loading information...";
  };

  const handleUserInput = () => {
    if (!userInput.trim()) return;

    const input = userInput;
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setUserInput("");

    const botResponse = getBotResponse(input);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    }, 500);
  };

  const suggestedQuestions = chatbotData.length > 0
    ? chatbotData.map(item => item.question).slice(0, 3)
    : [
        "Where can I find the 1st year academic calendar?",
        "How to download syllabus for 1st year CSE?",
        "What are the admission requirements?"
      ];

  const recentChats = [
    { text: "New chat", time: "20 secs ago" },
    { text: "Where can I find the 1st year academic calendar?", time: "45 mins ago" },
    { text: "How to download syllabus for 1st year CSE?", time: "3 hours ago" }
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          Welcome to <span className="text-purple-600">SatiVerse</span> <span className="text-purple-400 text-2xl"><RiRobot3Fill />
          </span>
        </h1>
        <p className="text-gray-500 mt-2">
          Your friendly AI college assistant! Need information about admissions, courses, or campus life?
        </p>
        <p className="text-gray-500 text-sm">
          SatiVerse is here to help with a smile. Start chatting now! 😊
        </p>
      </div>

      {/* Chat Box */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Messages */}
        {messages.length > 0 && (
          <div className="p-6 max-h-80 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-xs mb-4 p-3 rounded-2xl ${
                  message.isUser ? "bg-purple-600 text-white ml-auto" : "bg-gray-200 text-gray-800"
                }`}
              >
                <div dangerouslySetInnerHTML={{
                  __html: message.text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, 
                    '<a href="$2" class="underline text-purple-600" target="_blank" rel="noopener noreferrer">$1</a>')
                }} />
              </div>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-6 border-t">
          <div className="relative">
            <input
              type="text"
              placeholder="Write a question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
              className="w-full p-4 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleUserInput}
              className="absolute right-3 top-3 bg-black text-white p-2 rounded-lg"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="p-6 bg-gray-50">
          <div className="mb-4 flex items-center">
            <button className="text-sm text-gray-600 flex items-center">
              <span className="mr-1">➕</span> Add content
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => {
                  setUserInput(question);
                  setTimeout(() => handleUserInput(), 100);
                }}
                className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-xl text-sm text-gray-700"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Chats */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Recent Chat</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentChats.map((chat, index) => (
            <div key={index} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer">
              <div className="flex items-start">
                <div className="text-gray-400 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{chat.text}</p>
                  <span className="text-xs text-gray-400 mt-1 block">{chat.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
