import styled from "@emotion/styled";

export const ProfileNavIndicator = styled.nav`
    text-decoration: ${({ active }) => 
        active ? 'underline' : 'none'
    };
    border-left: ${({ active }) =>
        active ? '2px solid #2cb67d' : 'none'    
    };
    height: 50px;
    width: 140px;
    margin-top: 10px;
`