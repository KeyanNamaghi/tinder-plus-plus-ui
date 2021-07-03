export const Like = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    focusable="false"
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="like-gradient" x1="1" x2="0" y2="1">
        <stop stopColor="#02e08a" />
        <stop offset="1" stopColor="#69efdc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#like-gradient)"
      d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"
    ></path>
  </svg>
)

export const Pass = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    focusable="false"
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="pass-gradient" x1="1" x2="0" y2="1">
        <stop stopColor="#fd267d" />
        <stop offset="1" stopColor="#ff7854" />
      </linearGradient>
    </defs>
    <path
      fill="url(#pass-gradient)"
      d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"
    ></path>
  </svg>
)

export const Super = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    focusable="false"
    aria-hidden="true"
    role="presentation"
  >
    <defs>
      <linearGradient id="super-gradient" x1="1" x2="0" y2="1">
        <stop stopColor="#46a9fe" />
        <stop offset="1" stopColor="#1fcdf9" />
      </linearGradient>
    </defs>
    <path
      fill="url(#super-gradient)"
      d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"
    ></path>
  </svg>
)
