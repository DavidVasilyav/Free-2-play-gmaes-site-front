import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const GlobalButtonStyle = styled(Button)({
      // backgroundColor: '',
      border: '2px solid #2cb67d',
      color: '#fffffe',
      fontSize: '10px',
      padding: 1,
      backgroundColor: '#010101',
      transition: '0.5s',
      '&:hover': {
            color: '#010101',
            backgroundColor: '#2cb67d',
            fontSize: '9px',

      }
 });
 
 