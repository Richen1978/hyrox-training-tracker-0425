
import React, { useState } from 'react';

function HyroxTrainingTracker() {
  const [week, setWeek] = useState('Week 0');
  const [day, setDay] = useState('Day 1');
  const [sleep, setSleep] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [recoveryNotes, setRecoveryNotes] = useState('');
  const [benchmarkData, setBenchmarkData] = useState({
    weight: '', fatPercent: '', musclePercent: '',
    cholesterol: '', glucose: '', crp: '',
    run5kTime: '', squat1RM: '', deadlift1RM: '', metconTime: ''
  });

  const handleBenchmarkChange = (field, value) => {
    setBenchmarkData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const payload = {
      week,
      day,
      sleep,
      sleepQuality,
      recoveryNotes,
      benchmarkData
    };
    console.log("Submitted Data:", payload);
    alert("Workout logged!");
  };

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: '0 auto' }}>
      <h1>Hyrox Training Tracker</h1>

      <label>Week:</label>
      <select value={week} onChange={e => setWeek(e.target.value)}>
        <option>Week 0</option>
        <option>Week 1</option>
      </select>

      {week !== 'Week 0' && (
        <>
          <label>Day:</label>
          <select value={day} onChange={e => setDay(e.target.value)}>
            {[...Array(7)].map((_, i) => (
              <option key={i}>{`Day ${i + 1}`}</option>
            ))}
          </select>
        </>
      )}

      <br /><br />
      <label>Sleep (hrs):</label><br />
      <input type="number" value={sleep} onChange={e => setSleep(e.target.value)} /><br /><br />

      <label>Sleep Quality (%):</label><br />
      <input type="number" value={sleepQuality} onChange={e => setSleepQuality(e.target.value)} /><br /><br />

      <label>Recovery Notes:</label><br />
      <textarea value={recoveryNotes} onChange={e => setRecoveryNotes(e.target.value)} /><br /><br />

      {week === 'Week 0' && (
        <>
          <h3>Week 0 Baseline Testing</h3>
          <label>Body Weight (kg):</label><br />
          <input type="number" value={benchmarkData.weight} onChange={e => handleBenchmarkChange('weight', e.target.value)} /><br />
          <label>Fat %:</label><br />
          <input type="number" value={benchmarkData.fatPercent} onChange={e => handleBenchmarkChange('fatPercent', e.target.value)} /><br />
          <label>Muscle %:</label><br />
          <input type="number" value={benchmarkData.musclePercent} onChange={e => handleBenchmarkChange('musclePercent', e.target.value)} /><br /><br />

          <label>Cholesterol (mmol/L):</label><br />
          <input type="number" value={benchmarkData.cholesterol} onChange={e => handleBenchmarkChange('cholesterol', e.target.value)} /><br />
          <label>Glucose (mmol/L):</label><br />
          <input type="number" value={benchmarkData.glucose} onChange={e => handleBenchmarkChange('glucose', e.target.value)} /><br />
          <label>CRP (mg/L):</label><br />
          <input type="number" value={benchmarkData.crp} onChange={e => handleBenchmarkChange('crp', e.target.value)} /><br /><br />

          <label>5km Run Time (mm:ss):</label><br />
          <input type="text" value={benchmarkData.run5kTime} onChange={e => handleBenchmarkChange('run5kTime', e.target.value)} /><br />
          <label>1RM Squat (kg):</label><br />
          <input type="number" value={benchmarkData.squat1RM} onChange={e => handleBenchmarkChange('squat1RM', e.target.value)} /><br />
          <label>1RM Deadlift (kg):</label><br />
          <input type="number" value={benchmarkData.deadlift1RM} onChange={e => handleBenchmarkChange('deadlift1RM', e.target.value)} /><br />
          <label>Metcon Time (mm:ss):</label><br />
          <input type="text" value={benchmarkData.metconTime} onChange={e => handleBenchmarkChange('metconTime', e.target.value)} /><br /><br />
        </>
      )}

      <button onClick={handleSubmit} style={{ marginTop: 20 }}>Save Entry</button>
    </div>
  );
}

export default HyroxTrainingTracker;
