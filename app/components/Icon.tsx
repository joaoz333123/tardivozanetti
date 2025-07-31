import React from 'react';

type IconProps = {
  name: 'brain' | 'tools' | 'chart';
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className = 'w-12 h-12 text-blue-600' }) => {
  const icons = {
    brain: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h-3A2.5 2.5 0 0 1 4 4.5v0A2.5 2.5 0 0 1 6.5 2h3Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v0A2.5 2.5 0 0 0 14.5 7h3A2.5 2.5 0 0 0 20 4.5v0A2.5 2.5 0 0 0 17.5 2h-3Z" />
        <path d="M4.2 7.5A2.5 2.5 0 0 0 2 10v0a2.5 2.5 0 0 0 2.5 2.5h2A2.5 2.5 0 0 0 9 10v0a2.5 2.5 0 0 0-2.5-2.5h-2Z" />
        <path d="M19.8 7.5A2.5 2.5 0 0 1 22 10v0a2.5 2.5 0 0 1-2.5 2.5h-2a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5h2Z" />
        <path d="M6.5 12.5A2.5 2.5 0 0 0 4 15v0a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 12 15v0a2.5 2.5 0 0 0-2.5-2.5h-3Z" />
        <path d="M17.5 12.5A2.5 2.5 0 0 1 20 15v0a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 12 15v0a2.5 2.5 0 0 1 2.5-2.5h3Z" />
        <path d="M9.5 17.5A2.5 2.5 0 0 0 7 20v0a2.5 2.5 0 0 0 2.5 2.5h3A2.5 2.5 0 0 0 15 20v0a2.5 2.5 0 0 0-2.5-2.5h-3Z" />
      </svg>
    ),
    tools: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l-8.5 8.5a5 5 0 0 0 0 7l7 7a5 5 0 0 0 7 0l7-7a5 5 0 0 0 0-7L12 2z" />
        <path d="M7 17l10-10" />
        <path d="M12 22V12" />
        <path d="M22 12H12" />
        <path d="M17 7L7 17" />
      </svg>
    ),
    chart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
