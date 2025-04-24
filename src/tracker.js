import React, { useState } from 'react';

// Full 14-week Hyrox Training Programme Data
const weeksData = [
  {
    id: 0,
    title: 'Baseline Testing',
    explanation: 'Establish initial benchmarks across strength (3RM), running, endurance, and metabolic conditioning.',
    days: [
      {
        title: 'Day 1 – Strength Test',
        warmup: ['3 min easy row', '10 leg swings each side', '10 walking lunges', '5 min dynamic mobility'],
        strengthTest: ['Deadlift (3RM)', 'Back Squat (3RM)', 'Bench Press (3RM)', 'Weighted Pull-ups (3RM)'],
      },
      {
        title: 'Day 2 – Running Test',
        warmup: ['5 min easy jog', '4 x 100m strides', '5 min dynamic drills'],
        runningTest: ['5km time', '1km time'],
      },
      {
        title: 'Day 3 – Endurance Test',
        warmup: ['5 min row', '10 arm circles', '10 air squats'],
        enduranceTest: ['2km row time', 'max Wall Balls (7 min)'],
      },
      {
        title: 'Day 4 – MetCon Test',
        warmup: ['5 min easy run', '5 burpees + 10 inchworms + 10 air squats'],
        amrap: [
          { label: 'Burpee Broad Jumps', detail: '5m' },
          { label: 'KB Farmer Carry', detail: '20m', weight: 24 },
          { label: 'Wall Balls', detail: '20 reps', weight: 9 },
          { label: 'Ski Erg', detail: '250m' },
        ],
        amrapDuration: '20 min',
      },
    ],
  },
  // Weeks 1-12 core programme
  ...Array.from({ length: 12 }, (_, i) => {
    const w = i + 1;
    return {
      id: w,
      title: `Week ${w}`,
      explanation: `Core Phase Week ${w}: Build strength, endurance, and Hyrox fitness.`,
      days: [
        {
          title: 'Day 1 – Strength + Hyrox Intervals',
          warmup: ['5 min mobility drills', '5 min easy row', '2 x 10 air squats + push-ups'],
          strength: [
            { label: 'Deadlift', sets: 4, reps: 5, rpe: 8, rest: '2-3 min' },
            { label: 'Bench Press', sets: 4, reps: 5, rpe: 8, rest: '2-3 min' },
            { label: 'Back Squat', sets: 4, reps: 5, rpe: 8, rest: '2-3 min' },
          ],
          interval: {
            rounds: 3,
            rest: '2 min',
            ex: [
              { label: 'Wall Balls', detail: '20 reps', weight: 9 },
              { label: 'Burpee Broad Jumps', detail: '15 reps' },
              { label: 'DB Lunges', detail: '10 reps/leg', weight: 22.5 },
              { label: 'Ski Erg', detail: '250m' },
            ],
          },
        },
        {
          title: 'Day 2 – Running Intervals',
          warmup: ['5 min easy jog', '4 x 100m strides'],
          runningInterval: { rounds: 6, description: '6 x 400m @ goal 5k pace -10s, Rest 90s' },
        },
        {
          title: 'Day 3 – Bodybuilding + AMRAP',
          warmup: ['5 min light bike', '10 band pull-aparts', '10 shoulder dislocations'],
          bodybuilding: [
            { label: 'Incline Bench Press', sets: 3, reps: 8 },
            { label: 'DB Shoulder Press', sets: 3, reps: 10 },
            { label: 'Bicep Curl', sets: 3, reps: 12 },
          ],
          amrap: [
            { label: 'KB Swings', detail: '12 reps', weight: 24 },
            { label: 'Push-ups', detail: '12 reps' },
            { label: 'Sit-ups', detail: '12 reps' },
          ],
          amrapDuration: '7 min',
        },
        {
          title: 'Day 4 – Functional Strength + Hyrox AMRAP',
          warmup: ['5 min run', '5 min dynamic mobility'],
          strength: [ { label: 'Front Squat', sets: 4, reps: 6, rpe: 8, rest: '2-3 min' } ],
          amrap: [
            { label: 'Air Squats', detail: '20 reps' },
            { label: 'DB Thrusters', detail: '15 reps', weight: 15 },
            { label: 'Burpee Broad Jumps', detail: '10 reps' },
            { label: 'Row', detail: '250m' },
          ],
          amrapDuration: '18 min',
        },
        {
          title: 'Day 5 – Endurance Run',
          warmup: ['10 min dynamic drills'],
          enduranceRun: 'Zone 2 steady run (60 min)',
        },
      ],
    };
  }),
  // Week 13: Retest
  {
    id: 13,
    title: 'Retest Week',
    explanation: 'Re-assess baseline metrics to measure improvement.',
    days: [
      { title: 'Day 1 – Strength Retest', warmup: ['3 min row', 'dynamic mobility'], strengthTest: ['Deadlift (3RM)', 'Back Squat (3RM)', 'Bench Press (3RM)', 'Weighted Pull-ups (3RM)'] },
      { title: 'Day 2 – Running Retest', warmup: ['5 min jog', '4 strides'], runningTest: ['5km time', '1km time'] },
      { title: 'Day 3 – Endurance Retest', warmup: ['5 min row', 'dynamic prep'], enduranceTest: ['2km row time', 'max Wall Balls (7 min)'] },
      { title: 'Day 4 – MetCon Retest', warmup: ['5 min run', '5 burpees + mobility'], amrap: [
          { label: 'Burpee Broad Jumps', detail: '5m' },
          { label: 'KB Farmer Carry', detail: '20m', weight: 24 },
          { label: 'Wall Balls', detail: '20 reps', weight: 9 },
          { label: 'Ski Erg', detail: '250m' },
        ], amrapDuration: '20 min' },
    ],
  },
];

