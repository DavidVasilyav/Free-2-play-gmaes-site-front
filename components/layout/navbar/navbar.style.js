import styled from "@emotion/styled";
import ChangeDarkLightColors from "utils/ChangeDarkLightColors";
export const NavBarIndcitor = styled.nav`
    border-radius: 6px;
    text-decoration: ${({ active }) => 
        active ? 'underline' : 'none'
        
    };
    background-color: ${({ active, dark }) => {
            active ? '#eff0f3' : 'none'
    }


    };
    border-left: ${({ active }) => 
    active ? '3px solid #ff8e3c' : 'none' 

    };

 background-color: ${({active ,  dark }) => 
   active && dark ? 'black' : 'none'


    };
   
`;

export const NavBarMenuIconIndictor = styled.nav`
    border-radius: 30px;
    height: 40px;
    transition: 0.5s;
    text-decoration: ${({ active }) => 
        active ? `underline ${ChangeDarkLightColors('#FF8906')} 2px` : 'none'
        
    };
    background-color: ${({ active }) => 
    active ? ChangeDarkLightColors('#000','#FF8906') : 'none' 

    };

&:hover {
        background-color: ${(() => ChangeDarkLightColors('#000','#232323'))};
    }


`

export const ChangeIconColor = styled.nav`
    color: ${({ active }) => 
    active ? ChangeDarkLightColors('#232323', '#EFF0F3') : '#FF8906'

    };
   
`