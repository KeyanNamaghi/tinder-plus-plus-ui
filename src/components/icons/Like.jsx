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
        <stop stop-color="#02e08a" />
        <stop stop-color="#02e08a" />
        <stop offset="1" stop-color="#69efdc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#like-gradient)"
      d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"
    ></path>
  </svg>
)
