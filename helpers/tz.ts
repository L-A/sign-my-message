import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { SigningType } from "@airgap/beacon-sdk";
import { char2Bytes } from '@taquito/utils';

import Config from "../config.json";

const SignMessage = async (message: string) => {
  const Tezos = new TezosToolkit(Config.RpcNode);
  const wallet = new BeaconWallet({ name: Config.appName });
  
  Tezos.setWalletProvider(wallet);

  // Check for permissions
  const activeAccount = await wallet.client.getActiveAccount();

  if (!activeAccount) {
    await wallet.client.requestPermissions();
  }

  // Build the message as a byte string
  const prefixedPayload = `Tezos Signed Message: ${message}`;

  // Build the formatted request
  const messageInBytes = char2Bytes(prefixedPayload);
  const messageLength = (messageInBytes.length / 2).toString(16).padStart(8, '0');
  const payloadBytes = `0501${messageLength}${messageInBytes}`;

  // Get the signed message
  const response = await wallet.client.requestSignPayload({
    signingType: SigningType.MICHELINE,
    payload: payloadBytes
  })

  console.log(response);

  return response.signature;
};

export { SignMessage };
