import { useState } from 'react';

export default function RegistrationForm() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ label: '', type: 'text' });

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ label: '', type: 'text' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
    console.log('Submitted form data:', questions);
  };

  return (
    <div>
      <h2>Event Registration Form</h2>

      {/* Display added questions and inputs */}
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>{question.label}</label><br></br>
            <input type={question.type} name={question.label} required />
            <br></br>
          </div>
        ))}
        <br></br>
        <button type="submit">Submit Registration</button>
      </form>

        {/* Form to add a new question */}
      <div>
        <input
          type="text"
          placeholder="Question label"
          value={newQuestion.label}
          onChange={(e) => setNewQuestion({ ...newQuestion, label: e.target.value })}
        />
        <select
          value={newQuestion.type}
          onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
        <button onClick={addQuestion}>Add Question</button>
      </div>

    </div>
  );
}
