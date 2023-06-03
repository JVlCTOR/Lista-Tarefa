import React from 'react'
import styled from 'styled-components'

const Tittle = (props) => {
    return(
        <>
            <TitleH1>
                {props.titulo}
            </TitleH1>
        </>
    )
}

const TitleH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-bottom: 6px;
    font-size: 24px;
    
`;

export default Tittle