import React, { useState } from 'react';

const EqualDaysCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState('');

  const calculateEqualDays = () => {
    const birth = new Date(birthDate);
    const centuryStart = new Date(
      Math.floor(birth.getFullYear() / 100) * 100,
      0,
      1
    );
    const nextCenturyStart = new Date(
      (Math.floor(birth.getFullYear() / 100) + 1) * 100,
      0,
      1
    );
    const currentCentury = new Date(
      Math.floor(new Date().getFullYear() / 100) * 100,
      0,
      1
    );

    const daysInPreviousCentury = Math.floor(
      (nextCenturyStart - birth) / (1000 * 60 * 60 * 24)
    );
    const targetDate = new Date(
      currentCentury.getTime() + daysInPreviousCentury * 1000 * 60 * 60 * 24
    );

    setResult(
      targetDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    );
  };

  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Equal Days in Centuries Calculator
      </h2>
      <div style={{ marginBottom: '1rem' }}>
        <label
          htmlFor="birthdate"
          style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '0.25rem',
          }}
        >
          Enter your birth date:
        </label>
        <input
          type="date"
          id="birthdate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '0.375rem',
            border: '1px solid #D1D5DB',
          }}
        />
      </div>
      <button
        onClick={calculateEqualDays}
        style={{
          width: '100%',
          backgroundColor: '#3B82F6',
          color: 'white',
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Calculate
      </button>
      {result && (
        <div
          style={{
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#D1FAE5',
            borderRadius: '0.375rem',
          }}
        >
          <p style={{ color: '#065F46' }}>
            You need to live until <strong>{result}</strong> to have lived an
            equal number of days in both centuries.
          </p>
        </div>
      )}
    </div>
  );
};

export default EqualDaysCalculator;
