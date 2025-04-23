
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
---------------
      {week === 'Week 0' && (
        <>
          <h2>📊 Week 0 – Baseline Testing</h2>

          <h3>Body Composition</h3>
          <label>Weight (kg):</label><br />
          <input type="number" /><br />
          <label>Fat %:</label><br />
          <input type="number" /><br />
          <label>Muscle %:</label><br />
          <input type="number" /><br /><br />

          <h3>Bloodwork Markers</h3>
          <label>CRP (mg/L):</label><br />
          <input type="number" /><br />
          <label>Glucose (mmol/L):</label><br />
          <input type="number" /><br />
          <label>Cholesterol (mmol/L):</label><br />
          <input type="number" /><br /><br />

          <h3>Strength Tests</h3>
          <label>Back Squat 1RM (kg):</label><br />
          <input type="number" /><br />
          <label>Deadlift 1RM (kg):</label><br />
          <input type="number" /><br />
          <label>Push Press 1RM (kg):</label><br />
          <input type="number" /><br /><br />

          <h3>Conditioning</h3>
          <label>5km Run Time (mm:ss):</label><br />
          <input type="text" /><br />
          <label>Metcon (3RFT – Thrusters, Pull-ups, 500m Row):</label><br />
          <input type="text" /><br /><br />

          <h3>Hyrox Mini Circuit</h3>
          <label>Rounds Completed (AMRAP 12 min):</label><br />
          <input type="text" /><br />
          <label>Weight Used (Wall Ball / DBs):</label><br />
          <input type="text" /><br />
        </>
      )}

// Start of Week1
{week === 'Week 1' && (
  <>
    <h2>💪 Week 1 Training Plan</h2>

    {day === 'Day 1' && (
      <>
        <h3>🔥 Strength</h3>
        <p>Back Squat – 5x5 @ RPE 8</p>
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            <label>Set {i + 1} – Reps:</label><br />
            <input type="number" />
            <label>Weight (kg):</label><br />
            <input type="number" /><br /><br />
          </div>
        ))}

        <p>Barbell Row – 4x8 @ RPE 7</p>
        {[...Array(4)].map((_, i) => (
          <div key={`row${i}`}>
            <label>Set {i + 1} – Reps:</label><br />
            <input type="number" />
            <label>Weight (kg):</label><br />
            <input type="number" /><br /><br />
          </div>
        ))}

        <h3>🧱 Hyrox AMRAP (12 min)</h3>
        <p>Target: 10 BBJ / 20 KB Swings / 250m Ski</p>
        <label>Rounds Completed:</label><br />
        <input type="number" /><br />
        <label>Weight Used (KB):</label><br />
        <input type="number" /><br /><br />

        <h3>🏃 Zone 2 Run</h3>
        <label>Time (minutes):</label><br />
        <input type="number" />
        <label>Distance (km):</label><br />
        <input type="number" /><br /><br />
      </>
    )}

    {day === 'Day 2' && (
      <>
        <h3>🏃 Speed Intervals</h3>
        <p>6x400m w/ 90s rest</p>
        {[...Array(6)].map((_, i) => (
          <div key={i}>
            <label>Interval {i + 1} – Time (mm:ss):</label><br />
            <input type="text" /><br />
          </div>
        ))}

        <h3>💪 Optional Upper Body</h3>
        <p>DB Bench – 3x10</p>
        <label>Weight (kg):</label><br />
        <input type="number" /><br /><br />
        <p>DB Curls – 3x15</p>
        <label>Weight (kg):</label><br />
        <input type="number" /><br /><br />
      </>
    )}

    {day === 'Day 3' && (
      <>
        <h3>💪 Chest + Arms</h3>
        <p>Push Press – 4x6</p>
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <label>Set {i + 1} – Reps:</label><br />
            <input type="number" />
            <label>Weight (kg):</label><br />
            <input type="number" /><br /><br />
          </div>
        ))}
        <p>Chin-Ups – 4 sets AMRAP</p>
        {[...Array(4)].map((_, i) => (
          <div key={`chin${i}`}>
            <label>Set {i + 1} – Reps:</label><br />
            <input type="number" /><br />
          </div>
        ))}
        <p>Lateral Raise + Curl Superset – 3x12</p>
        <label>Weight Used (kg):</label><br />
        <input type="number" /><br /><br />

        <h3>🔥 Metcon 21-15-9</h3>
        <label>Total Time (mm:ss):</label><br />
        <input type="text" /><br />
        <label>Weight (DB):</label><br />
        <input type="number" /><br /><br />
      </>
    )}

    {day === 'Day 4' && (
      <>
        <h3>🏃 Long Endurance Run</h3>
        <label>Time (min):</label><br />
        <input type="number" />
        <label>Distance (km):</label><br />
        <input type="number" /><br /><br />
      </>
    )}

    {day === 'Day 5' && (
      <>
        <h3>🧱 Hyrox Simulation</h3>
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <label>Round {i + 1} – Time (mm:ss):</label><br />
            <input type="text" /><br />
          </div>
        ))}
        <label>Weight Used (Wall Ball):</label><br />
        <input type="number" /><br /><br />
      </>
    )}

    {day === 'Day 6' && (
      <>
        <h3>💪 Posterior Chain</h3>
        <p>RDL – 4x10</p>
        <label>Weight (kg):</label><br />
        <input type="number" /><br /><br />
        <p>Split Squat – 3x12/leg</p>
        <label>Weight (kg):</label><br />
        <input type="number" /><br /><br />
        <p>GHD Sit-ups – 3x15</p>
        <label>Notes or RPE:</label><br />
        <input type="text" /><br /><br />
      </>
    )}

    {day === 'Day 7' && (
      <>
        <h3>🧘 Recovery</h3>
        <label>Activity (walk/swim/bike):</label><br />
        <input type="text" />
        <label>Time (min):</label><br />
        <input type="number" /><br /><br />
      </>
    )}
  </>
)}


//End of Week 1---------------
  );
}

export default HyroxTrainingTracker;
