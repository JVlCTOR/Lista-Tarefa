import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { LoginContext } from '../../App'

const Alert = ({titulo = 'Titulo do alerta', mensagem = 'Mensagem', active}) => {

    const {alert, setAlert} = useContext(LoginContext)

    useEffect(() => {
        if(alert.active){
            setTimeout(() => {
                setAlert({...alert, active:false})
            },3000)
        }
    },[alert])

    return(
        <>
            <Container className={active ? "active" : ""}>
                <Tittle>{titulo}</Tittle>
                <Mensagem>{mensagem}</Mensagem>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: calc(100% - 32px);
    background-color: white;
    padding: 15px;
    position: absolute;
    bottom: 16px;
    left: 16px;
    border-radius: 5px;
    box-shadow: 0 5px 15px #00000015;
    opacity: 0;
    visibility: hidden;
    &.active{
        opacity: 1;
        visibility: visible;
    }
`;


const Tittle = styled.h5`
    font-size: 16px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;
const Mensagem = styled.p`
    font-size: 14px;
    color: #999999;
    font-family: Arial, Helvetica, sans-serif;
    
`;
export default Alert