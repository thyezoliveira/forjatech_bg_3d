import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: black;
    border-bottom: dashed 2px #FF0;
    display: flex;
`;

export default function Header({setEstado, estado}){


    return (
        <HeaderStyled>
            <h2 style={{
                color: "#ff0",
                width: "100%",
                textAlign: "center",
                fontWeight: "100",
                margin:0
                }}>
                forjatech
            </h2>
            <button onClick={() => setEstado((estado < 5) ? estado + 1 : 1)}>...</button>
        </HeaderStyled>
    )
}