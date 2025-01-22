import React, { useState } from "react";

const QuestionComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: "Which algorithm stops at the last request in each direction before reversing?",
      options: {
        a: "SCAN",
        b: "LOOK",
        c: "C-LOOK",
        d: "SSTF",
      },
      answer: "b",
    },
    // ... Add the rest of the questions here
  ]);

  const [showAnswers, setShowAnswers] = useState(false);

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Disk Scheduling Questions</h1>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md border border-gray-300"
          >
            <h2 className="text-lg font-semibold">{`Q${index + 1}: ${item.question}`}</h2>
            <div className="mt-4 space-y-2">
              {Object.entries(item.options).map(([key, value]) => (
                <label
                  key={key}
                  className="block p-2 bg-gray-50 rounded-md hover:bg-blue-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={key}
                    className="mr-2"
                  />
                  {key.toUpperCase()}. {value}
                </label>
              ))}
            </div>
            {showAnswers && (
              <p className="mt-2 text-green-600 font-medium">
                Correct Answer: {item.options[item.answer]}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          onClick={() => alert("Your responses have been submitted!")}
        >
          Submit
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700"
          onClick={handleShowAnswers}
        >
          Show Answers
        </button>
      </div>
    </div>
  );
};

export default QuestionComponent;
