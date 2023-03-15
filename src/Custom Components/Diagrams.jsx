import { Box } from "@mui/system";
import React from "react";
import CustomColumn from "./CustomColumn";

function Diagrams() {
  const monthsAndHeights = [
    { month: "Jan", height: 50 },
    { month: "Feb", height: 20 },
    { month: "Mar", height: 20 },
    { month: "Apr", height: 20 },
    { month: "May", height: 20 },
    { month: "Jun", height: 20 },
    { month: "Jul", height: 20 },
    { month: "Aug", height: 20 },
    { month: "Sep", height: 20 },
    { month: "Oct", height: 20 },
    { month: "Nov", height: 20 },
    { month: "Dec", height: 20 },
  ];
  return (
    <Box sx={{display:"flex", justifyContent:"space-around"}}>
      {monthsAndHeights.map((item, i) => {
        return <CustomColumn height={item.height} month={item.month}/>;
      })}
    </Box>
  );
}

export default Diagrams;
