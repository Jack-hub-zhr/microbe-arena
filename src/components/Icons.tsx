/** 统一的线性图标集（stroke 风格，24 网格） */
import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const IconEye = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const IconFeed = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v7" />
    <path d="M8.5 7.5 12 11l3.5-3.5" />
    <circle cx="6" cy="16" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <circle cx="18" cy="16" r="2.4" />
  </svg>
);

export const IconSmite = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />
  </svg>
);

export const IconMutate = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    <circle cx="12" cy="12" r="3.1" />
  </svg>
);

export const IconAlien = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3c5 0 8 4 8 9s-3.5 8-8 8-8-3-8-8 3-9 8-9Z" />
    <ellipse cx="8.8" cy="10" rx="2.1" ry="2.6" />
    <ellipse cx="15.2" cy="10" rx="2.1" ry="2.6" />
    <path d="M9.5 17c1.6 1 3.4 1 5 0" />
  </svg>
);

export const IconPlague = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="5.2" />
    <path d="M12 2.5v3.2M12 18.3v3.2M2.5 12h3.2M18.3 12h3.2M5.3 5.3l2.3 2.3M16.4 16.4l2.3 2.3M18.7 5.3l-2.3 2.3M7.6 16.4l-2.3 2.3" />
  </svg>
);

export const IconChart = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M3.5 3.5v17h17" />
    <path d="M8 16V11M12 16V6M16 16v-3.5" />
  </svg>
);

export const IconClose = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconGlobe = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M3.4 12h17.2M12 3.4c2.3 2.4 3.5 5.4 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.4-3.5-8.6S9.7 5.8 12 3.4Z" />
  </svg>
);

export const IconPause = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="7" y="5.5" width="3.4" height="13" rx="1.5" />
    <rect x="13.6" y="5.5" width="3.4" height="13" rx="1.5" />
  </svg>
);

export const IconPlay = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M8 5.6 18.5 12 8 18.4V5.6Z" />
  </svg>
);

export const IconReset = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 3.5V8h-4.5" />
  </svg>
);

export const IconSkip = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 6.2 13 12l-8 5.8V6.2Z" />
    <path d="M16.5 5.5v13" />
  </svg>
);

export const IconForward = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 6.2 12 12l-8 5.8V6.2Z" />
    <path d="M13 6.2 21 12l-8 5.8V6.2Z" />
  </svg>
);

export const IconSun = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6" />
  </svg>
);

export const IconThermometer = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M14 14.8V5.2a2.2 2.2 0 1 0-4.4 0v9.6a4 4 0 1 0 4.4 0Z" />
    <circle cx="11.8" cy="17.4" r="1.7" />
  </svg>
);

export const IconDroplet = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3.2s6 6.1 6 10a6 6 0 0 1-12 0c0-3.9 6-10 6-10Z" />
  </svg>
);

export const IconBook = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 5.2A2.2 2.2 0 0 1 6.2 3H19v14.5H6.2A2.2 2.2 0 0 0 4 19.7V5.2Z" />
    <path d="M4 19.7A2.2 2.2 0 0 1 6.2 17.5H19V21H6.2A2.2 2.2 0 0 1 4 18.8v.9Z" />
  </svg>
);

export const IconTrophy = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 5.5H4.6v1.2A3.4 3.4 0 0 0 7.6 10M17 5.5h2.4v1.2a3.4 3.4 0 0 1-3 3.3" />
    <path d="M12 14v3.5M8.5 20.5h7" />
  </svg>
);

export const IconScroll = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 3.5h11a2 2 0 0 1 2 2v11.8a3.2 3.2 0 0 1-3.2 3.2H8.2A3.2 3.2 0 0 1 5 17.3V5.5a2 2 0 0 1 1-2Z" />
    <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" />
  </svg>
);

export const IconCells = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="8" cy="8.5" r="4" />
    <circle cx="16" cy="15" r="4.6" />
    <path d="M8 12.5v3.2M8 15.7h3.4" />
  </svg>
);

export const IconInfo = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 10.8v5.4M12 7.9v.1" />
  </svg>
);

export const IconChevron = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M9 5.5 15.5 12 9 18.5" />
  </svg>
);

export const IconSpark = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 10.9 10.1 9 12 3.2Z" />
  </svg>
);

export const IconAgent = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="3.1" />
    <circle cx="4.6" cy="5.4" r="1.7" />
    <circle cx="19.4" cy="6.6" r="1.7" />
    <circle cx="5" cy="19" r="1.7" />
    <circle cx="19" cy="18.4" r="1.7" />
    <path d="M6.1 6.7 9.7 10.3M17.9 7.9 14.5 10.6M6.2 17.7 9.6 14M17.8 17.2 14.5 14" />
  </svg>
);

export const IconCheck = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
  </svg>
);

export const IconRefresh = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20.2 3.8v4.6h-4.6" />
  </svg>
);

export const IconSearch = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="10.8" cy="10.8" r="6.3" />
    <path d="M15.4 15.4 20.5 20.5" />
  </svg>
);
