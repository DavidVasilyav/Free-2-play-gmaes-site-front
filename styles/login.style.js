import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    height: 400px;
    transition: 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 5px;
    border: ${({ active }) => 
    active ? '2px solid red': '2px solid #ff8906'
};
`