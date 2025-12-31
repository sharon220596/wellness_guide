import React, { useState } from 'react';

function GoalInput({ onRecommendations }) {
  return (
    <div className="goal-input">
      <p className="disclaimer">
        This app provides wellness guidance, not medical advice. Consult a
        healthcare professional for medical concerns.
      </p>
      <textarea placeholder="Describe your wellness goal..." />
      <button>Get Recommendations</button>
    </div>
  );
}

export default GoalInput;
