import { Box } from "@mui/material";
// import React from "react";
import { fontFamily } from "../constants/fontFamily";

const CustomChip = ({ px, py, title, bgColor }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: "10px",
        py: "5px",
        bgcolor: bgColor,
        fontSize: "13px",
        fontFamily: fontFamily.msr,
        fontWeight: 500,
        color: "white",
        borderRadius: "15px",
      }}
    >
      {title}
    </Box>
  );
};

export default CustomChip;
