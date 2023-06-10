import { Button, ContainerScroll, Header, Row, TextH4 } from "../../theme";
import { TexInput } from "../../theme";
import "boxicons";
import { useState } from "react";
import Tittle from "../Tittle";
import Alert from "../Alert";

const Lista = () => {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState("");
  const {alert, setAlert} = useContext(LoginContext)
  const inserirItem = () => {
      let empty = item === '';
      let existe = lista.find((cadaItem => cadaItem === item));
      if(empty){
        setAlert({titulo: "Alerta", mensagem: "digite algo para salvar", active: true});
        return;
      }
      if(existe){
        setAlert({titulo: "Alerta", mensagem: "Existe item já existe!", active: true});
        return
      }
      setLista([...lista, item]);
      setItem("");

  };

  const deletarItem = (fruta) => {
    setLista(lista.filter((cadaFruta) => cadaFruta != fruta));
  };

  return (
    <>
      <Header>
        <Tittle titulo="Lista de compra"></Tittle>
        <Row>
          <TexInput
            className="w100"
            type="text"
            value={item}
            placeholder="Digete o produto"
            onChange={(e) => setItem(e.target.value)}
          />
          <Button onClick={inserirItem}>
            <box-icon name="plus-circle" color="white"></box-icon>
          </Button>
        </Row>
      </Header>

      <ContainerScroll>
        {lista.map((item, key) => (
          <Row key={key} className="list-item">
            <TextH4>{item}</TextH4>
            <Button onClick={() => deletarItem(item)}>
              <box-icon name="trash" color="white"></box-icon>
            </Button>
          </Row>
        ))}
      </ContainerScroll>
      <Alert 
      titulo={alert.titulo} 
      mensagem={alert.mensagem} 
      active={alert.active}/>
    </>
  );
};
export default Lista;
