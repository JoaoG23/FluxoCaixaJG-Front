import { Link, useNavigate } from "react-router-dom";
import DarkButton from "../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Card";
import { listaConfiguracao } from "./data/listaConfiguracao";
import { Configuracao } from "./types/Configuracao";

import { ContainerStyle } from "./styles";
const Configuracoes = () => {
  // const navigate = useNavigate();

  // const toEdit = (id: number | string) => {
  //   navigate(`/admin/usuarios/${id}`);
  // };

  return (
    <ContainerStyle>
      {listaConfiguracao.map((configuracao: Configuracao) => (
        <Link to={configuracao.path}>
          <Card>
            <p key={configuracao.id}>{configuracao.descricao}</p>
            <img src={configuracao.img} alt={configuracao.descricao}></img>
          </Card>
        </Link>
      ))}
    </ContainerStyle>
  );
};

export default Configuracoes;