import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { theme } from "../theme";

interface formProps {
  requestSign: (string: string) => {};
  startingInput: string;
}

const Form = ({ requestSign, startingInput = "" }: formProps) => {
  const [message, setMessage] = useState(startingInput);
  useEffect(() => {
    setMessage(startingInput);
  }, [startingInput]);

  const onFieldChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    requestSign(message);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="message">Message to sign:</label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={onFieldChange}
        placeholder={"Enter the message you want to sign"}
      />
      <button type="submit">Sign with ...</button>

      <style jsx>{`
        form {
          display: block;
          flex-direction: column;
        }
        label {
          font-weight: bold;
        }
        textarea {
          border: solid 1px ${theme.mid};
          border-radius: 4px;
          padding: 0.25rem;
          display: block;
          margin: 1rem 0 0.5rem;
          min-height: 3rem;
          padding: 0.5rem;
          width: 100%;
          resize: vertical;
        }

        button {
          color: ${theme.light};
          display: block;
          appearance: none;
          border-radius: 4px;
          background-color: ${theme.accent};
          border: none;
          width: 100%;
          padding: 0.75rem;
        }

        button:hover {
          background-color: ${theme.dark};
        }

        button:focus {
          outline: solid ${theme.mid};
        }
      `}</style>
    </form>
  );
};

export default Form;
