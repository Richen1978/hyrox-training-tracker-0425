
// tracker.js (polished version with Week 1 workouts and styled UI)
// Replace your current /src/tracker.js with this file

import React, { useState } from 'react';

function HyroxTrainingTracker() {
  const [week, setWeek] = useState('Week 1');
  const [day, setDay] = useState('Day 1');
  const [collapsed, setCollapsed] = useState({ strength: false, hyrox: false, run: false });

  const workouts = {
    'Week 1': {
      'Day 1': {
        warmup: '5 min Assault Bike + banded shoulder mobility',
        strength: [
          { name: 'Back Squat', targetReps: '5x5', rpe: 8 },
          { name: 'Barbell Row', targetReps: '4x8', rpe: 7 },
        ],
        hyrox: {
          type: 'AMRAP 12 min',
          details: '10 Burpee Broad Jumps, 20 KB Swings (24kg), 250m Ski Erg'
        },
        run: 'Zone 2 Run – 40 min steady pace'
      },
      // Add other days similarly...
    }
  };

  const data = workouts[week]?.[day] || {};

  const toggleCollapse = section => {
    setCollapsed(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20, maxWidth: 800, margin: 'auto' }}>
      <h1>🏋️ Hyrox Tracker</h1>

      <label>Week: </label>
      <select value={week} onChange={e => setWeek(e.target.value)}>
        <option>Week 0</option>
        <option>Week 1</option>
      </select>

      <label style={{ marginLeft: 20 }}>Day: </label>
      <select value={day} onChange={e => setDay(e.target.value)}>
        {[...Array(7)].map((_, i) => (
          <option key={i}>Day {i + 1}</option>
        ))}
      </select>

      {data.warmup && <p><strong>🔥 Warm-up:</strong> {data.warmup}</p>}

      <div>
        <h3 onClick={() => toggleCollapse('strength')} style={{ cursor: 'pointer' }}>
          💪 Strength {collapsed.strength ? '▼' : '▲'}
        </h3>
        {!collapsed.strength && data.strength && data.strength.map((ex, i) => (
          <p key={i}>{ex.name} – {ex.targetReps} @ RPE {ex.rpe}</p>
        ))}
      </div>

      <div>
        <h3 onClick={() => toggleCollapse('hyrox')} style={{ cursor: 'pointer' }}>
          🧱 Hyrox Interval {collapsed.hyrox ? '▼' : '▲'}
        </h3>
        {!collapsed.hyrox && data.hyrox && (
          <p><strong>{data.hyrox.type}</strong>: {data.hyrox.details}</p>
        )}
      </div>

      <div>
        <h3 onClick={() => toggleCollapse('run')} style={{ cursor: 'pointer' }}>
          🏃 Run / Conditioning {collapsed.run ? '▼' : '▲'}
        </h3>
        {!collapsed.run && data.run && (
          <p>{data.run}</p>
        )}
      </div>

      <button style={{ marginTop: 30, padding: '10px 20px', fontSize: '1rem' }}>✅ Save Session</button>
    </div>
  );
}

export default HyroxTrainingTracker;
