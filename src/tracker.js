
import React, { useState } from 'react';

function HyroxTrainingTracker() {
  const [date, setDate] = useState('');
  const [sleep, setSleep] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [recoveryNotes, setRecoveryNotes] = useState('');
  const [exercises, setExercises] = useState([
    { name: 'Deadlift', targetReps: 5, rpe: 8, reps: '', weight: '' },
    { name: 'Push Press', targetReps: 5, rpe: 8, reps: '', weight: '' },
    { name: 'Pull-Ups', targetReps: 5, rpe: 8, reps: '', weight: '' }
  ]);

  const handleExerciseChange = (index, field, value) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const handleSubmit = () => {
    const payload = {
      date,
      sleep,
      sleepQuality,
      recoveryNotes,
      exercises
    };
    console.log("Workout Saved:", payload);
    alert("Workout logged! (This will save to Firebase in the full version)");
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>Hyrox Training Tracker</h1>

      <label>Date:</label><br />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} /><br /><br />

      <label>Sleep (hrs):</label><br />
      <input type="number" value={sleep} onChange={e => setSleep(e.target.value)} /><br /><br />

      <label>Sleep Quality (%):</label><br />
      <input type="number" value={sleepQuality} onChange={e => setSleepQuality(e.target.value)} /><br /><br />

      <label>Recovery Notes:</label><br />
      <textarea value={recoveryNotes} onChange={e => setRecoveryNotes(e.target.value)} /><br /><br />

      <h3>Strength Training</h3>
      {exercises.map((ex, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          <strong>{ex.name}</strong><br />
          Target Reps: {ex.targetReps}, RPE: {ex.rpe}<br />
          Reps: <input type="number" value={ex.reps} onChange={e => handleExerciseChange(index, 'reps', e.target.value)} />
          &nbsp; Weight: <input type="number" value={ex.weight} onChange={e => handleExerciseChange(index, 'weight', e.target.value)} /> kg
        </div>
      ))}

      <button onClick={handleSubmit} style={{ marginTop: 20 }}>Save Workout</button>
    </div>
  );
}

export default HyroxTrainingTracker;
