import { useState } from "react";
import { ResultType } from "../pages";

import { theme } from "../theme";

const Result = ({ signedMessage, sourceMessage }: ResultType) => {
  const [copyActive, setCopyActive] = useState<boolean>(false);

  const copyMessage = () => {
    navigator.clipboard.writeText(signedMessage);
    setCopyActive(true);
    setTimeout(() => {
      setCopyActive(false);
    }, 6000);
  };

  return (
    <div className="result-root">
      <h2>{sourceMessage}</h2>
      <div className="result-box">
        <p className="result-paragraph">{signedMessage}</p>
        <button
          className={copyActive ? "copy active" : "copy"}
          onClick={copyMessage}
        >
          <svg
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill={copyActive ? theme.green : theme.dark}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 21C3.34315 21 2 19.6569 2 18V7C2 5.34315 3.34315 4 5 4V2C2.23858 2 0 4.23858 0 7V18C0 20.7614 2.23858 23 5 23H9V21H5ZM20 7V10.5H22V7C22 4.23858 19.7614 2 17 2V4C18.6569 4 20 5.34315 20 7Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 25H12C10.8954 25 10 24.1046 10 23V13C10 11.8954 10.8954 11 12 11H20C21.1046 11 22 11.8954 22 13V23C22 24.1046 21.1046 25 20 25ZM12 27C9.79086 27 8 25.2091 8 23V13C8 10.7909 9.79086 9 12 9H20C22.2091 9 24 10.7909 24 13V23C24 25.2091 22.2091 27 20 27H12Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 4H7C6.44772 4 6 3.55228 6 3C6 2.44772 6.44772 2 7 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4ZM7 6C5.34315 6 4 4.65685 4 3C4 1.34315 5.34315 0 7 0H15C16.6569 0 18 1.34315 18 3C18 4.65685 16.6569 6 15 6H7Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 14C12 13.4477 12.4477 13 13 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H13C12.4477 15 12 14.5523 12 14Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 18C12 17.4477 12.4477 17 13 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H13C12.4477 19 12 18.5523 12 18Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22C12 21.4477 12.4477 21 13 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H13C12.4477 23 12 22.5523 12 22Z"
            />
          </svg>

          {copyActive ? "Copied!" : "Copy to clipboard"}
        </button>
      </div>
      <style jsx>{`
        .result-root {
          margin-top: 1rem;
        }

        h2 {
          color: ${theme.mid};
          font-size: 14px;
          font-style: italic;
          font-weight: normal;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-bottom: 0;
        }

        .result-box {
          background-color: ${theme.light};
          border-radius: 8px;
          padding: 1rem;
          margin-top: 0.25rem;
        }

        .result-paragraph {
          background-color: ${theme.white};
          border: solid 1px ${theme.mid};
          border-radius: 4px;
          padding: 8px;
          font-family: monospace;
          word-wrap: break-word;
          margin: 0 0 0.5rem;
        }

        .copy {
          display: block;
          appearance: none;
          background: none;
          border: solid 1px ${theme.mid};
          color: ${theme.dark};
          border-radius: 4px;
          position: relative;
          width: 100%;
          padding: 0.75rem;
        }

        .copy svg {
          position: absolute;
          left: 16px;
          height: 27px;
          top: 50%;
          margin-top: -13.5px;
        }

        .copy:hover {
          border-color: ${theme.dark};
        }

        .copy.active {
          background: ${theme.lightGreen};
          color: ${theme.green};
          border-color: ${theme.green};
        }

        .copy:focus {
          outline: solid ${theme.mid};
        }
      `}</style>
    </div>
  );
};

export default Result;
