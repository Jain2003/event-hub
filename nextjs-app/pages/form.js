import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/EventForm.module.css'; // Import CSS module
import Header from '../components/header';
import Footer from '../components/footer';

const LogoWithIcon = () => {
  const router = useRouter();

  // Handler to navigate to the home page
  const handleLogoClick = () => {
    router.push('/');
  };
  
  return (
    <h1 className={styles.logo}  onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <span>Event</span>
      <span>Hub</span>
    </h1>
  );
};

export default function EventForm() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ label: '', type: 'text' });
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);

  const router = useRouter();

  // Handler to navigate to the auth sign-in page
  const handleLoginClick = () => {
    router.push('/authlogin');
  };

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ label: '', type: 'text' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted form data:', questions);
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log('All completed');
    // Logic needs to be added
  }

  return (
    <div className={styles.outerContainer}>
      <Header/>
        <div className={styles.container}>
      <h2 className={styles.title}>Let's create your event 📸</h2>

      {/* Display added questions and inputs */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div key='Name' className={styles.question}>
          <label className={styles.label}>Event name</label>
          <input type='text' name='Event_name' required className={styles.input} />
        </div>
        <div key='Date' className={styles.question}>
          <label className={styles.label}>Event is from</label>
          <input type='date' name='Date' required className={styles.input} 
          value={eventDate} 
          onChange={(event) => setEventDate(event.target.value)}/>
        </div>
        <div key='Date' className={styles.question}>
          <label className={styles.label}>To</label>
          <input type='date' name='Date' required className={styles.input} 
          value={eventDate} 
          onChange={(event) => setEventDate(event.target.value)}/>
        </div>

        <h2 className={styles.label}>Got questions for your guests?</h2>
        {questions.map((question, index) => (
          <div key={index} className={styles.question}>
            <label className={styles.label}>{question.label}</label>
            <input type={question.type} name={question.label} disabled className={styles.input} />
          </div>
        ))}

        {/* Form to add a new question */}
      <div className={styles.addQuestion}>
        <input
          type="text"
          placeholder="Question here"
          value={newQuestion.label}
          onChange={(e) => setNewQuestion({ ...newQuestion, label: e.target.value })}
          className={styles.input}
        />
        <select
          value={newQuestion.type}
          onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
          className={styles.select}
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
        <button onClick={addQuestion} className={styles.addButton}>Add Question</button>
      </div>

        <button type="submit" className={styles.submitButton} onClick={sendData}>Submit Registration</button>
      </form>

    </div>
    <Footer/>
    </div>
  );
}