// Tracker component
export default function HyroxTrainingTracker() {
  const [weekId, setWeekId] = useState(0);
  const [dayIdx, setDayIdx] = useState(0);
  const [entries, setEntries] = useState({});

  const week = weeksData.find(w => w.id === weekId);
  const day = week.days[dayIdx];

  const handleEntryChange = (key, value) => {
    setEntries(prev => ({
      ...prev,
      [weekId]: {
        ...(prev[weekId] || {}),
        [dayIdx]: {
          ...(prev[weekId]?.[dayIdx] || {}),
          [key]: value,
        }
      }
    }));
  };

  const renderInputs = () => {
    const data = entries[weekId]?.[dayIdx] || {};
    const inputs = [];
    // Strength Test
    if (day.strengthTest) {
      day.strengthTest.forEach((test, i) => {
        inputs.push(
          <div key={i} className="mb-2">
            <h5 className="font-medium">{test}</h5>
            <input type="number" placeholder="Weight (kg)" value={data[`${test}-w`]||''}
              onChange={e => handleEntryChange(`${test}-w`, e.target.value)}
              className="border mr-2 p-1 rounded w-24" />
            <input type="number" placeholder="Reps" value={data[`${test}-r`]||''}
              onChange={e => handleEntryChange(`${test}-r`, e.target.value)}
              className="border mr-2 p-1 rounded w-16" />
            <input type="number" placeholder="RPE" value={data[`${test}-e`]||''}
              onChange={e => handleEntryChange(`${test}-e`, e.target.value)}
              className="border p-1 rounded w-16" />
          </div>
        );
      });
    }
    // Strength
    if (day.strength) {
      day.strength.forEach((ex, i) => {
        inputs.push(
          <div key={`st${i}`} className="mb-2">
            <h5 className="font-medium">{ex.label} ({ex.sets}×{ex.reps})</h5>
            {Array.from({ length: ex.sets }).map((_, si) => (
              <div key={si} className="flex gap-2 items-center mb-1">
                <span>Set {si+1}:</span>
                <input type="number" placeholder="Weight" value={data[`${ex.label}-w${si}`]||''}
                  onChange={e => handleEntryChange(`${ex.label}-w${si}`, e.target.value)}
                  className="border p-1 rounded w-24" />
                <input type="number" placeholder="RPE" value={data[`${ex.label}-e${si}`]||''}
                  onChange={e => handleEntryChange(`${ex.label}-e${si}`, e.target.value)}
                  className="border p-1 rounded w-16" />
              </div>
            ))}
          </div>
        );
      });
    }
    // Running Test
    if (day.runningTest) {
      day.runningTest.forEach((t, i) => {
        inputs.push(
          <div key={`rt${i}`} className="mb-2">
            <span>{t}:</span>
            <input type="text" placeholder="mm:ss" value={data[`${t}-time`]||''}
              onChange={e => handleEntryChange(`${t}-time`, e.target.value)}
              className="border p-1 rounded w-24 ml-2" />
          </div>
        );
      });
    }
    // Endurance Test
    if (day.enduranceTest) {
      day.enduranceTest.forEach((t, i) => {
        inputs.push(
          <div key={`et${i}`} className="mb-2">
            <span>{t}:</span>
            <input type="text" placeholder="Value" value={data[`${t}`]||''}
              onChange={e => handleEntryChange(`${t}`, e.target.value)}
              className="border p-1 rounded w-24 ml-2" />
          </div>
        );
      });
    }
    // AMRAP
    if (day.amrap) {
      day.amrap.forEach((ex, i) => {
        inputs.push(
          <div key={`am${i}`} className="mb-2">
            <span>{ex.label} {ex.weight?`@${ex.weight}kg`:''}:</span>
            <input type="text" placeholder="Weight/Damper" value={data[`${ex.label}`]||''}
              onChange={e => handleEntryChange(`${ex.label}`, e.target.value)}
              className="border p-1 rounded w-24 ml-2" />
          </div>
        );
      });
      inputs.push(
        <div key="amTotal" className="mb-2">
          <span>Total Rounds:</span>
          <input type="number" placeholder="Rounds" value={data['amrap-rounds']||''}
            onChange={e => handleEntryChange('amrap-rounds', e.target.value)}
            className="border p-1 rounded w-24 ml-2" />
        </div>
      );
    }
    // Interval
    if (day.interval) {
      day.interval.ex.forEach((ex, i) => {
        inputs.push(
          <div key={`ii${i}`} className="mb-2">
            <span>{ex.label} {ex.weight?`@${ex.weight}kg`:''}:</span>
            <input type="text" placeholder="Weight/Damper" value={data[`int-${ex.label}`]||''}
              onChange={e => handleEntryChange(`int-${ex.label}`, e.target.value)}
              className="border p-1 rounded w-24 ml-2" />
          </div>
        );
      });
      Array.from({ length: day.interval.rounds }).forEach((_, ri) => {
        inputs.push(
          <div key={`it${ri}`} className="mb-2">
            <span>Round {ri+1} Time:</span>
            <input type="text" placeholder="mm:ss" value={data[`it-time${ri}`]||''}
              onChange={e => handleEntryChange(`it-time${ri}`, e.target.value)}
              className="border p-1 rounded w-24 ml-2" />
          </div>
        );
      });
    }
    // Endurance Run
    if (day.enduranceRun) {
      inputs.push(
        <div key="er" className="mb-2">
          <span>{day.enduranceRun} Time:</span>
          <input type="text" placeholder="HH:MM" value={data['end-time']||''}
            onChange={e => handleEntryChange('end-time', e.target.value)}
            className="border p-1 rounded w-24 ml-2" />
        </div>
      );
    }
    return inputs;
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hyrox Training Tracker</h1>
      <div className="flex gap-4 mb-6">
        <div>
          <label className="font-medium mr-2">Week:</label>
          <select value={weekId} onChange={e => { setWeekId(+e.target.value); setDayIdx(0); }}
            className="border p-2 rounded">
            {weeksData.map(w => <option key={w.id} value={w.id}>{w.title}</option>)}
          </select>
        </div>
        <div>
          <label className="font-medium mr-2">Day:</label>
          <select value={dayIdx} onChange={e => setDayIdx(+e.target.value)}
            className="border p-2 rounded">
            {week.days.map((d, i) => <option key={i} value={i}>{d.title}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-4 italic">{week.explanation}</div>
      <div className="mb-4">
        <Section title="Warm-Up" items={day.warmup} />
        {day.strengthTest && <Section title="Strength Test" items={day.strengthTest} />}
      </div>
      <div className="mb-4">{renderInputs()}</div>
      <div className="mt-6">
        <button onClick={() => console.log(entries)} className="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <ul className="list-disc ml-6">
        {items.map((itm, i) => <li key={i}>{itm}</li>)}
      </ul>
    </div>
  );
}

export default HyroxTrainingTracker;
