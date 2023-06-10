import { Container } from "./theme";
import Lista from "./Components/Lista";
import { useState } from "react";
import Login from "./Components/Login";
import { createContext } from "react";
import { useEffect } from "react";

export const LoginContext = createContext(null);

function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [alert, setAlert] = useState({});


  const checkLogin = () => {
    setEstaLogado(JSON.parse(sessionStorage.getItem('estaLogado')) || false)
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <LoginContext.Provider value={{estaLogado, setEstaLogado, alert, setAlert}}>
      <Container>{estaLogado ? <Lista></Lista> : <Login></Login>}</Container>
      </LoginContext.Provider>
    </>
  );
}

export default App;
