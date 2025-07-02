import React, { useState } from 'react';

const ToggleReact = ({ options = ["Estudiante", "Empresa"], onChange }) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (idx) => {
    setSelected(idx);
    if (onChange) onChange(options[idx]);
  };

  return (
    <div className="flex items-center justify-center w-fit mx-auto my-4">
      <div className="relative flex rounded-full bg-background shadow-2xl shadow-indigo-500/50 overflow-hidden">
        {options.map((option, idx) => (
          <button
            key={option}
            type="button"
            className={`px-8 py-2 text-lg font-medium focus:outline-none transition-all  duration-200 z-10
              ${selected === idx
                ? 'bg-transparentToggle text-white text-sm shadow-lg'
                : 'bg-background text-white text-sm hover:bg-[#5228d9]'}
              ${idx === 0 ? 'rounded-l-full' : 'rounded-r-full'}`}
            style={{ minWidth: 120 }}
            aria-pressed={selected === idx}
            tabIndex={0}
            onClick={() => handleSelect(idx)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') handleSelect(idx);
            }}
          >
            {option}
          </button>
        ))}
        {/* Animated indicator */}
        <span
          className="absolute top-0 left-0 h-full w-1/2 transition-transform duration-300 pointer-events-none"
          style={{
            transform: `translateX(${selected * 100}%)`,
            background: 'rgba(82, 40, 217, 0.15)',
            borderRadius: '9999px',
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default ToggleReact;
