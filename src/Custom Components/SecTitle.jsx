import { Typography } from "@mui/material";
import React from "react";

function SecTitle({title}) {
  return (
    <>
      <Typography variant="secTitleVariant">{title}</Typography>
      <Typography variant="underlineVariant" />
    </>
  );
}

export default SecTitle;
