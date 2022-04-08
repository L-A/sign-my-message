import { useState } from "react";

import { char2Bytes } from '@taquito/utils';

const Form = ({ requestSign }) => {
  const [message, setMessage] = useState("");

  const onFieldChange = (e) => {
    console.log(char2Bytes(e.target.value))
    setMessage(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    requestSign(message)
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={onFieldChange}
        placeholder={"I want to sign this message"}
      />
      <button type="submit">Sign it, please!</button>

      <style jsx>{`
        form {
          display: block;
          flex-direction: column;
        }
        input {
          border: solid 1px #ccc;
          border-radius: 4px;
          padding: 0.25rem;
          display: block;
          margin: 0.5rem 0;
          width: 100%;
         }
      `}</style>
    </form>
  );
};

export default Form;
