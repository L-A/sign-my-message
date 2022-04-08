import Head from "next/head";
import { useState } from "react";
import Form from "../components/form";
import { SignMessage } from "../helpers/tz";

export default function Home() {
  const [result, setResult] = useState("");

  const getSignedMessage = async (message: string) => {
    if (message === "") return;
    const result = await SignMessage(message);
    setResult(result);
  }

  const displayedResult = result === "" ? "Your signed message will appear here" : result;

  return (
    <div className="root">
      <Head>
        <title>Sign my message</title>
        <meta name="description" content="Sign arbitrary messages with your web3 wallets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Sign my message</h1>
        <Form requestSign={getSignedMessage} />
        <p className="result">{displayedResult}</p>
      </main>
      <footer>Foo</footer>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          font-family: system, helvetica, sans-serif;
        }

        body {
          margin: 0;
        }
      `}</style>
      <style jsx>{`
        .result {
          border: solid 1px #DDD;
          background-color: #EEE;
          border-radius: 8px;
          padding: 8px;
          font-family: monospace;
          word-wrap: break-word;
        }

        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }

        main,
        footer {
          padding: 1rem;
          width: 26rem;
          margin: 0 auto;
          max-width: 100%;
        }

        footer {
          text-align: center;
          padding: 1rem;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}
