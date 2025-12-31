import React from 'react';

function ModeSelector({ currentMode, onModeChange }) {
  return (
    <div className="mode-selector">
      <button
        className={currentMode === 'configure' ? 'active' : ''}
        onClick={() => onModeChange('configure')}
      >
        Configure
      </button>
      <button
        className={currentMode === 'practice' ? 'active' : ''}
        onClick={() => onModeChange('practice')}
      >
        Practice
      </button>
    </div>
  );
}

export default ModeSelector;
