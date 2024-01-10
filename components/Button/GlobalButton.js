import { styled } from "@mui/system";
import { GlobalButtonStyle } from "./ButtonStyled";

import { Box } from "@mui/material";

export default function GlobalButton({ href, text, onClick, disabled, type, sx, value }) {
  return (
    <Box>
      <GlobalButtonStyle
        type={type}
        href={href}
        onClick={onClick}
        disabled={disabled}
        sx={sx}
        value={value}
      >
        {text}
      </GlobalButtonStyle>
    </Box>
  );
}
