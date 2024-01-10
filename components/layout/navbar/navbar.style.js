import styled from "@emotion/styled";

export const NavBarIndcitor = styled.nav`
    border-radius: 6px;
    text-decoration: ${({ active }) => 
        active ? 'underline' : 'none'
        
    };
    background-color: ${({ active }) => 
    active ? '#16161a' : 'none' 

    };
    border-left: ${({ active }) => 
    active ? '3px solid #2cb67d' : 'none' 

    };

`;

export const NavBarMenuIconIndictor = styled.nav`
    border-radius: 2px;
    text-decoration-color: black;
    text-decoration: ${({ active }) => 
        active ? 'underline #fefefe 2px' : 'none'
        
    };
    background-color: ${({ active }) => 
    active ? '#2cb67d' : 'none' 

    };

`

export const ChangeIconColor = styled.nav`
    color: ${({ active }) => 
    active ? 'black' : '#fefefe' 

    };
   
`