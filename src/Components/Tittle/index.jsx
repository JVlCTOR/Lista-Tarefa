import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { LoginContext } from '../../App'

const Tittle = (props) => {

     const { setEstaLogado} = useContext(LoginContext)

    const deslogador = () => {
        setEstaLogado(false)
        sessionStorage.removeItem('estaLogado')
    }
    return(
        <>
            <TitleH1>
                {props.titulo}
                <div onClick={deslogador}> <box-icon name="exit" color="white"></box-icon></div>
            </TitleH1>
        </>
    )
}

const TitleH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-bottom: 6px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & {font-size: 14px;
    cursor: pointer;}
`;

export default Tittle