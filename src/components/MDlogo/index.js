import React from "react";
import Box from "@mui/material/Box";

export default function MDLogo() {
  return (
    <Box
      component="img"
      sx={{
        height: 120,
        width: 80,
        marginBottom: 2,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 350, md: 250 },
      }}
      alt="The house from the offer."
      src="https://www.freelogovectors.net/wp-content/uploads/2022/03/knust_logo_freelogovectors.net_.png"
    />
  );
}
