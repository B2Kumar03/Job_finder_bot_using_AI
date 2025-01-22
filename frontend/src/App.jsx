// Sample JSON for questions
const questions = {
  reasoning: [
    {
      id: 1,
      question: "Find the odd one out: Apple, Banana, Carrot, Mango",
      options: ["Apple", "Banana", "Carrot", "Mango"],
      correctAnswer: "Carrot",
    },
    {
      id: 11,
      question: "What is the function of an operating system?",
      options: ["Manage hardware", "Run applications", "Provide user interface", "All of the above"],
      correctAnswer: "All of the above",
    }
    // Add 9 more reasoning questions
  ],
  computer: [
    {
      id: 11,
      question: "What is the function of an operating system?",
      options: ["Manage hardware", "Run applications", "Provide user interface", "All of the above"],
      correctAnswer: "All of the above",
    },
    // Add 34 more computer questions
  ],
  maths: [
    {
      id: 46,
      question: "What is the derivative of x^2?",
      options: ["2x", "x^2", "x", "None of the above"],
      correctAnswer: "2x",
    },
    // Add 34 more math questions
  ],
};

// Main App Component
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import TestSeriesScreen from "./TestSeriesScreen";
import QuestionComponent from "./QuestionComponent";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (category, id, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [`${category}-${id}`]: answer }));
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    Object.keys(selectedAnswers).forEach((key) => {
      const [category, id] = key.split("-");
      const question = questions[category].find((q) => q.id === parseInt(id));
      if (question.correctAnswer === selectedAnswers[key]) {
        calculatedScore += 4;
      } else {
        calculatedScore -= 1;
      }
    });
    setScore(calculatedScore);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <TestSeriesScreen/>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">CUET PG Test</h1>
          <div className="flex items-center text-gray-600">
            <AiOutlineClockCircle className="mr-2" />
            {formatTime(timeLeft)}
          </div>
        </div> 

        <div className="mb-4">
          <h2 className="text-lg font-medium">
            Q{currentQuestion + 1}. {questions.reasoning[currentQuestion]?.question}
          </h2>
          <ul className="mt-2">
            {questions.reasoning[currentQuestion]?.options.map((option, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer border rounded mb-2 hover:bg-blue-100 ${
                  selectedAnswers[`reasoning-${questions.reasoning[currentQuestion]?.id}`] ===
                  option
                    ? "bg-blue-200"
                    : ""
                }`}
                onClick={() =>
                  handleAnswerSelect(
                    "reasoning",
                    questions.reasoning[currentQuestion]?.id,
                    option
                  )
                }
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() =>
              setCurrentQuestion((prev) =>
                Math.min(prev + 1, questions.reasoning.length - 1)
              )
            }
            disabled={currentQuestion === questions.reasoning.length - 1}
          >
            Next
          </button>
        </div>

        <div className="mt-4">
          <button
            className="w-full bg-green-500 text-white p-2 rounded"
            onClick={calculateScore}
          >
            Submit Test
          </button>
        </div>

        {score !== 0 && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold">Your Score: {score}</h2>
          </div>
        )}
      </div>
      <QuestionComponent/>
    </div>
  );
};

export default App;
