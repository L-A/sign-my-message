import { NextApiRequest, NextApiResponse } from "next";
import { verifySignature } from "@taquito/utils";

import { BuildMessageBytes } from "../../helpers/tz";

const SignatureCheck = async (req: NextApiRequest, res: NextApiResponse) => {
  const { message, signature, address } = req.query;
  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Message argument is malformed or absent" });
    return;
  }
  if (!signature || typeof signature !== "string") {
    res
      .status(400)
      .json({ error: "Signature argument is malformed or absent" });
    return;
  }
  if (!address || typeof address !== "string") {
    res
      .status(400)
      .json({ error: "Signature argument is malformed or absent" });
    return;
  }

  if (message.includes("Tezos Signed Message: ")) {
    res.status(400).json({
      error:
        "You can remove the 'Tezos Signed Message: ' prefix, it's automatically added during validation",
    });
    return;
  }

  const accountFetch = await fetch(
    `https://api.tzstats.com/explorer/account/${address}`
  );
  const accountJSON = await accountFetch.json();
  const messageBytes = BuildMessageBytes(message);

  const validation = verifySignature(
    messageBytes,
    accountJSON.pubkey,
    signature
  );

  res.status(200).json({
    account: accountJSON.address,
    message,
    signature,
    validSignature: validation,
  });
};

export default SignatureCheck;
