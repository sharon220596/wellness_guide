import React, { useState } from "react";

function GoalInput({ onRecommendations }) {
  // ✅ Step 1 & 2: State variables
  const [goalText, setGoalText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="goal-input">
      <p className="disclaimer">
        This app provides wellness guidance, not medical advice.
        Consult a healthcare professional for medical concerns.
      </p>

      {/* ✅ Step 3 & 4: Controlled textarea */}
      <textarea
        placeholder="Describe your wellness goal..."
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
      />

      {/* ✅ Step 5 & 6: Loading text + disabled */}
      <button disabled={isLoading}>
        {isLoading ? "Loading..." : "Get Recommendations"}
      </button>
    </div>
  );
}

export default GoalInput;