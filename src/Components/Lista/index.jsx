import { Button, ContainerScroll, Row, TextH4 } from "../../theme";
import { TexInput } from "../../theme";
import "boxicons";
import { useState } from "react";

const Lista = () => {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState('')

  const deletarItem = (fruta) => {
    setLista(lista.filter(cadaFruta => cadaFruta != fruta));
  }

  return (
    <>
      <Row>
        <TexInput 
        className="w100"
         type="text" 
         value={item}
         placeholder="Digete o produto" 
         onChange={(e) => setItem(e.target.value)}/>
        <Button onClick={() => {setLista([...lista, item]); setItem('');}}>
          <box-icon name="plus-circle" color="white"></box-icon>
        </Button>
      </Row>

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
    </>
  );
};

export default Lista;
