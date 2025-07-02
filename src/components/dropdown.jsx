import React, { useRef, useState, useEffect } from 'react';

export default function Dropdown({ label, options }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-1 transition-colors duration-200 text-white hover:text-[#A3A1C5] focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <ul
        className={`absolute left-0 mt-2 min-w-[160px] bg-background border border-white/10 rounded-md shadow-lg z-50 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="menu"
        aria-label={label}
      >
        {options.map((opt, idx) => (
          <li key={opt.label}>
            <a
              href={opt.href}
              className={`block px-4 py-2 text-white hover:bg-primary hover:text-accent transition-colors ${idx === 0 ? 'rounded-t-md' : ''} ${idx === options.length - 1 ? 'rounded-b-md' : ''}`}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={opt.onClick}
            >
              {opt.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
