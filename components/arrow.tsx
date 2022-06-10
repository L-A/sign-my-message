import { theme } from "../theme";

const Arrow = ({ dimmed = false }) => {
  return (
    <div>
      <svg
        width="16"
        height="48"
        viewBox="0 0 16 48"
        fill={dimmed ? theme.mid : "#94E5C8"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 1C9 0.447715 8.55228 2.41411e-08 8 0C7.44772 -2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 47.7071C7.68342 48.0976 8.31658 48.0976 8.7071 47.7071L15.0711 41.3431C15.4616 40.9526 15.4616 40.3195 15.0711 39.9289C14.6805 39.5384 14.0474 39.5384 13.6569 39.9289L8 45.5858L2.34314 39.9289C1.95262 39.5384 1.31945 39.5384 0.92893 39.9289C0.538406 40.3195 0.538406 40.9526 0.92893 41.3431L7.29289 47.7071ZM7 1L7 47L9 47L9 1L7 1Z" />
      </svg>
      <style jsx>{`
        div {
          opacity: ${dimmed ? 0.5 : 1};
          margin-top: 1rem;
          text-align: center;
          transition: opacity 1s ease-out, fill 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Arrow;
