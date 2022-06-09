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
          border: solid 1px ${theme.dark};
          color: ${theme.dark};
          border-radius: 4px;
          width: 100%;
          padding: 0.75rem;
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
