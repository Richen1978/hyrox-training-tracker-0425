import React, { useState } from 'react';

function HyroxTrainingTracker() {
  const [week, setWeek] = useState('Week 0');
  const [day, setDay] = useState('Day 1');
  const [sleep, setSleep] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [recoveryNotes, setRecoveryNotes] = useState('');

  const isWeek0 = week === 'Week 0';
  const showDaySelector = week !== 'Week 0';

  const handleSubmit = () => {
    const payload = {
      week,
      day,
      sleep,
      sleepQuality,
      recoveryNotes
    };
    console.log('Workout Logged:', payload);
    alert('Saved! (This will save to Firebase later)');
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>🏋️ Hyrox Tracker</h1>

      <label>Week:</label>
      <select value={week} onChange={e => setWeek(e.target.value)}>
        {['Week 0', 'Week 1'].map((w, i) => (
          <option key={i}>{w}</option>
        ))}
      </select>

      {showDaySelector && (
        <>
          <label style={{ marginLeft: 20 }}>Day:</label>
          <select value={day} onChange={e => setDay(e.target.value)}>
            {['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'].map((d, i) => (
              <option key={i}>{d}</option>
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
      {isWeek0 && (
        <>
          <h2>📊 Week 0 Baseline Testing</h2>

          <h4>Body Composition</h4>
          <label>Weight (kg):</label><br />
          <input type="number" /><br />
          <label>Fat %:</label><br />
          <input type="number" /><br />
          <label>Muscle %:</label><br />
          <input type="number" /><br /><br />

          <h4>Blood Markers</h4>
          <label>CRP (mg/L):</label><br />
          <input type="number" /><br />
          <label>Glucose (mmol/L):</label><br />
          <input type="number" /><br />
          <label>Cholesterol (mmol/L):</label><br />
          <input type="number" /><br /><br />

          <h4>Performance Benchmarks</h4>
          <label>Back Squat 1RM (kg):</label><br />
          <input type="number" /><br />
          <label>Deadlift 1RM (kg):</label><br />
          <input type="number" /><br />
          <label>Push Press 1RM (kg):</label><br />
          <input type="number" /><br /><br />

          <label>5km Run Time (mm:ss):</label><br />
          <input type="text" /><br />
          <label>Metcon Time (3RFT – Thrusters, Pull-ups, 500m Row):</label><br />
          <input type="text" /><br /><br />
</>
      {week === 'Week 1' && (
        <>
          <h2>💪 Week 1 Training</h2>

          {day === 'Day 1' && (
            <>
              <h3>🔥 Strength</h3>
              <p>Back Squat – 5x5 @ RPE 8</p>
              <p>Barbell Row – 4x8 @ RPE 7</p>

              <h3>🧱 Hyrox Intervals (AMRAP 12 min)</h3>
              <ul>
                <li>10 Burpee Broad Jumps</li>
                <li>20 KB Swings (24kg)</li>
                <li>250m Ski Erg</li>
              </ul>

              <h3>🏃 Run</h3>
              <p>40 min Zone 2 (steady nasal breathing)</p>
            </>
          )}

          {day === 'Day 2' && (
            <>
              <h3>🏃 Speed Intervals</h3>
              <p>6x400m Intervals – 90s rest between reps</p>
              <p>Warm-up: 10 min easy jog</p>

              <h3>💪 Optional Strength</h3>
              <p>DB Bench Press 3x10</p>
              <p>DB Curls 3x15</p>

              <h3>🧘 Mobility</h3>
              <p>20 min recovery flow + foam roll</p>
            </>
          )}

          {day === 'Day 3' && (
            <>
              <h3>💥 Chest + Arms Hypertrophy</h3>
              <p>Push Press – 4x6</p>
              <p>Chin-ups – 4 sets AMRAP</p>
              <p>Lateral Raises + Bicep Curls Superset – 3x12</p>

              <h3>🔥 Metcon (21-15-9)</h3>
              <ul>
                <li>DB Snatch</li>
                <li>Air Squats</li>
                <li>Box Jumps</li>
              </ul>
            </>
          )}

          {day === 'Day 4' && (
            <>
              <h3>🏃 Running Endurance</h3>
              <p>45 min Zone 2 run – nose breathing only</p>
              <p>Post-run mobility: calves, glutes, hip flexors</p>
            </>
          )}

          {day === 'Day 5' && (
            <>
              <h3>🧱 Hyrox Intervals (3 Rounds for Time)</h3>
              <ul>
                <li>1km Run</li>
                <li>50m DB Lunges (2x20kg)</li>
                <li>750m Row</li>
                <li>30 Wall Balls (9kg)</li>
              </ul>
              <p>Rest 2 min between rounds</p>
            </>
          )}

          {day === 'Day 6' && (
            <>
              <h3>💪 Posterior Chain Strength</h3>
              <p>Romanian Deadlift – 4x10</p>
              <p>Bulgarian Split Squat – 3x12 per leg</p>
              <p>GHD Sit-ups – 3x15</p>
              <p>Optional Sled Sub: Farmers Carry + Barbell Row</p>
            </>
          )}

          {day === 'Day 7' && (
            <>
              <h3>🧘 Active Recovery</h3>
              <p>20–30 min walk / bike / swim (Zone 1)</p>
              <p>Breathwork & full body mobility</p>
              <p>Optional: HRV or gratitude journaling</p>
            </>
          )}
        </>
      )}

        
      )}
