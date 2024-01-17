import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
console.log(ChangeDarkLightColors);

export const GlobalButtonStyle = styled(Button)({
      border: '2px solid #ff8906',
      color: (() => ChangeDarkLightColors('#010101', '')),
      fontSize: '12px',
      padding: 1,
      transition: '0.5s',
      '&:hover': {
            color: '#010101',
            backgroundColor: '#ff8906',
            fontSize: '9px',

      }
 });
 
 