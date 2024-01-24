import styled from "@emotion/styled";

export const ProfileNavIndicator = styled.nav`
    text-decoration: ${({ active }) => 
        active ? 'underline' : 'none'
    };
    border-left: ${({ active }) =>
        active ? '2px solid #ff8906' : 'none'    
    };
    height: 50px;
    width: 140px;
    margin-top: 10px;
`