import React from "react";
import { StyledPartyHeader } from "./Styles/PartyHeader.styles";
import { Link } from "react-router-dom";

export const PartyHeader = () => {
  return (
    <StyledPartyHeader id="partyHeader">
      <Link to="/">Wataha</Link>
    </StyledPartyHeader>
  );
};
