import styled from "styled-components";
import { Button, TexInput } from "../../theme";
import {useForm} from "react-hook-form";
import Alert from "../Alert";
import { useContext } from "react";
import { LoginContext } from "../../App";

const Login = () => {
  const {register, handleSubmit} = useForm();
  const { setEstaLogado, alert, setAlert } = useContext(LoginContext)

  const usuario = {
    email: "joaovictorresende59@gmail.com",
    senha: '123456'
  }

  const logar = (dados) => {
    console.log(dados);
    if(dados.email !== usuario.email || dados.senha !== usuario.senha){
        setAlert({titulo: 'Alerta', mensagem: 'Usuário não cadastrado', active:true})
        return;
    }
    setEstaLogado(true)
    sessionStorage.setItem('estaLogado', 'true' )
  }


  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(logar)}>
        <h1>Login</h1>
        <Label>Email</Label>
        <TexInput style={{marginBottom: '16px', width:'100%'}} type="email" required placeholder="email@gmail.com"{...register('email')}></TexInput>
        <Label>Senha</Label>
        <TexInput style={{marginBottom: '16px', width:'100%'}} type="password" placeholder="******" required {...register('senha')}></TexInput>
        <Button style={{width:'100%', fontSize:'14px'}}>Entrar</Button>
        </form>
        <Alert 
      titulo={alert.titulo} 
      mensagem={alert.mensagem} 
      active={alert.active}/>
      </Container>
    </>
  );
};

const Container = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  & form{
    width: 100%;
  }
  & h1{
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 26px;
  }
`;

const Label = styled.label`
width: 100%;
display: block;
margin-bottom: 6px;
font-size: 12px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
text-transform: uppercase;
letter-spacing: 1px;
`;

export default Login;
