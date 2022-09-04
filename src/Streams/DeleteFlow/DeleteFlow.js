import React, { useState } from "react";
import { customHttpProvider } from "../../config";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import "./deleteFlow.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import GetProvider from "../../hooks/GetProvider";

export const DeleteFlow = () => {
  const provider = GetProvider();
  const [recipient, setRecipient] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  async function deleteFlow(recipient) {
    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    const signer = sf.createSigner({
      privateKey:
        "5af8a48af03c4fb6cf68e38e17e534611b8157ea6713c6246c32666260d75a1b",
      provider: provider,
    });

    const DAIxContract = await sf.loadSuperToken("fDAIx");
    const DAIx = DAIxContract.address;

    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: "0x0fdcF87dBEE21d938944aFC3aD0cbCc271E8a5b4",
        receiver: recipient,
        superToken: DAIx,
        // userData?: string
      });

      console.log("Deleting your stream...");

      await deleteFlowOperation.exec(signer);

      console.log(
        `Congrats - you've just deleted your money stream!
         Network: Polygon Mumbai
         Super Token: DAIx
         Sender: 0x0fdcF87dBEE21d938944aFC3aD0cbCc271E8a5b4
         Receiver: ${recipient}
      `
      );
    } catch (error) {
      console.error(error);
    }
  }

  function DeleteButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <ConnectButton />
      <h2>Delete a Flow</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Enter your Ethereum address"
          ></FormControl>
        </FormGroup>
        {/* <Button onClick={() => deleteFlow(recipient)}> */}
        <DeleteButton
          onClick={() => {
            setIsButtonLoading(true);
            deleteFlow(recipient);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          Click to Delete Your Stream
        </DeleteButton>
      </Form>
    </div>
  );
};
