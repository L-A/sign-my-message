import Head from "next/head";
import { useState } from "react";
import Form from "../components/form";
import { SignMessage } from "../helpers/tz";
import Result from "../components/result";

import { theme } from "../theme";
import Arrow from "../components/arrow";

export type ResultType = {
  signedMessage: string;
  sourceMessage: string;
};

export default function Home() {
  const [results, setResults] = useState<ResultType[]>([]);
  const [currentSource, setCurrentSource] = useState("");

  const addResult = (r: ResultType) => {
    setResults(results.concat([r]));
  };

  const getSignedMessage = async (message: string) => {
    if (message === "") return;
    const result = await SignMessage(message);
    setCurrentSource(message);
    addResult({ sourceMessage: message, signedMessage: result });
  };

  console.log(results);

  return (
    <>
      <Head>
        <title>Sign my message</title>
        <meta
          name="description"
          content="Sign arbitrary messages with your web3 wallets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="root">
        <main>
          <h1>Tezos (XTZ) - Message sign tool</h1>
          <div className="form">
            <Form requestSign={getSignedMessage} />
          </div>
          <Arrow />
          <div className="results">
            {results.map((result) => (
              <Result key={result.sourceMessage} {...result} />
            ))}
          </div>
        </main>

        <footer>
          A tiny public service by{" "}
          <a href="https://tinyrevolt.com/en">Tiny Revolt</a>
        </footer>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          html {
            font-family: system, helvetica, sans-serif;
            background-image: ${theme.backgroundGradient};
            background-attachment: fixed;
          }

          body {
            color: ${theme.dark};
            margin: 0;
          }
        `}</style>
        <style jsx>{`
          .root {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
          }

          .form {
            padding: 1rem 1rem;

            background: ${theme.light};
            border: solid 1px #eee;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          main,
          footer {
            width: 26rem;
            margin: 0 0;
            max-width: 100%;
            margin-top: auto;
          }

          h1 {
            color: ${theme.mid};
            font-size: 16px;
            font-weight: normal;
            text-align: center;
            margin-bottom: 1rem;
          }

          footer {
            color: ${theme.mid};
            text-align: center;
            padding: 1rem;
          }

          a {
            color: inherit;
          }
        `}</style>
      </div>
    </>
  );
}
