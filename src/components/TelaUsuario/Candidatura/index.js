import Logo from "../../../img/logo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PaginaContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #efefff;
  min-height: 100vh;
`;

const BarraNavegacao = styled.div`
  background-color: #7000d8;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImagemLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const ItensNav = styled.div`
  display: flex;
  gap: 15px;
`;

const BotaoNav = styled.button`
  background-color: ${(props) => (props.ativo ? "#000" : "#b188ff")};
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

const InfoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const NomeUsuario = styled.span`
  font-size: 12px;
  color: #ffefff;
`;

const Avatar = styled.div`
  background-color: #d2bfff;
  border-radius: 50%;
  padding: 10px;
  font-size: 18px;
`;

export default function CandidaturaUsuario() {
  const navigate = useNavigate();

  const handleCandidaturas = () => {
    navigate("/candidaturaUsuario");
  };

  const handleRelatorios = () => {
    navigate("/relatorios");
  };

  const handleVagas = () => {
    navigate("/vagasU");
  };

  const handlePerfil = () => {
    navigate("/perfilU");
  };

  return (
    <PaginaContainer>
      {/* NAVBAR */}
      <BarraNavegacao>
        <LogoContainer>
          <ImagemLogo src={Logo} alt="Logo" />
        </LogoContainer>

        <ItensNav>
          <BotaoNav onClick={handleVagas}>Vagas</BotaoNav>
          <BotaoNav onClick={handleRelatorios}>Relatórios</BotaoNav>
          <BotaoNav onClick={handleCandidaturas}>Candidaturas</BotaoNav>
        </ItensNav>

        <InfoUsuario onClick={handlePerfil}>
          <NomeUsuario>Usuário</NomeUsuario>
          <Avatar>👤</Avatar>
        </InfoUsuario>
      </BarraNavegacao>
    </PaginaContainer>
    
  );
}
