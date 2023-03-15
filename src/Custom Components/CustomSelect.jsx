import styled from "@emotion/styled";
import { FormControl, InputLabel, OutlinedInput, Select } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CustomSelect({ title }) {

  const StyledSelect = styled(Select)({
    "& .MuiSelect-icon": {
      color: "#1976d2",
    },
  });

  return (
    <FormControl
      sx={{
        width: "20%",
      }}
    >
      <InputLabel
        sx={{ color: "primary.header", fontWeight: 700, letterSpacing: -0.5 }}
      >
        {title}
      </InputLabel>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        sx={{ borderRadius: 3, color: "primary.main"}}
        multiple
        input={<OutlinedInput label={title} />}
      ></StyledSelect>
    </FormControl>
  );
}

export default CustomSelect;
