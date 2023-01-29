import React from "react";
import CardBody from "./card/CardBody.js";
import CardContacts from "./card/CardContacts";
import CardInfo from "./card/CardInfo.js";

export default function DigitalCard(): JSX.Element {
  return (
    <>
      <CardInfo></CardInfo>
      <CardBody></CardBody>
      <CardContacts></CardContacts>
    </>
  );
}
